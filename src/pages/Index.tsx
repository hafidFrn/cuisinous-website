import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, ShieldCheck, DollarSign, Utensils } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import heroImg from "../assets/hero-homemade.jpg";
import chefImg from "../assets/chef-cooking.jpg";
import cuisinousLogo from "../assets/cuisinous-logo.svg";
import exploreIcon from "../assets/explore-icon.png";
import chooseIcon from "../assets/choose-icon.png";
import enjoyIcon from "../assets/enjoy-icon.png";
import recipe from '../assets/recipe-1.jpg';
const Index = () => {
  const { t } = useTranslation();
  const canonical = typeof window !== "undefined" ? window.location.href : "/";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{t("meta.title", "Cuisinous - Des repas faits maison, préparés par vos voisins")}</title>
        <meta name="description" content={t("meta.description", "Découvrez, commandez et savourez des plats authentiques à prix abordable, tout en soutenant vos chefs locaux.")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={t("meta.title", "Cuisinous - Homemade meals, prepared by your neighbors")} />
        <meta property="og:description" content={t("meta.description", "Discover, order, and enjoy authentic dishes at affordable prices — while supporting local chefs.")} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImg} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2">
            <img src={cuisinousLogo} alt="Cuisinous Logo" className="h-8" />
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">
                {t("nav.howItWorks", "Comment ça marche")}
              </a>
              <a href="#why-choose" className="text-sm hover:text-primary transition-colors">
                {t("nav.whyChoose", "Pourquoi nous")}
              </a>
              <a href="#for-chefs" className="text-sm hover:text-primary transition-colors">
                {t("nav.forChefs", "Pour les chefs")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Button asChild variant="hero" size="sm">
                <a href="#cta">{t("nav.getStarted", "Commencer")}</a>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main id="home" className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImg}
            alt={t("hero.imageAlt", "Des repas faits maison délicieux préparés par des chefs locaux")}
            className="absolute inset-0 h-full w-full object-cover"
            decoding="async"
          />
          <div 
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
            aria-hidden
          />
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 text-on-image max-w-4xl mx-auto">
              {t("hero.title", "Des repas faits maison, préparés par vos voisins")}
            </h1>
            <p className="text-xl md:text-2xl text-on-image/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t("hero.subtitle", "Découvrez, commandez et savourez des plats authentiques à prix abordable, tout en soutenant vos chefs locaux.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                <Utensils className="mr-2" />
                {t("hero.findMeal", "Je cherche un repas")}
              </Button>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                <Users className="mr-2" />
                {t("hero.imChef", "Je cuisine et je vends")}
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 md:py-32 bg-soft-cream/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-cozy-brown">
                {t("howItWorks.title", "Comment ça marche")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("howItWorks.subtitle", "En 3 étapes simples")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-2 hover:border-warm-orange/50 transition-all duration-300 shadow-elegant">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-warm">
                    <img 
                      src={exploreIcon} 
                      alt="Explore nearby meals"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-cozy-brown">
                    1. {t("howItWorks.explore.title", "Explorez")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {t("howItWorks.explore.description", "Parcourez la carte et découvrez les plats disponibles autour de vous.")}
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 hover:border-warm-orange/50 transition-all duration-300 shadow-elegant">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-warm">
                    <img 
                      src={chooseIcon} 
                      alt="Choose from chef profiles"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-cozy-brown">
                    2. {t("howItWorks.choose.title", "Choisissez")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {t("howItWorks.choose.description", "Consultez les profils des chefs, leurs menus et leurs notes.")}
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 hover:border-warm-orange/50 transition-all duration-300 shadow-elegant">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-warm">
                    <img 
                      src={enjoyIcon} 
                      alt="Enjoy homemade meals"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-cozy-brown">
                    3. {t("howItWorks.enjoy.title", "Savourez")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {t("howItWorks.enjoy.description", "Commandez et recevez un repas fait maison, préparé avec amour.")}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Cuisinous */}
        <section id="why-choose" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={recipe}
                  alt={t("whyChoose.imageAlt", "Famille heureuse partageant un repas fait maison")}
                  className="w-full h-auto rounded-2xl shadow-elegant"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-cozy-brown">
                  {t("whyChoose.title", "Pourquoi choisir Cuisinous ?")}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-warm-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="text-warm-orange" size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cozy-brown mb-1">
                        {t("whyChoose.authentic.title", "Des repas faits maison avec authenticité")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("whyChoose.authentic.description", "Savourez des plats préparés avec passion et savoir-faire traditionnel.")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-warm-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="text-warm-orange" size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cozy-brown mb-1">
                        {t("whyChoose.community.title", "Soutien aux talents culinaires locaux")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("whyChoose.community.description", "Contribuez à l'économie locale en encourageant les chefs de votre quartier.")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-warm-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <ShieldCheck className="text-warm-orange" size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cozy-brown mb-1">
                        {t("whyChoose.safety.title", "Hygiène et sécurité alimentaire certifiées (MAPAQ)")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("whyChoose.safety.description", "Tous nos chefs respectent les normes sanitaires les plus strictes.")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-warm-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <DollarSign className="text-warm-orange" size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cozy-brown mb-1">
                        {t("whyChoose.pricing.title", "Prix justes et transparents")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("whyChoose.pricing.description", "Des tarifs équitables sans frais cachés, bénéfiques pour tous.")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-warm-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="text-warm-orange" size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cozy-brown mb-1">
                        {t("whyChoose.together.title", "Une communauté qui rassemble")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("whyChoose.together.description", "Créez des liens avec vos voisins autour de la passion culinaire.")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Chefs */}
        <section id="for-chefs" className="py-20 md:py-32 bg-soft-cream/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-cozy-brown">
                  {t("forChefs.title", "Transformez votre passion en revenu")}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t("forChefs.subtitle", "Vous aimez cuisiner? Transformez votre passion en revenu. Rejoignez Cuisinous, partagez vos plats et gagnez de l'argent facilement.")}
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-warm-orange flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-muted-foreground">
                      {t("forChefs.feature1", "Zéro frais cachés, seulement une commission de 20 % par commande")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-warm-orange flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-muted-foreground">
                      {t("forChefs.feature2", "Plus de visibilité dans votre quartier")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-warm-orange flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-muted-foreground">
                      {t("forChefs.feature3", "Assistance et support pour réussir")}
                    </span>
                  </div>
                </div>
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                  <Users className="mr-2" />
                  {t("forChefs.cta", "Rejoindre Cuisinous")}
                </Button>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={chefImg}
                  alt={t("forChefs.imageAlt", "Chef passionné cuisinant dans sa cuisine")}
                  className="w-full max-w-md h-auto rounded-2xl shadow-elegant"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-20 md:py-32 bg-gradient-to-br from-warm-orange/10 to-warm-orange/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-cozy-brown max-w-4xl mx-auto">
              {t("cta.title", "Rejoignez dès aujourd'hui la communauté Cuisinous et découvrez un nouveau monde de saveurs.")}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t("cta.subtitle", "Des milliers de repas délicieux vous attendent. Commencez votre aventure culinaire maintenant.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                <Utensils className="mr-2" />
                {t("cta.order", "Je commande maintenant")}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2 border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white">
                <Users className="mr-2" />
                {t("cta.becomeChef", "Je deviens chef partenaire")}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-soft-cream/20">
        <div className="container mx-auto py-12 px-6">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="flex items-center gap-2">
              <img src={cuisinousLogo} alt="Cuisinous Logo" className="h-10" />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {t("footer.copyright", `© ${new Date().getFullYear()} Cuisinous. Tous droits réservés.`)}
              </p>
            </div>
            <nav className="flex items-center justify-center md:justify-end gap-6 text-sm">
              <a href="/legal?section=terms" className="hover:text-primary transition-colors">
                {t("footer.terms", "Conditions")}
              </a>
              <a href="/legal?section=privacy" className="hover:text-primary transition-colors">
                {t("footer.privacy", "Confidentialité")}
              </a>
              <a href="#cta" className="hover:text-primary transition-colors">
                {t("footer.contact", "Contact")}
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;