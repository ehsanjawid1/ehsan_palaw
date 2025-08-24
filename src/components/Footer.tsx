import { Card } from '@/components/ui/card';
import { Utensils, Facebook, Instagram, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-16 px-4" dir="rtl">
      <div className="container mx-auto max-w-7xl">
        {/* Developer Section */}
        <Card className="glass-light border-glass-border-color glow-accent mb-12">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold glow-primary">
                MJ
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  طراحی و توسعه توسط محمد احسان جاوید
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a 
                    href="tel:0795669831" 
                    className="flex items-center gap-2 glass rounded-full px-4 py-2 text-foreground hover:text-primary transition-colors"
                  >
                    📞 ۰۷۹۵۶۶۹۸۳۱
                  </a>
                  <a 
                    href="https://www.facebook.com/share/16yA3SdJu9/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass rounded-full px-4 py-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a 
                    href="https://wa.me/93795669831?text=%D8%B3%D9%84%D8%A7%D9%85%20%D9%88%D9%82%D8%AA%20%D8%A8%D8%AE%DB%8C%D8%B1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass rounded-full px-4 py-2 text-foreground hover:text-primary transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 glass rounded-full px-4 py-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center glow-primary">
                <Utensils className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">احسان پلو</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              رستورانت احسان پلو با ارائه غذاهای اصیل افغانی، میزبان مهمانان گرامی در شهر مزارشریف است.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors glow-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors glow-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors glow-primary">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-foreground mb-4">لینک های سریع</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">خانه</a></li>
              <li><a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">منو</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">تماس</a></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-foreground mb-4">ساعات کاری</h3>
            <p className="text-muted-foreground">
              شنبه الی پنجشنبه: 6 صبح - 10 شب
            </p>
          </div>
        </div>

        <div className="border-t border-glass-border-color pt-6 text-center">
          <p className="text-muted-foreground">
            © 2023 رستوران احسان پلو. تمام حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};