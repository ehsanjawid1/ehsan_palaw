import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import qabuliPalaw from '@/assets/qabuli-palaw.jpg';
import kebab from '@/assets/kebab.jpg';
import shamiKebab from '@/assets/shami-kebab.jpg';

const menuItems = [
  {
    id: 1,
    title: 'ماهیچه پلو مخصوص',
    description: '🥘 ماهیجه‌پلو مخصوص ما، بهترین انتخاب برای مهمانی و دسترخوان خانواده‌گی!',
    price: '400 افغانی',
    image: qabuliPalaw,
    category: 'main'
  },
  {
    id: 2,
    title: 'کباب گوشت مخصوص',
    description: 'گوشت کوساله تازه با مساله مخصوص، به سیخ کشیده شده و روی ذغال پخته شده.',
    price: '170 افغانی',
    image: kebab,
    category: 'main'
  },
  {
    id: 3,
    title: 'کباب شامی مخصوص',
    description: 'امروز نوبت کباب شامی داغ و خوش‌مزه است 🍢🔥 با گوشت تازه، پیاز و مساله اصیل وطنی 🇦🇫👌',
    price: '180 افغانی',
    image: shamiKebab,
    category: 'main'
  },
  {
    id: 4,
    title: 'کباب مرغ مخصوص',
    description: 'مرغ تازه، مرینیت شده با مساله مخصوص وطنی 🇦🇫👌 روی آتش ذغال سرخ میشه، 😍',
    price: '200 افغانی',
    image: kebab,
    category: 'main'
  },
  {
    id: 5,
    title: 'فانتا',
    description: 'فانتا، شریک لحظه های دوستانه و مهمانی های شاد شماست..',
    price: '30 افغانی',
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400',
    category: 'drink'
  },
  {
    id: 6,
    title: 'پیپسی',
    description: 'نوشابه گازدار خنک پیپسی با طعم اصلی و منحصر به فرد.',
    price: '30 افغانی',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400',
    category: 'drink'
  },
  {
    id: 7,
    title: 'آب معدنی',
    description: 'آب معدنی خنک و گوارا در بطری.',
    price: '10 افغانی',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
    category: 'drink'
  },
  {
    id: 8,
    title: 'دوغ محلی',
    description: 'دوغ خنک و گازدار با طعم نعناع تازه، بهترین همراه برای غذاهای لذیذ ما.',
    price: '20 افغانی',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400',
    category: 'drink'
  }
];

export const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-4" dir="rtl">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            منوی غذایی
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <Card 
              key={item.id} 
              className="glass hover:glass-light group hover:scale-105 transition-all duration-300 overflow-hidden border-glass-border-color glow-primary hover:glow-accent"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <Badge 
                    variant="secondary" 
                    className="glass-light text-foreground border-glass-border-color"
                  >
                    {item.category === 'main' ? 'غذای اصلی' : 'نوشیدنی'}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {item.price}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <span className="text-primary-foreground text-lg">🍽️</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};