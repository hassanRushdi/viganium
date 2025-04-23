import { useEffect, useState } from "react";
import axios from "axios";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFormStatus = () => {
    setFormStatus((prev) => ({
      ...prev,
      isSuccess: false,
      isError: false,
      message: "",
    }));
  };

  useEffect(() => {
    if (formStatus.isSuccess || formStatus.isError) {
      const timer = setTimeout(resetFormStatus, 2000);
      return () => clearTimeout(timer);
    }
  }, [formStatus.isSuccess, formStatus.isError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "",
    });

    try {
      const htmlbody = `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <div style="text-align: center; padding: 20px 0;">
            <div style="background-color: #0A1220; border-radius: 12px; padding: 20px; display: inline-block;">
              <img src="https://vigtas.com/assets/logo-DMBvoa3A.png" alt="Vigtas Logo" style="max-width: 150px; border-radius: 8px;" />
            </div>
          </div>
          <p style="font-size: 16px; color: #555;">You have received a new message from the contact us form on Vigtas:</p>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #1a73e8;">${formData.email}</a></p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone}" style="color: #1a73e8;">${formData.phone}</a></p>
          </div>
          <div style="margin-top: 20px;">
            <p style="font-size: 16px; color: #555;"><strong>Message:</strong></p>
            <div style="padding: 15px; background-color: #f0f0f0; border-left: 4px solid #0A1220; font-style: italic; color: #333;">
              ${formData.message}
            </div>
          </div>
          <p style="font-size: 16px; color: #555; margin-top: 30px;">Best regards,</p>
          <p style="font-size: 16px; font-weight: bold; color: #333;">Vigtas Team</p>
        </div>
      `;

      const encodedHtmlBody = encodeURIComponent(htmlbody);

      const res = await axios.post(
        `https://viganium.com/mail_sender.php?data=${encodedHtmlBody}`,
        {},
        { headers: { Accept: "application/json" } }
      );

      if (res.status === 200) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: "Your message has been sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return {
    formData,
    formStatus,
    handleInputChange,
    handleSubmit,
  };
};
