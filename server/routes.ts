import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { fullName, companyName, email, phone, serviceType, contactMethod, message } = req.body;
      
      // Validate required fields
      if (!fullName || !companyName || !email || !phone || !serviceType || !contactMethod) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // Basic phone validation (US format)
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (!phoneRegex.test(phone)) {
        return res.status(400).json({ message: "Invalid phone number format" });
      }
      
      // Store the contact request
      const contactRequest = await storage.createContactRequest({
        fullName,
        companyName,
        email,
        phone,
        serviceType,
        contactMethod,
        message: message || "",
        createdAt: new Date(),
      });
      
      res.status(201).json({ 
        message: "Contact request submitted successfully",
        id: contactRequest.id
      });
    } catch (error) {
      console.error("Error processing contact request:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
