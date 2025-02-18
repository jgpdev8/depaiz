"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { PhotoCarousel } from "@/components/PhotoCarousel"

interface Photo {
  src: string
  alt: string
}



const photos: Photo[] = [
  { src: "photos/depaizCristianGuti.JPG?height=600&width=800", alt: "Torneo Internacional 2022" },
  { src: "photos/depaizCristianGuti.JPG?height=600&width=800", alt: "Torneo Internacional 2022" },
  { src: "photos/depaizCristianGuti.JPG?height=600&width=800", alt: "Torneo Internacional 2022" },
  { src: "photos/depaizCristianGuti.JPG?height=600&width=800", alt: "Torneo Internacional 2022" },
  { src: "photos/depaizCristianGuti.JPG?height=600&width=800", alt: "Torneo Internacional 2022" },
]

export default function Logros() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-grow  mx-auto px-4 py-8 container">
      <motion.section
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Logros deportivos</h1>
      </motion.section>

      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/4 flex flex-col gap-4">

          <Image
            src="photos/IMG_0150.JPG"
            alt="Instructor de Pádel"
            width={250}
            height={250}
            className="rounded-lg cursor-pointer"
          />
          <Image
            src="photos/IMG_0151.JPG"
            alt="Instructor de Pádel"
            width={250}
            height={250}
            className="rounded-lg cursor-pointer"
          />
        </div>
        <div className="md:w-3/4 space-y-4">

          <ul className="list-disc list-inside space-y-2 text-xl">
            <li>Jugador de Primera Madrileña, compitiendo regularmente en los torneos de mayor nivel de Madrid.</li>
            <li>Campeón Absoluto de Sevilla, consolidando mi dominio en el circuito andaluz.</li>
            <li>Jugador de Primera por Equipos de España, formando parte de un equipo finalista en el Campeonato Nacional.</li>
            <li>Semifinalista de la Copa Andalucía, destacando como uno de los mejores jugadores de la región.</li>
            <li>Participación habitual en preprevias y previas del World Pádel Tour (WPT), alcanzando los dieciseisavos de final en varias ocasiones:</li>
            <li>WPT Barcelona, enfrentándome a Juan Martín Díaz y Fernando Belasteguín.</li>
            <li>WPT Granada, compitiendo contra Agustín Silingo y Federico Quiles.</li>
            <li>WPT Bilbao, continuando mi progresión frente a jugadores de renombre internacional.</li>
            <li>A1 Lanzarote.</li>
            <li>Miembro de la Selección Canaria Absoluta de Pádel, representando a las Islas Canarias en competiciones nacionales e internacionales.</li>

          </ul>
          
        </div>

      </motion.section>

      <motion.section
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mt-12"
      >
        <h1 className="text-4xl font-bold mb-4">Torneos destacados</h1>
      </motion.section>

      <motion.section
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mt-6"
      >
        <ul className="list-disc list-inside space-y-2">
          <li>2022 World Padel Tour - Semifinalista</li>
          <li>2021 Campeonato Europeo de Pádel - Medalla de Oro</li>
          <li>2020 Liga Nacional de Pádel - Campeón</li>
          <li>2019 Open Internacional de Pádel - Subcampeón</li>
        </ul>
        <div className="flex w-full justify-center md:mb-6 mb-24 mt-6">
            <a
              href="/historia"
              className="mt-4 inline-block px-6 py-2 text-lg border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              JUGADORES
            </a>

          </div>
      </motion.section>
      
    </motion.div>
  )
}

