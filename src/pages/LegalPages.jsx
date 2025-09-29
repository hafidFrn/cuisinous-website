import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Shield, Lock, Utensils, UserCheck, Heart, ArrowLeft } from "lucide-react";
import LanguageSwitcher from "../components/LanguageSwitcher";

const LegalPages = () => { 
  const { t, i18n } = useTranslation(); 
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('terms'); 

  const legalDocuments = { 
    terms: { 
      title: t('legal.terms.title'), 
      icon: FileText, 
      content: { 
        en: [ 
          { title: "1. Purpose", content: "These T&C define the rules for using the Cuisinous platform, which connects Vendors (chefs) offering homemade meals with Customers looking to order such meals. Cuisinous acts solely as a facilitator and does not cook or deliver meals." }, 
          { title: "2. Registration and Account", content: "All users must create an account with valid email and phone number. Vendors must provide required documents for verification. Users are responsible for maintaining login credentials." }, 
          { title: "3. Use of the Platform", content: "Customers can browse menus and order meals from local vendors. Vendors post offers, set prices, and are responsible for meal quality and compliance." }, 
          { title: "4. Payments and Commissions", content: "All payments processed through Cuisinous. 20% commission charged per transaction. Remaining funds transferred to vendors after deductions." }, 
          { title: "5. Responsibilities", content: "Vendors ensure hygiene and food safety. Customers use platform legally. Cuisinous acts as technology intermediary." }, 
          { title: "6. Cancellations and Refunds", content: "Policies set by each vendor. Cuisinous may intervene in disputes but doesn't guarantee refunds." }, 
          { title: "7. Data Protection", content: "Personal data processed according to Privacy Policy." }, 
          { title: "8. Intellectual Property", content: "Platform elements belong to Cuisinous." }, 
          { title: "9. Suspension or Termination", content: "Accounts may be suspended for violations." }, 
          { title: "10. Governing Law", content: "Governed by laws of Québec and Canada." } 
        ], 
        fr: [ 
          { title: "1. Objet", content: "Les présentes CGU définissent les règles d'utilisation de la plateforme Cuisinous, qui met en relation des fournisseurs (chefs) proposant des repas faits maison avec des clients qui commandent ces repas. Cuisinous agit comme intermédiaire." }, 
          { title: "2. Inscription et Compte", content: "Tout utilisateur doit créer un compte avec email et téléphone valides. Les fournisseurs doivent fournir documents requis. Chaque utilisateur est responsable de ses identifiants." }, 
          { title: "3. Utilisation de la Plateforme", content: "Les clients explorent menus et commandent repas. Les fournisseurs publient offres, fixent prix et sont responsables de la qualité." }, 
          { title: "4. Paiements et Commissions", content: "Paiements via Cuisinous. Commission de 20% par transaction. Fonds reversés aux fournisseurs après déductions." }, 
          { title: "5. Responsabilités", content: "Fournisseurs garantissent hygiène et sécurité. Clients utilisent plateforme légalement. Cuisinous est intermédiaire technologique." }, 
          { title: "6. Annulations et Remboursements", content: "Politiques définies par chaque fournisseur. Cuisinous peut intervenir en litiges." }, 
          { title: "7. Protection des Données", content: "Données traitées selon Politique de Confidentialité." }, 
          { title: "8. Propriété Intellectuelle", content: "Éléments de la plateforme appartiennent à Cuisinous." }, 
          { title: "9. Suspension ou Résiliation", content: "Comptes peuvent être suspendus pour violations." }, 
          { title: "10. Droit Applicable", content: "Régie par lois du Québec et Canada." } 
        ] 
      } 
    }, 
    privacy: { 
      title: t('legal.privacy.title'), 
      icon: Shield, 
      content: { 
        en: [ 
          { title: "1. Information We Collect", content: "We collect identification data, account information, financial data, geolocation, user content, and technical data to provide and improve our services." }, 
          { title: "2. Purpose of Use", content: "Your information is used to manage accounts, process orders, improve services, ensure security, comply with legal obligations, and communicate updates." }, 
          { title: "3. Sharing of Information", content: "We never sell your data. We may share with payment providers, delivery partners, technical service providers, and legal authorities when required." }, 
          { title: "4. Data Retention", content: "We retain information as long as your account is active or as required by law (e.g., 7 years for financial data)." }, 
          { title: "5. Security", content: "We implement administrative, technical, and physical safeguards including encryption and access controls." }, 
          { title: "6. Your Rights", content: "You have rights to access, correct, delete, and port your data under Law 25 (Québec) and Canadian privacy laws." }, 
          { title: "7. Children's Data", content: "Service not intended for under 14. Minors 14-18 need parental consent to register as vendors." }, 
          { title: "8. Cookies", content: "We use cookies for functionality, analytics, and personalization. You can manage preferences in browser settings." }, 
          { title: "9. International Transfers", content: "Data transfers outside Canada comply with applicable privacy laws." }, 
          { title: "10. Policy Updates", content: "We may update this policy with changes posted on our website." } 
        ], 
        fr: [ 
          { title: "1. Renseignements Recueillis", content: "Nous recueillons données identification, compte, financières, localisation, contenu utilisateur, et données techniques." }, 
          { title: "2. Finalités d'Utilisation", content: "Vos données servent à gérer comptes, traiter commandes, améliorer services, assurer sécurité, et respecter obligations légales." }, 
          { title: "3. Partage des Renseignements", content: "Nous ne vendons jamais vos données. Partage avec fournisseurs paiement, partenaires livraison, et autorités légales." }, 
          { title: "4. Conservation des Données", content: "Conservation tant que compte actif ou selon exigences légales (ex. 7 ans données financières)." }, 
          { title: "5. Sécurité", content: "Mesures techniques et organisationnelles incluant cryptage et contrôle d'accès." }, 
          { title: "6. Vos Droits", content: "Droits d'accès, rectification, suppression, et portabilité selon Loi 25 (Québec)." }, 
          { title: "7. Données des Mineurs", content: "Service pas pour moins de 14 ans. Mineurs 14-18 besoin consentement parental." }, 
          { title: "8. Témoins (Cookies)", content: "Cookies pour fonctionnalité, analyse, et personnalisation. Gestion dans paramètres navigateur." }, 
          { title: "9. Transferts Internationaux", content: "Transferts hors Canada conformes aux lois applicables." }, 
          { title: "10. Modifications de la Politique", content: "Mises à jour publiées sur notre site web." } 
        ] 
      } 
    }, 
    vendor: { 
      title: t('legal.vendorAgreement.title'), 
      icon: Utensils, 
      content: { 
        en: [ 
          { title: "1. Purpose", content: "This agreement defines terms for Vendors offering homemade meals through Cuisinous platform." }, 
          { title: "2. Vendor's Obligations", content: "Prepare meals complying with Québec hygiene standards. Provide accurate ingredient information. Maintain required licenses. Be professional with customers." }, 
          { title: "3. Cuisinous' Obligations", content: "Provide platform access. Process payments. Offer technical support." }, 
          { title: "4. Commissions and Payments", content: "15% commission per sale. Payments via bank transfer weekly/monthly. Transaction fees deducted." }, 
          { title: "5. Responsibilities", content: "Vendor solely responsible for meal quality and safety. Cuisinous acts as intermediary." }, 
          { title: "6. Intellectual Property", content: "Vendor retains recipe ownership. Grants Cuisinous license to use photos for promotion." }, 
          { title: "7. Term and Termination", content: "Effective upon acceptance. 15 days' written notice for termination. Immediate termination for serious breaches." }, 
          { title: "8. Governing Law", content: "Governed by laws of Québec and Canada." } 
        ], 
        fr: [ 
          { title: "1. Objet", content: "Ce contrat définit conditions pour Fournisseurs offrant repas maison via Cuisinous." }, 
          { title: "2. Obligations du Fournisseur", content: "Préparer repas respectant normes hygiène Québec. Fournir informations ingrédients exactes. Détenir licences requises. Être professionnel." }, 
          { title: "3. Obligations de Cuisinous", content: "Fournir accès plateforme. Traiter paiements. Offrir support technique." }, 
          { title: "4. Commissions et Paiements", content: "Commission 15% par vente. Paiements virement bancaire hebdomadaire/mensuel. Frais déduits." }, 
          { title: "5. Responsabilités", content: "Fournisseur seul responsable qualité et sécurité repas. Cuisinous intermédiaire." }, 
          { title: "6. Propriété Intellectuelle", content: "Fournisseur garde propriété recettes. Licence à Cuisinous pour photos promotion." }, 
          { title: "7. Durée et Résiliation", content: "Effet à l'acceptation. Préavis 15 jours. Résiliation immédiate pour manquements graves." }, 
          { title: "8. Droit Applicable", content: "Régie par lois Québec et Canada." } 
        ] 
      } 
    }, 
    customer: { 
      title: t('legal.customer.title'), 
      icon: UserCheck, 
      content: { 
        en: [ 
          { title: "1. Purpose", content: "These Terms govern Customers ordering homemade meals through Cuisinous." }, 
          { title: "2. Registration", content: "Provide accurate information. Maintain account security. Responsible for account use." }, 
          { title: "3. Orders and Payments", content: "Meals from independent Vendors. Pay displayed price including taxes. Secure payment processing." }, 
          { title: "4. Liability", content: "Meals prepared by Vendors. Cuisinous not responsible for preparation, quality, or allergic reactions. Check ingredients before ordering." }, 
          { title: "5. Cancellation and Refunds", content: "Vendor-specific cancellation policies. Refunds according to platform policy." }, 
          { title: "6. Platform Use", content: "Use legally and respectfully. Abuse may result in account suspension." }, 
          { title: "7. Intellectual Property", content: "Platform content belongs to Cuisinous. Unauthorized reproduction prohibited." }, 
          { title: "8. Personal Data", content: "Governed by Privacy Policy." }, 
          { title: "9. Governing Law", content: "Governed by laws of Québec and Canada." } 
        ], 
        fr: [ 
          { title: "1. Objet", content: "Ces CGU régissent Clients commandant repas maison via Cuisinous." }, 
          { title: "2. Inscription", content: "Fournir informations exactes. Sécurité compte. Responsable utilisation compte." }, 
          { title: "3. Commandes et Paiements", content: "Repas de Fournisseurs indépendants. Payer prix affiché taxes incluses. Paiements sécurisés." }, 
          { title: "4. Responsabilité", content: "Repas préparés par Fournisseurs. Cuisinous pas responsable préparation, qualité, allergies. Vérifier ingrédients avant commande." }, 
          { title: "5. Annulation et Remboursement", content: "Politiques annulation par Fournisseur. Remboursements selon politique plateforme." }, 
          { title: "6. Utilisation Plateforme", content: "Utilisation légale et respectueuse. Abus peut entraîner suspension." }, 
          { title: "7. Propriété Intellectuelle", content: "Contenu plateforme appartient à Cuisinous. Reproduction interdite." }, 
          { title: "8. Données Personnelles", content: "Régie par Politique de Confidentialité." }, 
          { title: "9. Droit Applicable", content: "Régie par lois Québec et Canada." } 
        ] 
      } 
    }, 
    refund: { 
      title: t('legal.refund.title'), 
      icon: Heart, 
      content: { 
        en: [ 
          { title: "1. Cancellation by Client", content: "Full refund if canceled within 15 minutes of confirmation. After that, depends on Vendor's policy. Non-refundable if preparation started." }, 
          { title: "2. Cancellation by Vendor", content: "Full refund if Vendor cancels (ingredient shortage, emergency). Automatic refund via original payment method." }, 
          { title: "3. Incorrect or Incomplete Orders", content: "Contact within 24 hours of receipt. Partial or full refund after verification." }, 
          { title: "4. Quality and Allergies", content: "Vendors responsible for meal quality and accuracy. No refunds for undisclosed allergies if ingredients were listed." }, 
          { title: "5. Refund Timelines", content: "Processed within 5-10 business days depending on payment method." } 
        ], 
        fr: [ 
          { title: "1. Annulation par le Client", content: "Remboursement complet si annulé dans 15 minutes après confirmation. Après, dépend politique Fournisseur. Non remboursable si préparation commencée." }, 
          { title: "2. Annulation par le Fournisseur", content: "Remboursement complet si Fournisseur annule. Remboursement automatique via méthode paiement originale." }, 
          { title: "3. Commandes Incorrectes ou Incomplètes", content: "Contacter dans 24 heures après réception. Remboursement partiel ou complet après vérification." }, 
          { title: "4. Qualité et Allergies", content: "Fournisseurs responsables qualité et exactitude repas. Pas remboursement allergies non déclarées si ingrédients listés." }, 
          { title: "5. Délais de Remboursement", content: "Traités dans 5-10 jours ouvrables selon méthode paiement." } 
        ] 
      } 
    }, 
    safety: { 
      title: t('legal.safety.title'), 
      icon: Lock, 
      content: { 
        en: [ 
          { title: "1. MAPAQ Regulations", content: "Vendors must comply with MAPAQ regulations including required certifications, hygiene standards, and food safety training." }, 
          { title: "2. Hygiene and Preparation", content: "Meals prepared in clean, safe environments. Regular sanitization of utensils and equipment. Proper ingredient storage." }, 
          { title: "3. Allergies and Ingredient Information", content: "Vendors must clearly list ingredients. Clients responsible for checking before ordering. Cuisinous not liable for allergic reactions if information properly disclosed." }, 
          { title: "4. Compliance and Responsibility", content: "Cuisinous may suspend non-compliant Vendors. Vendors fully responsible for legal and sanitary compliance of their meals." } 
        ], 
        fr: [ 
          { title: "1. Règlementation MAPAQ", content: "Fournisseurs doivent respecter règlements MAPAQ incluant certifications, normes hygiène, et formation sécurité alimentaire." }, 
          { title: "2. Hygiène et Préparation", content: "Repas préparés environnements propres. Désinfection régulière ustensiles. Entreposage ingrédients approprié." }, 
          { title: "3. Allergies et Information Ingrédients", content: "Fournisseurs doivent lister clairement ingrédients. Clients responsables vérification avant commande. Cuisinous pas responsable réactions allergiques si information communiquée." }, 
          { title: "4. Contrôle et Responsabilité", content: "Cuisinous peut suspendre Fournisseurs non conformes. Fournisseurs pleinement responsables conformité légale et sanitaire." } 
        ] 
      } 
    } 
  }; 

  const currentDoc = legalDocuments[activeSection]; 
  const IconComponent = currentDoc.icon; 
  const currentLanguage = i18n.language; 
  const content = currentDoc.content[currentLanguage] || currentDoc.content.en; 

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
            {t('legal.backToHome')}
          </Button>
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold mb-4">{t('legal.title')}</h1> 
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto"> 
              {t('legal.subtitle')} 
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
                <CardTitle className="text-lg">{t('legal.navigation')}</CardTitle> 
              </CardHeader> 
              <CardContent className="p-0"> 
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
                <CardTitle className="text-lg">{t('legal.contact.title')}</CardTitle> 
              </CardHeader> 
              <CardContent> 
                <p className="text-sm text-muted-foreground mb-4"> 
                  {t('legal.contact.description')} 
                </p> 
                <div className="space-y-2"> 
                  <div className="flex items-center gap-2"> 
                    <FileText className="h-4 w-4" /> 
                    <span className="text-sm">support@cuisinous.ca</span> 
                  </div> 
                  <div className="flex items-center gap-2"> 
                    <Shield className="h-4 w-4" /> 
                    <span className="text-sm">privacy@cuisinous.ca</span> 
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
                  {t('legal.lastUpdated')} {new Date().toLocaleDateString(currentLanguage, { year: 'numeric', month: 'long', day: 'numeric' })} 
                </p> 
              </CardHeader> 
              <CardContent> 
                <ScrollArea className="h-[600px] pr-6"> 
                  <div className="space-y-8"> 
                    {content.map((section, index) => ( 
                      <div key={index} className="border-l-4 border-primary pl-4"> 
                        <h3 className="text-lg font-semibold mb-2">{section.title}</h3> 
                        <p className="text-muted-foreground leading-relaxed">{section.content}</p> 
                      </div> 
                    ))} 
                  </div> 
                  {/* Signatures for Vendor Agreement */} 
                  {activeSection === 'vendor' && ( 
                    <div className="mt-8 pt-8 border-t"> 
                      <div className="grid md:grid-cols-2 gap-8"> 
                        <div> 
                          <h4 className="font-semibold mb-4">{t('legal.vendorAgreement.signature.vendor')}</h4> 
                          <div className="space-y-2"> 
                            <div className="border-b border-muted-foreground/20 pb-1">_________________________</div> 
                            <div className="text-sm text-muted-foreground">{t('legal.vendorAgreement.signature.name')}</div> 
                            <div className="border-b border-muted-foreground/20 pb-1 mt-4">_________________________</div> 
                            <div className="text-sm text-muted-foreground">{t('legal.vendorAgreement.signature.date')}</div> 
                          </div> 
                        </div> 
                        <div> 
                          <h4 className="font-semibold mb-4">{t('legal.vendorAgreement.signature.cuisinous')}</h4> 
                          <div className="space-y-2"> 
                            <div className="border-b border-muted-foreground/20 pb-1">_________________________</div> 
                            <div className="text-sm text-muted-foreground">{t('legal.vendorAgreement.signature.name')}</div> 
                            <div className="border-b border-muted-foreground/20 pb-1 mt-4">_________________________</div> 
                            <div className="text-sm text-muted-foreground">{t('legal.vendorAgreement.signature.date')}</div> 
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