import React from 'react'
import Button from './Button'
import stars from '/stars.png'
import gridLines from '/grid-lines.png'
import { motion } from 'framer-motion'

function CallToAction() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    
    className='py-20 md:py-24 '>
        <div className='container px-4 md:px-16'>
            <div className='border border-white/15 py-24 px-4 rounded-xl overflow-hidden relative' style={{backgroundImage:`url(${stars})`}}>
            <div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]' style={{backgroundImage:`url(${gridLines})`}}></div>
            <div className='relative max-w-sm mx-auto'>
                <h1 className='text-5xl md:text-6xl font-medium tracking-tighter'>AI-driven SEO for everyone.</h1>
                <p className='text-lg md:text-xl text-white/70 mt-5 px-4 tracking-tight'>Achieve clear, impactful results without the complexity.</p>
            </div>
        
            <div className='mt-8'>
            <Button>Join Waitlist</Button>

            </div>
            </div>
        </div>
    </motion.section>
  )
}

export default CallToAction