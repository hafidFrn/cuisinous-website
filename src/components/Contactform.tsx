import { useState, FormEvent, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

// API response type
interface ApiResponse {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.errors.nameRequired", "Name is required");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.emailRequired", "Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.errors.emailInvalid", "Please enter a valid email address");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("contact.errors.subjectRequired", "Subject is required");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.errors.messageRequired", "Message is required");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.errors.messageTooShort", "Message must be at least 10 characters long");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setErrors({});
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        if (result.errors) {
          const transformedErrors: Record<string, string> = {};
          Object.entries(result.errors).forEach(([key, value]) => {
            transformedErrors[key] = value[0] || '';
          });
          setErrors(transformedErrors);
        }
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          {t("contact.title", "Contact Us")}
        </CardTitle>
        <p className="text-muted-foreground text-center">
          {t("contact.subtitle", "Have questions? We're here to help!")}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                {t("contact.name", "Your Name")}
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("contact.name", "Your Name")}
                disabled={status === "loading"}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                {t("contact.email", "Your Email")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("contact.email", "Your Email")}
                disabled={status === "loading"}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">
              {t("contact.subject", "Subject")}
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder={t("contact.subject", "Subject")}
              disabled={status === "loading"}
              className={errors.subject ? "border-red-500" : ""}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">
              {t("contact.message", "Your Message")}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder={t("contact.message", "Your Message")}
              className={`resize-none ${errors.message ? "border-red-500" : ""}`}
              disabled={status === "loading"}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full"
            size="lg"
          >
            {status === "loading" ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                {t("contact.sending", "Sending...")}
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {t("contact.send", "Send Message")}
              </>
            )}
          </Button>
          
          {status === "success" && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">
                {t("contact.success", "Thank you! Your message has been sent successfully.")}
              </span>
            </div>
          )}
          
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">
                {t("contact.error", "Sorry, there was an error sending your message. Please try again.")}
              </span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;