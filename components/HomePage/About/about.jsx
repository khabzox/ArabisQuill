import { ButtonGrid1 } from "@/components/shared/ButtonGrid";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content (Image) */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="relative pl-16">
            <Image
              src="/images/about/studyPep.png"
              alt="Image Alt Text"
              width="400"
              height="800"
            />
          </div>
        </div>

        {/* Right Content (Text) */}
        <div className="md:w-1/2 md:pl-12 text-right">
          <h1 className="text-3xl text-primHov md:text-5xl font-bold mb-4">{"موقع دروس اللغة العربية للسلك الثانوي التأهيلي"}</h1>
          <p className="text-lg mb-6 text-primText">
            {"استكشفوا منصة التعليم الشاملة للسلك الثانوي التأهيلي، حيث تقدم لكم جميع دروس اللغة العربية بأسلوب منظم وشرح دقيق من قبل أستاذة ذات خبرة عالية. يمكن للطلاب الوصول إلى المحتوى التعليمي على مدار الساعة من أي مكان يناسبهم، مما يعزز من مرونة وفعالية عملية التعلم. انضموا إلينا اليوم للاستفادة من تجربة تعليمية استثنائية في مادة اللغة العربية"}
          </p>
          {ButtonGrid1("/dashboard", "إستكشف")}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
