import { submitBtn } from "@/components/shared/ButtonGrid";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-24 md:py-24 lg:py-32">
      <div className="text-center font-extrabold underline text-4xl text-primHov mb-4">
        {"تواصل معنا"}
      </div>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-6 text-right text-primText">
          <form action="https://formbold.com/s/9Bgew" method="POST" className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">{"الإيمايل"}</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                  dir='rtl'
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">{"الإسم كامل"}</Label>
                <Input id="name" type="text" name="FullName" placeholder="أدخل إسمك الكامل" required dir='rtl'/>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{"الرسالة"}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="أدخل رسالتك هنا..."
                className="min-h-[120px]"
                required
                dir='rtl'
              />
            </div>
            {submitBtn("إستكشف")}
          </form>
        </div>
      </div>
    </section>
  );
}
