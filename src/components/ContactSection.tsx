import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "پیام ارسال شد",
      description: "پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4" dir="rtl">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            تماس با ما
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass border-glass-border-color glow-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center glow-primary">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">آدرس رستوران</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      شهر مزارشریف چهار راهی ذبیح الله شهید (سرک حلقوی)، افغانستان
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-glass-border-color glow-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center glow-primary">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">تلفن تماس</h3>
                    <p className="text-muted-foreground">0788409988</p>
                    <p className="text-muted-foreground">0796163636</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-glass-border-color glow-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center glow-primary">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">ساعات کاری</h3>
                    <p className="text-muted-foreground">
                      شنبه الی پنجشنبه: 6 صبح - 10 شب
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-light border-glass-border-color glow-accent">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground text-right">
                پیام خود را ارسال کنید
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">نام کامل</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass border-glass-border-color text-foreground placeholder:text-muted-foreground"
                    placeholder="نام خود را وارد کنید"
                    required
                    dir="rtl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">شماره تماس</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="glass border-glass-border-color text-foreground placeholder:text-muted-foreground"
                    placeholder="شماره تماس خود را وارد کنید"
                    required
                    dir="rtl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">پیام</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass border-glass-border-color text-foreground placeholder:text-muted-foreground min-h-[120px]"
                    placeholder="پیام خود را وارد کنید"
                    dir="rtl"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold py-3 rounded-full glow-primary transform hover:scale-105 transition-all duration-300"
                >
                  ارسال پیام
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};