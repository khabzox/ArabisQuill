import { ButtonGrid1, ButtonGrid2 } from "@/components/shared/ButtonGrid";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <>
      <section>
        <div className="flex items-center pt-8 px-4 mt-20 mx-auto text-center lg:pt-16 lg:px-12">
          {/* <div className="HeroImg">
            <Image
              src={"/images/hero/3kl.png"}
              alt="Img of Hero"
              width={250}
              height={150}
            />
          </div> */}

          <div>
            <h1 className="mb-8 text-4xl font-extrabold text-primHov md:text-5xl lg:text-6xl">
              {"جميع الدروس للسلك الثانوي التأهيلي"}
            </h1>
            <p className="mb-8 text-lg text-center font-normal text-primText lg:text-lg sm:px-16 xl:px-48">
                {"منصة الدروس الشاملة للسلك الثانوي التأهيلي تقدم دروس منضمة ودقيق إضافتا إلى إحتوائها على شرح مفصل من قبل أستاذة ذات خبرة عالية. يمكن للطلاب الوصول إلى المحتوى التعليمي على مدار الساعة من أي مكان يناسبهم، مما يزيد من مرونة وفعالية عملية التعلم"}
            </p>
            <div className="flex items-center justify-center mb-8 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              {ButtonGrid1("/", "إستكشف")}
              {ButtonGrid2("/", "مشاهدة")}
            </div>
          </div>
{/* 
          <div className="HeroImg">
            <Image
              src={"/images/hero/lamp.png"}
              alt="Img of Hero"
              width={250}
              height={150}
            />
          </div> */}

        </div>
      </section>
    </>
  );
}
