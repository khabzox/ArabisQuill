import { Lemonada } from "next/font/google";

const lemonada = Lemonada({ subsets: ["arabic"] });

export default function Footer() {
  return (
    <>
      <footer className="bg-primHov" dir="rtl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 items-center">
          <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex justify-center text-white sm:justify-start">
                    <div className={lemonada.className}>{"أربي سكويل"}</div>
                </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; {new Date().getFullYear()}. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
