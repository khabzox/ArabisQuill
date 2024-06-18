import Link from "next/link";
import { HeaderData } from "./HeaderData/HeaderData";
import { Lemonada } from "next/font/google";

const lemonada = Lemonada({ subsets: ["arabic"] });

const Header = () => {
  return (
    <header className={lemonada.className}>
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="space-x-4">
            {HeaderData.map((e) => {
              return (
                <>
                  <Link key={e.id} href={e.LinkTo} className="hover:text-gray-300 mx-4">
                    {e.LinkText}
                  </Link>
                </>
              );
            })}
          </nav>
          <div className="text-xl font-bold">{"أربي سكويل"}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
