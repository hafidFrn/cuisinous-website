import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FileText,
  Shield,
  Lock,
  Utensils,
  UserCheck,
  Heart,
  ArrowLeft,
} from "lucide-react";
import LanguageSwitcher from "../components/LanguageSwitcher";

const LegalPages = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("terms");

  const legalDocuments = {
    terms: {
      title: t("legal.terms.title"),
      icon: FileText,
      key: "terms",
    },
    privacy: {
      title: t("legal.privacy.title"),
      icon: Shield,
      key: "privacy",
    },
    vendor: {
      title: t("legal.vendorAgreement.title"),
      icon: Utensils,
      key: "vendorAgreement",
    },
    customer: {
      title: t("legal.customer.title"),
      icon: UserCheck,
      key: "customer",
    },
    refund: {
      title: t("legal.refund.title"),
      icon: Heart,
      key: "refund",
    },
    safety: {
      title: t("legal.safety.title"),
      icon: Lock,
      key: "safety",
    },
  };

  const currentDoc = legalDocuments[activeSection];
  const IconComponent = currentDoc.icon;
  const currentLanguage = i18n.language;

  const getSectionContent = () => {
    const sections = t(`legal.${currentDoc.key}.sections`, {
      returnObjects: true,
    });
    if (typeof sections === "object" && sections !== null) {
      return Object.values(sections);
    }
    return [];
  };

  const content = getSectionContent();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with Back Button and Language Switcher */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            onClick={handleBackToHome}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("legal.backToHome")}
          </Button>
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold mb-4">{t("legal.title")}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t("legal.subtitle")}
            </p>
          </div>
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t("legal.navigation")}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-1">
                <div className="space-y-1">
                  {Object.entries(legalDocuments).map(([key, doc]) => (
                    <Button
                      key={key}
                      variant={activeSection === key ? "secondary" : "ghost"}
                      className="w-full justify-start gap-3 h-auto py-3 px-4"
                      onClick={() => setActiveSection(key)}
                    >
                      <doc.icon className="h-4 w-4" />
                      <span className="text-left">{doc.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Contact Information */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">
                  {t("legal.contact.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("legal.contact.description")}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span className="text-sm">
                      {t("legal.contact.support")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm">
                      {t("legal.contact.privacy")}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <IconComponent className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">{currentDoc.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  {t("legal.lastUpdated")}{" "}
                  {new Date().toLocaleDateString(currentLanguage, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-6">
                  <div className="space-y-8">
                    {content.map((section, index) => (
                      <div
                        key={index}
                        className={`${
                          section.title 
                        }`}
                      >
                        {section.title && (
                          <h3 className="text-lg font-semibold mb-2">
                            {section.title}
                          </h3>
                        )}
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Signatures for Vendor Agreement */}
                  {activeSection === "vendor" && (
                    <div className="mt-8 pt-8 border-t">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4">
                            {t("legal.vendorAgreement.signature.vendor")}
                          </h4>
                          <div className="space-y-2">
                            <div className="border-b border-muted-foreground/20 pb-1">
                              _________________________
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {t("legal.vendorAgreement.signature.name")}
                            </div>
                            <div className="border-b border-muted-foreground/20 pb-1 mt-4">
                              _________________________
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {t("legal.vendorAgreement.signature.date")}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4">
                            {t("legal.vendorAgreement.signature.cuisinous")}
                          </h4>
                          <div className="space-y-2">
                            <div className="border-b border-muted-foreground/20 pb-1">
                              _________________________
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {t("legal.vendorAgreement.signature.name")}
                            </div>
                            <div className="border-b border-muted-foreground/20 pb-1 mt-4">
                              _________________________
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {t("legal.vendorAgreement.signature.date")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPages;
