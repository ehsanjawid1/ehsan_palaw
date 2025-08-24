import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
      dir="rtl"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="glass-light rounded-3xl p-8 md:p-12 glow-primary">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            رستوران احسان پلو
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            تجربه طعم‌های اصیل و لذیذ افغانی در دل مزارشریف
            <br />
            <span className="text-accent font-semibold">با کیفیت بی‌نظیر و سرویس عالی</span>
          </p>
          <Button 
            onClick={scrollToMenu}
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold px-8 py-3 rounded-full glow-primary transform hover:scale-105 transition-all duration-300"
          >
            مشاهده منو غذایی
          </Button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-accent/20 blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};