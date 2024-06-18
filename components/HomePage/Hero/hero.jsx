// import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroPage = () => {
  return (
    <section className="bg-gray-800 text-white h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-medium mb-8">
          {"منصة الدروس الشاملة للتأهيلي"}
        </h1>
        <p className="text-lg mb-6 font-extralight">
          {"منصة الدروس الشاملة للتأهيلي تقدم للطلاب جميع المواد الأساسية بأسلوب مبسط وشامل يلبي احتياجاتهم في المراحل التأهيلية. يتميز كل درس بالتنظيم الدقيق والشرح المفصل من قبل أستاذة ذات خبرة عالية. يمكن للطلاب الوصول إلى المحتوى التعليمي على مدار الساعة من أي مكان يناسبهم، مما يزيد من مرونة وفعالية عملية التعلم."}
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="primbtn">
            {"هيا نبدأ"}
          </Button>
          <Button variant="secndbtn">
            {"تواصل"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;  