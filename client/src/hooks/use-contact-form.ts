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
    if (!validateForm()) {
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);
    
    // Let Netlify handle the form submission natively
    // The form will submit naturally to Netlify's default thank-you page
    toast({
      title: "Submitting your request...",
      description: "Thank you for contacting PurePoint Cleaning.",
    });
    
    // The form will naturally submit, and Netlify will handle the rest
    // No need to call preventDefault() or manually submit the form
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
};
