import React from 'react'
import { motion } from 'framer-motion'
const reviews = [
    {
        name:"Jamie Lee",
        posn:"Founder @Fuse",
        review:"These AI tools have completely revolutionized our SEO entire strategy overnight",
        photo:"/avatar-1.png"
    },
    {
        name:"Kush Bang",
        posn:"Founder @Fuse",
        review:"These AI tools have completely revolutionized our SEO entire strategy overnight",
        photo:"/avatar-2.png"
    },
    {
        name:"Kush Bang",
        posn:"Founder @Fuse",
        review:"These AI tools have completely revolutionized our SEO entire strategy overnight",
        photo:"/avatar-3.png"
    },
    {
        name:"Kush Bang",
        posn:"Founder @Fuse",
        review:"These AI tools have completely revolutionized our SEO entire strategy overnight",
        photo:"/avatar-4.png"
    },
    {
        name:"Kush Bang",
        posn:"Founder @Fuse",
        review:"These AI tools have completely revolutionized our SEO entire strategy overnight",
        photo:"ad"
    },
    {
        name:"Kush Bang",
        posn:"Founder @Fuse",
        review:"These AI tools have completely revolutionized our SEO entire strategy overnight",
        photo:"ad"
    },
]

function Testimonials() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className='container py-20 px-4 md:py-24 md:px-16'>
            <h1 className='text-5xl tracking-tighter font-medium md:text-6xl'>Beyond Expectations.</h1>
            <p className='text-lg tracking-tight text-white/70 mt-5 md:text-xl'>Our revolutionary AI SEO tools have transformed our clients strategies</p>
            <div className=' overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
            <div className='mt-5 flex gap-5'> 
            {reviews.map((review)=>{
                return(
                            <div key={review.name} className='flex flex-col p-6 border border-white/20 rounded-lg gap-8 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] flex-none max-w-[330px] mx-auto md:max-w-md md:p-10 '>
                                <p className='text-left text-base tracking-tight md:text-lg'>{review.review}</p>
                                <div className='flex items-center gap-4'>
                                    <img src={review.photo} alt="" className='border h-11 w-11 rounded-md' />
                                    <div className='flex flex-col text-sm md:text-base'>
                                        <h3>{review.name}</h3>
                                        <p>{review.posn}</p>
                                    </div>
                                </div>
                            </div>
                )
            })}
            </div>
            </div>

        </div>
    </motion.section>
  )
}

export default Testimonials