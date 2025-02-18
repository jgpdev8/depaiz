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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-grow  mx-auto px-4 py-8 container">
        <motion.section
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Javier De Paiz</h1>
          <p className="text-2xl">Trayectoria Profesional en el Mundo del Pádel</p>
        </motion.section>


        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/4">
            <Image
              src="photos/depaizCristianGuti.JPG"
              alt="Instructor de Pádel"
              width={200}
              height={400}
              className="rounded-lg cursor-pointer"
              onClick={() => openModal("photos/depaizCristianGuti.JPG?height=800&width=800")}
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

        <motion.section
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >

          <div className="md:w-3/4 space-y-4">
            <h2 className="text-3xl font-semibold">Entrenadores y Preparadores Físicos</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Jorge Martínez</li>
              <li>Mariano Amat</li>
            </ul>
          </div>
          <div className="md:w-1/4 flex justify-end">
            <Image
              src="photos/2016-04-11 11.34.56.JPG"
              alt="Instructor de Pádel"
              width={200}
              height={400}
              className="rounded-lg cursor-pointer"
              onClick={() => openModal("photos/2016-04-11 11.34.56.JPG?height=800&width=800")}
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/4 flex justify-start">
            <Image
              src="photos/depaizCristianGuti.JPG"
              alt="Instructor de Pádel"
              width={200}
              height={400}
              className="rounded-lg cursor-pointer"
              onClick={() => openModal("photos/depaizCristianGuti.JPG?height=800&width=800")}
            />
          </div>
          <div className="md:w-3/4 space-y-4">
            <h2 className="text-3xl font-semibold">Jugadores profesionales</h2>
            <ul className="list-disc list-inside space-y-2">
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
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/4 flex justify-start">
            <Image
              src="photos/depaizCristianGuti.JPG"
              alt="Instructor de Pádel"
              width={200}
              height={400}
              className="rounded-lg cursor-pointer"
              onClick={() => openModal("photos/depaizCristianGuti.JPG?height=800&width=800")}
            />
          </div>
          <div className="md:w-3/4 space-y-4">
            <h2 className="text-3xl font-semibold">Preparación física</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Jorge Rodríguez, reconocido preparador físico del circuito profesional.</li>
              <li>Jordan, experto en entrenamiento de alto rendimiento para deportistas de élite.</li>
            </ul>
          </div>

        </motion.section>

        <motion.section
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/4 flex justify-start">
            <Image
              src="photos/depaizCristianGuti.JPG"
              alt="Instructor de Pádel"
              width={200}
              height={400}
              className="rounded-lg cursor-pointer"
              onClick={() => openModal("photos/depaizCristianGuti.JPG?height=800&width=800")}
            />
          </div>
          <div className="md:w-3/4 space-y-4">
            <h2 className="text-3xl font-semibold">Logros deportivos</h2>
            <ul className="list-disc list-inside space-y-2">
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
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Destacados de Torneos</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>2022 World Padel Tour - Semifinalista</li>
            <li>2021 Campeonato Europeo de Pádel - Medalla de Oro</li>
            <li>2020 Liga Nacional de Pádel - Campeón</li>
            <li>2019 Open Internacional de Pádel - Subcampeón</li>
          </ul>
        </motion.section>

        <PhotoCarousel photos={photos}/>

        {modalImage && <ImageModal src={modalImage || "/placeholder.svg"} alt="Imagen ampliada" onClose={closeModal} />}
      </motion.div>
    </motion.div>
  )
}

