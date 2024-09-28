import React, { useEffect } from 'react'
import Button from './Button'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

function Header() {

    const [hidden, sethidden] = useState(false)
    const {scrollY} = useScroll()

    useMotionValueEvent(scrollY, "change",(latest)=>{
        sethidden(latest>scrollY.getPrevious())
    })
    useEffect(() => {
      sethidden(false)
    

    }, [])
    

  return (
    <motion.header
    initial={{y:0}}
    animate = {{y:hidden?"-100%":"0%"}}
    transition={{duration:0.3, type:"tween"}}
    className='py-4 border-b border-white/15 px-8 md:border-none max-w-2xl mx-auto sticky top-0 z-10 backdrop-blur md:backdrop-blur-none'>
        <div className='container'>
            <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl md:backdrop-blur' >
                <div>
                    {/* <img src="/logo.svg" alt="" className='w-8 h-8 ' /> */}
                    <h1 className=''>Logo</h1>
                </div>
                <div className='hidden md:block'>
                    <nav className='flex gap-8 text-sm'>
                        <a href="" className='text-white/70 hover:text-white transition'>Features</a>
                        <a href="" className='text-white/70 hover:text-white transition'>Developers</a>
                        <a href="" className='text-white/70 hover:text-white transition'>Pricing</a>
                        <a href="" className='text-white/70 hover:text-white transition'>Changelog</a>
                    </nav>
                </div>
                <div className='flex gap-4 items-center'>
                    <Button>Join Waitlist</Button>
                    <img src="/icon-menu.svg" alt=""  className='md:hidden'/>
                </div>
            </div>
        </div>
    </motion.header>
  )
}

export default Header