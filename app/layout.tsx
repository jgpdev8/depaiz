import Link from "next/link"
import Image from "next/image"
import "./globals.css"
import type React from "react"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Javi de Paiz - Escuela de Pádel",
  description: "Instructor Profesional de Pádel y Escuela",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-white text-black">
        <header className="bg-black text-white p-4">
          <Navbar></Navbar>
        </header>
        <main>{children}</main>
        <footer className="bg-black text-white text-center p-4 fixed bottom-0 w-full">
          <p>&copy; 2025 Javi de Paiz Escuela de Pádel. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'