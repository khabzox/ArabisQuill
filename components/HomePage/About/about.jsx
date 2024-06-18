import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="bg-gray-800 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content (Image) */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="relative h-80 md:h-96">
            <Image
              src="/path/to/your/image.jpg"
              alt="Image Alt Text"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Content (Text) */}
        <div className="md:w-1/2 md:pl-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. Nulla convallis quam sit amet nulla rutrum
            tristique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
