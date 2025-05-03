import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "./use-toast";

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  contactMethod: string;
  message: string;
}

export const useContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormData: ContactFormData = {
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceType: "",
    contactMethod: "",
    message: "",
  };

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    // Required fields
    const requiredFields: (keyof ContactFormData)[] = [
      "fullName",
      "companyName",
      "email",
      "phone",
      "serviceType",
      "contactMethod",
    ];

    // Check if any required field is empty
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      toast({
        title: "Please fill out all required fields",
        description: "All fields are required except for the message.",
        variant: "destructive",
      });
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    // Validate phone number (basic validation for US numbers)
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number (e.g., 555-123-4567).",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Use Fetch API for Netlify form submission
    try {
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      
      // Use URLSearchParams for compatibility
      const urlEncodedData = new URLSearchParams();
      for (const pair of formData.entries()) {
        urlEncodedData.append(pair[0], pair[1] as string);
      }
      
      // Send the form data to Netlify
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData.toString(),
      });
      
      // Check if the submission was successful
      if (response.ok) {
        toast({
          title: "Form submitted successfully!",
          description: "Thank you for contacting PurePoint Cleaning. We'll be in touch soon.",
        });
        // Reset the form after successful submission
        setFormData(initialFormData);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
};
