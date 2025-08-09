import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UtensilsCrossed, Flame, Users } from "lucide-react";
import heroImg from "@/assets/hero-cooking.jpg";
import recipe1 from "@/assets/recipe-1.jpg";
import recipe2 from "@/assets/recipe-2.jpg";
import recipe3 from "@/assets/recipe-3.jpg";

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "/";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Cooking Website — Recipes & Classes</title>
        <meta
          name="description"
          content="Discover delicious cooking recipes, step-by-step tips, and fun classes. Cook with confidence using our red & yellow themed cooking website."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Cooking Website — Recipes & Classes" />
        <meta
          property="og:description"
          content="Discover delicious cooking recipes, step-by-step tips, and fun classes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImg} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-md bg-primary" aria-hidden />
            <span className="font-semibold">Cooking Website</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#recipes" className="text-sm hover:text-primary transition-colors">Popular Recipes</a>
            <a href="#newsletter" className="text-sm hover:text-primary transition-colors">Newsletter</a>
            <Button asChild variant="secondary" size="sm">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </nav>
      </header>

      <main id="home" className="flex-1">
        {/* Hero (image overlay style) */}
        <section className="container mx-auto py-6 sm:py-8 md:py-12">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src={heroImg}
              alt="A delicious dish with utensils around it, cooking hero background"
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
                  Fresh from the kitchen, just how you want it
                </h1>
                <p className="text-[hsl(var(--on-image))]/85 text-base sm:text-lg max-w-prose">
                  We prepare timeless recipes with seasonal ingredients and clear, step‑by‑step guidance.
                </p>
              </div>
              <div className="justify-self-start md:justify-self-end self-start md:self-end mt-4 md:mt-0">
                <Button variant="secondary" size="lg">View menu</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="container mx-auto py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Cook smarter, not harder</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From quick weeknight dinners to weekend projects, we give you the tools to shine in the kitchen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-secondary/30 flex items-center justify-center">
                  <UtensilsCrossed className="text-primary" />
                </div>
                <CardTitle>Step-by-step recipes</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Clear instructions and helpful tips so every dish turns out just right.
              </CardContent>
            </Card>
            <Card className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-secondary/30 flex items-center justify-center">
                  <Flame className="text-primary" />
                </div>
                <CardTitle>Cooking classes</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Learn techniques from knife skills to sauces with bite-sized lessons.
              </CardContent>
            </Card>
            <Card className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-secondary/30 flex items-center justify-center">
                  <Users className="text-primary" />
                </div>
                <CardTitle>Friendly community</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Share your wins, ask questions, and get inspired by fellow cooks.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Popular Recipes */}
        <section id="recipes" className="container mx-auto py-16 md:py-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Popular recipes</h2>
              <p className="text-muted-foreground">Tried-and-true favorites from our kitchen</p>
            </div>
            <Button variant="outline">Browse all</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden group">
              <img
                src={recipe1}
                alt="Spaghetti al pomodoro with basil"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <CardHeader>
                <CardTitle>Spaghetti al Pomodoro</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                A classic tomato-basil pasta that’s bright, simple, and satisfying.
              </CardContent>
            </Card>
            <Card className="overflow-hidden group">
              <img
                src={recipe2}
                alt="Grilled lemon herb chicken with vegetables"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <CardHeader>
                <CardTitle>Lemon Herb Chicken</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Juicy, zesty, and perfect for a quick weeknight dinner.
              </CardContent>
            </Card>
            <Card className="overflow-hidden group">
              <img
                src={recipe3}
                alt="Avocado and cherry tomato salad"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <CardHeader>
                <CardTitle>Avocado Tomato Salad</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Fresh, crunchy, and loaded with good-for-you ingredients.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About */}
        <section id="about" className="container mx-auto py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <article>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">About us</h2>
              <p className="text-muted-foreground mb-4">We’re a team of passionate home cooks and chefs on a mission to make everyday cooking joyful. Our recipes are tested, approachable, and packed with flavor.</p>
              <p className="text-muted-foreground">From weeknight staples to weekend projects, we help you build confidence with simple, clear guidance and a supportive community.</p>
            </article>
            <aside className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border p-4 bg-card">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <p className="text-sm text-muted-foreground">Happy cooks</p>
              </div>
              <div className="rounded-lg border border-border p-4 bg-card">
                <div className="text-3xl font-bold text-primary">1k+</div>
                <p className="text-sm text-muted-foreground">Recipes</p>
              </div>
              <div className="rounded-lg border border-border p-4 bg-card">
                <div className="text-3xl font-bold text-primary">200+</div>
                <p className="text-sm text-muted-foreground">Classes</p>
              </div>
              <div className="rounded-lg border border-border p-4 bg-card">
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-sm text-muted-foreground">Chefs</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="container mx-auto py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Learn, cook, and grow with offerings designed for busy home cooks and food lovers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-secondary/30 flex items-center justify-center">
                  <UtensilsCrossed className="text-primary" />
                </div>
                <CardTitle>Recipe library</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Hundreds of chef-tested recipes with step-by-step guidance and pro tips.</CardContent>
            </Card>
            <Card className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-secondary/30 flex items-center justify-center">
                  <Flame className="text-primary" />
                </div>
                <CardTitle>Live & on‑demand classes</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Bite-sized lessons to master techniques, from knife skills to sauces.</CardContent>
            </Card>
            <Card className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-secondary/30 flex items-center justify-center">
                  <Users className="text-primary" />
                </div>
                <CardTitle>Community & coaching</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Get feedback, share wins, and stay motivated with fellow cooks.</CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative">
          <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" aria-hidden />
          <div className="container mx-auto py-16 md:py-24">
            <div className="max-w-3xl mx-auto rounded-xl border border-border p-8 md:p-10 bg-card shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Contact us</h2>
              <p className="text-muted-foreground text-center mb-6">Have a question or a partnership idea? We’d love to hear from you.</p>
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-3" aria-label="Contact form">
                <div className="grid md:grid-cols-2 gap-3">
                  <Input type="text" placeholder="Your name" aria-label="Your name" className="h-12" required />
                  <Input type="email" placeholder="Email address" aria-label="Email address" className="h-12" required />
                </div>
                <Textarea placeholder="Your message" aria-label="Your message" className="min-h-[140px]" required />
                <div className="flex justify-center">
                  <Button type="submit" variant="hero" size="lg">Send message</Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="relative">
          <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" aria-hidden />
          <div className="container mx-auto py-16 md:py-24">
            <div className="max-w-3xl mx-auto rounded-xl border border-border p-8 md:p-10 bg-card shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Get weekly cooking inspiration</h2>
              <p className="text-muted-foreground text-center mb-6">
                Join our newsletter for seasonal recipes, tips, and class updates.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col md:flex-row gap-3"
                aria-label="Newsletter signup form"
              >
                <Input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="h-12"
                  required
                />
                <Button type="submit" variant="hero" size="lg" className="md:shrink-0">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Cooking Website</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#recipes" className="hover:text-primary transition-colors">Recipes</a>
            <a href="#newsletter" className="hover:text-primary transition-colors">Newsletter</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </footer>

      {/* Structured Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Cooking Website',
            url: canonical,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${canonical}?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Cooking Website',
            url: canonical,
          })}
        </script>
      </Helmet>
    </div>
  );
};

export default Index;
