"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { PhotoCarousel } from "@/components/PhotoCarousel"
import { useState } from "react"
import ImageModal from "@/components/ImageModal"

interface Photo {
  src: string
  alt: string
}


const photos: Photo[] = [
  { src: "photos/depaizCristianGuti.JPG?height=600&width=800", alt: "Entreno con Cristian Gutierrez" },
  { src: "photos/IMG_0144.JPG?height=600&width=800", alt: "Torneo Internacional 2022" },
  { src: "photos/IMG_0147.JPG?height=600&width=800", alt: "Torneo World Padel Tour" },
  { src: "photos/IMG_0142.JPG?height=600&width=800", alt: "Sato Sport" },
  { src: "photos/IMG_0143.JPG?height=600&width=800", alt: "Entreno con Allemandi y Paquito Navarro" },
  { src: "photos/partidoLebron.JPEG?height=600&width=800", alt: "Partido contra Juan Lebrón" },
]

export default function Jugadores() {
  const [modalImage, setModalImage] = useState<string | null>(null)


const openModal = (src: string) => {
  setModalImage(src)
}

const closeModal = () => {
  setModalImage(null)
}

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-grow  mx-auto px-4 py-8 container">
      <motion.section
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-8">Jugadores Profesionales</h1>
      </motion.section>

      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
       <div className="flex justify-center w-full">


        <ul className="list-disc list-inside space-y-2 text-xl">
              <li>Pablo Lima, ex número 1 del mundo, gran conocedor del juego en la élite.</li>
              <li>Tito Allemandi, jugador y entrenador con amplia experiencia internacional.</li>
              <li>Ramón Romagosa, uno de los entrenadores más metódicos y estratégicos del circuito.</li>
              <li>Gastón Malacalza, conocido por su enfoque técnico-táctico y su trabajo con jugadores profesionales.</li>
            </ul>
          
        </div>

      </motion.section>
      <motion.section
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="flex flex-col md:flex-row items-center gap-8 mt-16 mb-24"
      >

      <PhotoCarousel photos={photos}></PhotoCarousel>
      </motion.section>
      {modalImage && <ImageModal src={modalImage || "/placeholder.svg"} alt="Imagen ampliada" onClose={closeModal} />}
    </motion.div>
  )
}

