import React from 'react'
import Button from './Button'
import stars from '/stars.png'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'
function Hero() {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end","end start"]
  })
  const backgroundPositionY = useTransform(scrollYProgress,[0, 1],[-300, 300])
  return (
    <motion.section
    ref={sectionRef}
      animate={{
        backgroundPositionX: ['0px', '1000px'], // Animating from 0px to 1000px for a moving stars effect
      }}
      transition={{
        repeat: Infinity,
        duration: 120, // Duration of the entire animation cycle in seconds
        ease: 'linear',
      }}
      style={{
         backgroundImage: `url(${stars})`,
         backgroundPositionY

         }}
      className='h-[500px] md:h-[800px] px-4 flex justify-center items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'
    >
      <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]'></div>
      <div
        className="absolute h-64 w-64 md:h-96 md:w-96  bg-purple-500 rounded-full border border-white/10 shadow-[-20px_-20px_50px_rgb(255,255,255),0px_0px_50px_rgb(140,69,255)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundImage: 'radial-gradient(50% 50% at 16.8% 18%, white, rgba(184, 184, 255, 0.5) 37.7%, rgb(24,0,66))',
        
        }}
      >
      </div>

      <motion.div animate={{rotate:"1turn"}} style={{translateX:"-50%",translateY:"-50%"}} transition={{duration:30, ease:"linear", repeat:Infinity}}
       className='absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute w-2 h-2 bg-white opacity-80 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute w-2 h-2 bg-white opacity-80 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute w-2 h-2 bg-white opacity-80 rounded-full bottom-1/2 right-0 translate-x-1/2 translate-y-1/2'></div>
       </motion.div>
      <motion.div animate ={{rotate:"-1turn"}} style={{translateX:"-50%",translateY:"-50%"}} transition={{duration:50, ease:"linear",repeat:Infinity}}
       className='absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute w-2 h-2 bg-white opacity-80 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute w-2 h-2 bg-white opacity-80 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute w-2 h-2 bg-white opacity-80 rounded-full bottom-1/2 right-0 translate-x-1/2 translate-y-1/2'></div>
       </motion.div>
      <div className='absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>

        <div className='container relative mt-12'>
            <h1 className='text-8xl md:text-[168px] font-semibold bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text text-transparent '>AI SEO</h1>
            <p className='text-base md:text-xl text-white/70 mt-5 max-w-xl mx-auto'>Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
            <div className='flex justify-center items-center mt-5'>
                <Button>Join Waitlist</Button>
            </div>
        </div>
    </motion.section>
  )
}

export default Hero