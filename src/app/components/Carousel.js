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
    
    <Carousel>
  <CarouselContent>
    <CarouselItem>
        
    <img src="/hero1.png" alt="3M Logo" 
    className='w-[50vw]'
    />



        </CarouselItem>
    <CarouselItem>
    <img src="/hero2.png" alt="3M Logo"
    className='w-[50vw]'
    />

    </CarouselItem>
    <CarouselItem>
    <img src="/hero6.jpeg" alt="3M Logo"
    className='w-[50vw]'
    />

    </CarouselItem>
    <CarouselItem>
    <img src="/hero4.jpeg" alt="3M Logo"
    className='w-[50vw]'
    />

    </CarouselItem>

    <CarouselItem>
    <img src="/hero5.jpeg" alt="3M Logo"
    className='w-[50vw]'
    />

    </CarouselItem>

    <CarouselItem>
    <img src="/hero7.jpeg" alt="3M Logo"
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