"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import ImageModal from "./ImageModal"

interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

const photos: Photo[] = [
  {
    src: "photos/2016-04-11 11.34.56.JPG?height=600&width=600",
    alt: "Torneo Internacional 2022",
    width: 600,
    height: 600,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Final del Campeonato Nacional",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Entrenamiento con el equipo",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Victoria en el torneo local",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Momento del partido",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Celebración con el trofeo",
    width: 600,
    height: 400,
  },
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState<string>("")

  const openModal = (src: string, alt: string) => {
    setSelectedImage(src)
    setSelectedAlt(alt)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold text-center mb-8"
      >
        Galería Deportiva
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="aspect-w-2 aspect-h-2 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              />
              <div className="object-cover w-full h-full absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end cursor-pointer"
                onClick={() => openModal(photo.src, photo.alt)}
                >
                <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  {photo.alt}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && <ImageModal src={selectedImage || "/placeholder.svg"} alt={selectedAlt} onClose={closeModal} />}
    </div>
  )
}

