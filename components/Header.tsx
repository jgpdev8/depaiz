import Image from "next/image";

const Header = () => {
  return (
    <header className="relative w-full md:h-[500px] h-[650px] flex items-center justify-center text-center bg-black">
      {/* Imagen de fondo */}
      <Image
        src="photos/depaizHeader.jpg"
        alt="Javier De Paiz"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 grayscale md:object-center object-[0]"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-1"></div>
      {/* Contenido */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold">Javier De Paiz</h1>
        <a
          href="/historia"
          className="mt-4 inline-block px-6 py-2 text-lg border border-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          MI HISTORIA
        </a>
      </div>
    </header>
  );
};

export default Header;
