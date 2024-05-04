import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const Carousels = () => {
  return (
    <>
    
    <Carousel
    
    >
  <CarouselContent>
    <CarouselItem>
        
    <img src="/hero1.avif" alt="3M Logo" 
    className='w-[50vw]'
    />



        </CarouselItem>
    <CarouselItem>
    <img src="/hero2.avif" alt="3M Logo"
    className='w-[50vw]'
    />

    </CarouselItem>
    <CarouselItem>
    <img src="/hero6.avif" alt="3M Logo"
    className='w-[50vw]'
    />

    </CarouselItem>
    <CarouselItem>
    <img src="/hero4.avif" alt="3M Logo"
    className='w-[50vw]'
    />

    </CarouselItem>

    <CarouselItem>
    <img src="/hero5.avif" alt="3M Logo"
    className='w-[50vw]'
    />

    </CarouselItem>

    <CarouselItem>
    <img src="/hero7.avif" alt="3M Logo"
    className='w-[50vw]'
    />

    </CarouselItem>

  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </>
  )
}

export default Carousels