import React from 'react'
import acme from '/logo-acme.png'
import apex from '/logo-apex.png'
import celestial from '/logo-celestial.png'
import echo from '/logo-echo.png'
import pulse from '/logo-pulse.png'
import quantum from '/logo-quantum.png'
import { motion } from 'framer-motion'
function Ticker() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className='px-4 py-20 md:py-24 md:px-16 '>
        <div className='container  mx-auto'>
            <div className='flex gap-12 items-center   '>
                <div className='flex-1 text-left md:flex-none'>
                    <h1 className='md:text-lg'>Trusted by top Innovative teams</h1>
                </div>
                <motion.div 
                 className='flex flex-1  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                <motion.div
                initial={{x:"-50%"}} animate={{x:"0%"}} transition={{repeat:Infinity, duration:25, ease:'linear'}} 
                 className='flex flex-none gap-14 -translate-x-1/2' >
                    {[acme, apex, celestial, echo, pulse, quantum, acme, apex, celestial, echo, pulse, quantum].map((logo)=>{
                        return (
                            <img src={logo} key={logo} className='h-6 w-auto' />
                        )
                    })}
                </motion.div>
                </motion.div>
            </div>
        </div>
    </motion.section>
  )
}

export default Ticker