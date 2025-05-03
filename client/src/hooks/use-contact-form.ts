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
    
    // Show a toast notification
    toast({
      title: "Submitting your request...",
      description: "Thank you for contacting PurePoint Cleaning.",
    });
    
    try {
      // Get the form element from the event
      const form = e.target as HTMLFormElement;
      
      // Encode the form data for Netlify
      const formEncoded = new URLSearchParams();
      
      // Add all form data
      Object.entries(formData).forEach(([key, value]) => {
        formEncoded.append(key, value);
      });
      
      // Add the form name
      formEncoded.append('form-name', 'contact');
      
      // Add bot-field honeypot (will be empty for real users)
      formEncoded.append('bot-field', '');
      
      // Log form data for debugging (remove in production)
      console.log('Submitting form data:', Object.fromEntries(formEncoded));
      
      // Submit the form to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formEncoded.toString()
      });
      
      // Check if successful
      if (response.ok) {
        console.log('Form submitted successfully');
        
        // Reset form
        setFormData(initialFormData);
        
        // Show success notification
        toast({
          title: "Form submitted successfully!",
          description: "We'll be in touch with you shortly.",
        });
        
        // Redirect to success page
        window.location.href = '/success';
      } else {
        throw new Error(`Form submission failed: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error submitting form",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
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
