"use client"

import * as React from "react"
import Image from "next/image"
import type { CarouselApi } from "@/components/ui/carousel"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface Photo {
  src: string
  alt: string
}

interface PhotoCarouselProps {
  photos: Photo[]
}

export function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.alt}
                        width={800}
                        height={600}
                        className={cn(
                          "h-full w-full object-cover transition-all hover:scale-105",
                          index === currentIndex ? "opacity-100" : "opacity-100",
                        )}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} layout="fill" objectFit="contain" />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {currentIndex==photos.length-1 && 
      <p className="text-center mt-4 text-sm text-gray-600">{photos[0]?.alt}</p>
      }
      {currentIndex!=photos.length-1 && 
      <p className="text-center mt-4 text-sm text-gray-600">{photos[currentIndex+1]?.alt}</p>
      }
    </div>
  )
}
