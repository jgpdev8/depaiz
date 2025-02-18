"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname(); // Obtiene la ruta actual
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (path:string) =>
    `uppercase transition-colors ${
      pathname === path ? "text-yellow-600 font-bold" : "text-white hover:text-yellow-600"
    }`;

  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0 relative">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.jpg"
          alt="Javi de Paiz Escuela de Pádel"
          width={120}
          height={60}
           className="object-contain md:w-[120px] md:h-[60px] w-[110px] h-[55px]"
          priority
        />
      </Link>
      
      {/* Botón de menú en móvil */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      {/* Menú de navegación */}
      <div
        className={`absolute md:static top-full left-0 bg-black md:bg-transparent p-4 md:p-0 md:flex md:space-x-4 transition-transform duration-300 z-10 ${menuOpen ? " left-48 w-2/4 flex flex-col items-start space-y-2 " : "hidden"}`}
      >
        <Link href="/" className={linkClasses("/")} onClick={() => setMenuOpen(false)}>
          Inicio
        </Link>
        <Link href="/historia" className={linkClasses("/historia")} onClick={() => setMenuOpen(false)}>
          Historia
        </Link>
        <Link href="/entrenadores" className={linkClasses("/entrenadores")} onClick={() => setMenuOpen(false)}>
          Entrenadores
        </Link>
        <Link href="/jugadores" className={linkClasses("/jugadores")} onClick={() => setMenuOpen(false)}>
          Jugadores
        </Link>
        <Link href="/logros" className={linkClasses("/logros")} onClick={() => setMenuOpen(false)}>
          Logros
        </Link>
        <Link href="/escuela" className={linkClasses("/escuela")} onClick={() => setMenuOpen(false)}>
          Escuela
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
