import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ImageModalProps {
  src: string
  alt: string
  onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative">
        <button
          className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={onClose}
        >
          &times;
        </button>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={800}
          height={600}
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </motion.div>
  )
}

export default ImageModal

