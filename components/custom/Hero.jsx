import React from 'react'
import Lookup from '@/data/Lookup'

function Hero() {
  return (
    <div>
        <h2 className='flex flex-col item-center mt-56 gap-2'>{Lookup.HERO_HEADING}</h2>
    </div>
  )
}

export default Hero