import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UtensilsCrossed, Flame, Users, MapPin, Smartphone, ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/hero-cooking.jpg";
import recipe1 from "@/assets/recipe-1.jpg";
import recipe2 from "@/assets/recipe-2.jpg";
import recipe3 from "@/assets/recipe-3.jpg";
import cuisinousLogo from "../assets/cuisinous-logo.svg";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "/";
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{t('header.title')}</title>
        <meta
          name="description"
          content={t('header.description')}
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={t('header.title')} />
        <meta
          property="og:description"
          content={t('header.description')}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImg} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2">
            <img src={cuisinousLogo} alt="Cuisinous Logo" />
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">{t('header.features')}</a>
            <a href="#sellers" className="text-sm hover:text-primary transition-colors">{t('header.sellers')}</a>
            <a href="#buyers" className="text-sm hover:text-primary transition-colors">{t('header.buyers')}</a>
            <a href="#testimonials" className="text-sm hover:text-primary transition-colors">{t('header.testimonials')}</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">{t('header.contact')}</a>
            <Button asChild variant="secondary" size="sm">
              <a href="#signup">{t('header.getStarted')}</a>
            </Button>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      <main id="home" className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto py-6 sm:py-8 md:py-12">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src={heroImg}
              alt="A delicious homemade meal prepared by a local chef"
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
              sizes="(min-width: 1024px) 1200px, (min-width: 640px) 100vw, 100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent"
              aria-hidden
            />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-4 sm:gap-6 p-6 sm:p-8 md:p-12 min-h-[240px] sm:min-h-[300px] md:min-h-[420px]">
              <div className="max-w-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-3 text-[hsl(var(--on-image))]">
                  {t('hero.title')}
                </h1>
                <p className="text-[hsl(var(--on-image))]/85 text-base sm:text-lg max-w-prose">
                  {t('hero.subtitle')}
                </p>
              </div>
              <div className="flex flex-col gap-3 justify-self-start md:justify-self-end self-start md:self-end mt-4 md:mt-0">
                <Button variant="secondary" size="lg">
                  <a href="#signup">{t('hero.sellButton')}</a>
                </Button>
                <Button variant="outline" size="lg" className="bg-background/50">
                  <a href="#download">{t('hero.downloadButton')}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="container mx-auto py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('features.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-secondary/30 flex items-center justify-center">
                  <MapPin className="text-primary" />
                </div>
                <CardTitle>{t('features.location.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {t('features.location.description')}
              </CardContent>
            </Card>
            <Card className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-secondary/30 flex items-center justify-center">
                  <Smartphone className="text-primary" />
                </div>
                <CardTitle>{t('features.crossPlatform.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {t('features.crossPlatform.description')}
              </CardContent>
            </Card>
            <Card className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-secondary/30 flex items-center justify-center">
                  <ShieldCheck className="text-primary" />
                </div>
                <CardTitle>{t('features.safety.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {t('features.safety.description')}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* For Sellers */}
        <section id="sellers" className="bg-secondary/10 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('sellers.title')}</h2>
                <p className="text-muted-foreground mb-4">
                  {t('sellers.subtitle')}
                </p>
                <ul className="space-y-3">
                  {(t('sellers.features', { returnObjects: true }) as string[]).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 h-4 w-4 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6" size="lg">
                  <a href="#signup">{t('sellers.button')}</a>
                </Button>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <img
                  src={recipe1}
                  alt="Chef managing orders on Cuisinous dashboard"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* For Buyers */}
        <section id="buyers" className="container mx-auto py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 bg-card rounded-xl border border-border p-6 shadow-sm">
              <img
                src={recipe2}
                alt="Customer browsing Cuisinous mobile app"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('buyers.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('buyers.subtitle')}
              </p>
              <ul className="space-y-3">
                  {(t('buyers.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}                
              </ul>
              <Button className="mt-6" size="lg" variant="outline">
                <a href="#download">{t('buyers.button')}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-secondary/10 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('testimonials.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('testimonials.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {(t('testimonials.quotes', { returnObjects: true }) as { text: string; author: string }[]).map((quote, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4">
                      {quote.text}
                    </blockquote>
                    <div className="font-medium">{quote.author}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sign Up */}
        <section id="signup" className="container mx-auto py-16 md:py-24">
          <div className="max-w-3xl mx-auto rounded-xl border border-border p-8 md:p-10 bg-card shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">{t('signup.title')}</h2>
            <p className="text-muted-foreground text-center mb-6">
              {t('signup.subtitle')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-center">{t('signup.chef')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full">
                    {t('header.getStarted')}
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-center">{t('signup.foodLover')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full">
                    {t('header.getStarted')}
                  </Button>
                </CardContent>
              </Card>
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center">
              {t('signup.terms')}
            </p>
          </div>
        </section>

        {/* Download App */}
        <section id="download" className="bg-primary/5 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('download.title')}</h2>
                <p className="text-muted-foreground mb-6">
                  {t('download.subtitle')}
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
                      <path d="M10 2c1 .5 2 2 2 5"/>
                    </svg>
                    {t('download.appStore')}
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 0 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5a7 7 0 0 0-7-7c0-3 2-4 2-8z"/>
                    </svg>
                    {t('download.playStore')}
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={recipe3}
                    alt="Cuisinous mobile app screens"
                    className="w-64 h-auto rounded-xl shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={recipe2}
                    alt="Cuisinous mobile app screens"
                    className="w-64 h-auto rounded-xl shadow-lg absolute -right-20 -bottom-10 border-4 border-background"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container mx-auto py-16 md:py-24">
          <div className="max-w-3xl mx-auto rounded-xl border border-border p-8 md:p-10 bg-card shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">{t('contact.title')}</h2>
            <p className="text-muted-foreground text-center mb-6">
              {t('contact.subtitle')}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-3" aria-label="Contact form">
              <div className="grid md:grid-cols-2 gap-3">
                <Input type="text" placeholder="Your name" aria-label="Your name" className="h-12" required />
                <Input type="email" placeholder="Email address" aria-label="Email address" className="h-12" required />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <select id="subject" className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">

                  {(t('contact.options', { returnObjects: true }) as string[]).map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
              </div>
              <Textarea placeholder="Your message" aria-label="Your message" className="min-h-[140px]" required />
              <div className="flex justify-center">
                <Button type="submit" size="lg">{t('contact.send')}</Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={cuisinousLogo} alt="Cuisinous Logo" className="h-8" />
          </div>
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/terms" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer.careers')}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t('header.contact')}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;