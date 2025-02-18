"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import ImageModal from "@/components/ImageModal"
import { PhotoCarousel } from "@/components/PhotoCarousel"
import Header from "@/components/Header"

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
  }

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

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full">
      <Header></Header>
     

        {modalImage && <ImageModal src={modalImage || "/placeholder.svg"} alt="Imagen ampliada" onClose={closeModal} />}
      </motion.div>
  )
}

