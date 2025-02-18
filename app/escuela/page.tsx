"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function School() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8 flex-grow  mx-auto px-4 py-8 container">
      <motion.section
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Escuela Pádel Pro</h1>
        <p className="text-xl">Eleva tu juego con instrucción profesional</p>
      </motion.section>

      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-semibold">Tipos de Clases</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-black p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Clases para Principiantes</h3>
            <p>Perfecto para aquellos nuevos en el pádel. Aprende los fundamentos y construye una base sólida.</p>
          </div>
          <div className="border border-black p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Clases Intermedias</h3>
            <p>Refina tus habilidades y aprende técnicas avanzadas para llevar tu juego al siguiente nivel.</p>
          </div>
          <div className="border border-black p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Clases Avanzadas</h3>
            <p>
              Para jugadores experimentados que buscan dominar estrategias complejas y mejorar su ventaja competitiva.
            </p>
          </div>
          <div className="border border-black p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Clases Privadas</h3>
            <p>Instrucción personalizada adaptada a tus necesidades y objetivos específicos.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-semibold">Precios</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-black p-2 text-left">Tipo de Clase</th>
              <th className="border border-black p-2 text-left">Duración</th>
              <th className="border border-black p-2 text-left">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2">Clase Grupal</td>
              <td className="border border-black p-2">1 hora</td>
              <td className="border border-black p-2">30€ por persona</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Clase Privada</td>
              <td className="border border-black p-2">1 hora</td>
              <td className="border border-black p-2">80€</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Taller Intensivo</td>
              <td className="border border-black p-2">3 horas</td>
              <td className="border border-black p-2">100€ por persona</td>
            </tr>
          </tbody>
        </table>
      </motion.section>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-semibold">Información de Contacto</h2>
        <p>Para reservar una clase o para más información, por favor contáctanos:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Email: info@padelpro.com</li>
          <li>Teléfono: 123 456 789</li>
          <li>Dirección: Calle Pádel 123, Ciudad Deportiva, 28001 Madrid</li>
        </ul>
        <Button className="bg-black text-white hover:bg-gray-800">Reservar una Clase</Button>
      </motion.section>
    </motion.div>
  )
}

