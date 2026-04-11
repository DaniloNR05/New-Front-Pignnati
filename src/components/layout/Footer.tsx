import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-background">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 gap-12">
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-display text-sm tracking-luxury uppercase text-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <Link 
                to="/about" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="gold-divider mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear}. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
}
