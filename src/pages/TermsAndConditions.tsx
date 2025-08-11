import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import cuisinousLogo from "../assets/cuisinous-logo.svg";
import { Button } from "../components/ui/button";
const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{t('terms.title')} | Cuisinous</title>
        <meta name="description" content={t('terms.metaDescription')} />
      </Helmet>

      {/* Header - Same as your main page */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2">
            <img src={cuisinousLogo} alt="Cuisinous Logo" />
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#contact" className="text-sm hover:text-primary transition-colors">{t('header.contact')}</a>
            <Button asChild variant="secondary" size="sm">
              <a href="/">{t('header.home')}</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('terms.title')}</h1>
          <p className="text-muted-foreground mb-8">{t('terms.lastUpdated')}: [Date]</p>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. {t('terms.introduction.title')}</h2>
              <p>{t('terms.introduction.content')}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. {t('terms.definitions.title')}</h2>
              <ul className="space-y-3">
                <li>
                  <strong>"User"</strong> - {t('terms.definitions.user')}
                </li>
                <li>
                  <strong>"Customer"</strong> - {t('terms.definitions.customer')}
                </li>
                <li>
                  <strong>"Vendor"</strong> - {t('terms.definitions.vendor')}
                </li>
                <li>
                  <strong>"Order"</strong> - {t('terms.definitions.order')}
                </li>
                <li>
                  <strong>"Platform Owner"</strong> - {t('terms.definitions.platformOwner')}
                </li>
              </ul>
            </section>

            {/* Continue with other sections following the same pattern */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. {t('terms.scope.title')}</h2>
              <p>{t('terms.scope.content')}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. {t('terms.accounts.title')}</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">4.1 {t('terms.accounts.registration')}</h3>
                <h3 className="text-xl font-semibold">4.2 {t('terms.accounts.security')}</h3>
                <h3 className="text-xl font-semibold">4.3 {t('terms.accounts.eligibility')}</h3>
              </div>
            </section>

            {/* Add all remaining sections following the same structure */}

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">16. {t('terms.contact.title')}</h2>
              <p>
                {t('terms.contact.content')}{' '}
                <a href="mailto:support@cuisinous.ca" className="text-primary hover:underline">
                  support@cuisinous.ca
                </a>
              </p>
              <p className="mt-4 font-medium">{t('terms.acknowledgement')}</p>
            </section>
          </article>
        </div>
      </main>

      {/* Footer - Same as your main page */}
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
            <a href="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t('header.contact')}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;