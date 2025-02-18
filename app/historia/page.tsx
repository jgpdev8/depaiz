"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import ImageModal from "@/components/ImageModal"
import { PhotoCarousel } from "@/components/PhotoCarousel"
import Header from "@/components/Header"


export default function Historia() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-grow  mx-auto px-4 py-8 container">
      <motion.section
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Javier De Paiz</h1>
        <p className="text-xl">Trayectoria Profesional en el Mundo del Pádel</p>
      </motion.section>

      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/4">
          <Image
            src="photos/2019-10-29 13.39.25.JPG"
            alt="Instructor de Pádel"
            width={400}
            height={400}
            className="rounded-lg cursor-pointer"
          />
        </div>
        <div className="md:w-3/4 space-y-4">
          <h2 className="text-3xl font-semibold">Inicios</h2>
          <p className="text-xl">
            Mi vinculación con el pádel comenzó a los 17 años, desarrollando una intensa carrera como jugador profesional que me llevó a competir en los principales circuitos de España y del mundo. Durante más de 10 años, recorrí el World Pádel Tour (WPT), enfrentándome a algunos de los mejores jugadores del mundo y acumulando una valiosa experiencia tanto en torneos nacionales como internacionales.
          </p>
          <p className="text-xl">
            En Madrid, tuve la oportunidad de perfeccionar mi juego y rodearme de grandes referentes del pádel mundial. Trabajé con algunos de los entrenadores y preparadores físicos más reconocidos del circuito profesional, lo que me permitió desarrollar una visión más completa del juego y alcanzar mi mejor versión como jugador.
          </p>
        </div>
        
      </motion.section>
      <div className="flex w-full justify-center md:mb-6 mb-24">
          <a
            href="/entrenadores"
            className="mt-4 inline-block px-6 py-2 text-lg border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            ENTRENADORES
          </a>

        </div>
    </motion.div>
  )
}

