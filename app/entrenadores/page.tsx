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

export default function Entrenadores() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-grow  mx-auto px-4 py-8 container">
      <motion.section
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Entrenadores y Preparadores Físicos</h1>
      </motion.section>

      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/4 flex flex-col gap-4">
          <Image
            src="photos/2016-04-11 11.34.56.JPG"
            alt="Instructor de Pádel"
            width={250}
            height={400}
            className="rounded-lg cursor-pointer"
          />
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

          <p className="text-xl">Mi etapa profesional en el pádel bajo la dirección de entrenadores de renombre como <strong>Jorge Martínez</strong> y <strong>Mariano Amat</strong> ha sido un periodo de gran crecimiento y consolidación en mi carrera. Estos entrenadores, reconocidos por su metodología innovadora y su capacidad para potenciar el rendimiento de sus pupilos, han sido clave en mi formación como jugador de élite.</p>

          <p className="text-xl">Bajo la tutela de <strong>Jorge Martínez</strong>, he experimentado una evolución técnica y táctica significativa. <strong>Martínez</strong>, con su enfoque analítico y su profundo conocimiento del juego, ha trabajado en mejorar mi posición en pista, la selección de golpes y la lectura del rival. Su experiencia en la dirección de grandes talentos me ha permitido alcanzar mi mejor versión y consolidarme en el circuito profesional.</p>

          <p className="text-xl">Por otro lado, <strong>Mariano Amat</strong> se distingue por su trabajo en mi preparación integral. Su metodología incluye un enfoque holístico que abarca no solo los aspectos técnicos y tácticos, sino también la preparación física y mental. Amat ha sido fundamental en mi carrera, ayudándome a fortalecer mi confianza y mejorar mi inteligencia en la toma de decisiones dentro de la pista.</p>

          <p className="text-xl">El paso por las academias dirigidas por estos entrenadores no solo me ha garantizado un alto nivel de entrenamiento, sino que también me ha brindado un entorno de competencia constante, donde puedo medir mi progreso frente a otros profesionales de primer nivel. Además, la experiencia y el prestigio de Martínez y Amat me han dado la oportunidad de participar en circuitos de entrenamiento y torneos internacionales que han contribuido a mi crecimiento como jugador.</p>

          <p className="text-xl">En definitiva, mi formación bajo la dirección de <strong>Jorge Martínez</strong> y <strong>Mariano Amat</strong> ha sido un periodo clave en mi carrera. Su metodología, experiencia y capacidad para maximizar mi potencial los convierten en figuras imprescindibles en mi desarrollo como jugador profesional de pádel.</p>
          
        </div>
        <div className="flex w-full justify-center md:mb-6 mb-24">
            <a
              href="/jugadores"
              className="mt-4 inline-block px-6 py-2 text-lg border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              JUGADORES
            </a>

          </div>
      </motion.section>

    </motion.div>
  )
}

