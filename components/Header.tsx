import React from "react";

const Header = () => {
  return (
    <header
      className="relative w-full h-[500px] flex items-center justify-center text-center bg-cover md:bg-center before:absolute before:inset-0 before:bg-black/50 before:filter before:grayscale"
      style={{ backgroundImage: "url('photos/2018-10-18 16.15.28.jpg')" }}
    >
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