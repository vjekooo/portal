import React from 'react'
import { useState } from 'react'
import { Stack } from './Stack'

interface HeroActionProps {
  text: string
  url: string
}

const HeroAction = ({ text, url }: HeroActionProps) => (
  <a
    className="text-xl inline-block underline leading-relaxed hover:text-black hover:border-black"
    href={`${url}`}
  >
    {text}
  </a>
)

interface Props {
  items: any[]
  interval?: number
}

export const Hero = ({ items, interval = 4000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideInterval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, interval)

  const currentItem = items[currentIndex]

  return (
    <section
      className="w-full mx-auto bg-nordic-gray-light flex p-12 md:pt-0 items-end bg-cover bg-right relative overflow-hidden"
      style={{
        maxWidth: '1600px',
        height: '32rem',
      }}
    >
      {items.map((item, index) => (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${item.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}
        ></div>
      ))}

      <div className="flex flex-col justify-center items-start p-6 tracking-wide bg-white opacity-70 z-10 relative">
        <Stack>
          <h1 className="text-black h1">{currentItem.name}</h1>
          <HeroAction text={currentItem.text} url="/architecture" />
        </Stack>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, index) => (
          <button
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-black' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}
