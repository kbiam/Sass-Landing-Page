import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import productImage from '/product-image.png'
import { motion } from 'framer-motion';
const tabs = [
    {
        icon:"/click.lottie",
        title:"User-friendly dashboard",
        isNew : false,
        backgroundPositionX:0,
        backgroundPositionY:0,
        backgroundSizeX:150,
    },
    {
        icon:"/click.lottie",
        title:"One-click optimization",
        isNew : false,
        backgroundPositionX:98,
        backgroundPositionY:100,
        backgroundSizeX:135,
    },
    {
        icon:"/stars.json",
        title:"User-frien",
        isNew : true,
        backgroundPositionX:100,
        backgroundPositionY:27,
        backgroundSizeX:177,
    },

]

function Features() {


  return (
    <motion.section

    >
        <div className='container mx-auto py-20 px-4 md:py-24 md:px-16'>
            <motion.h2 initial={{translateY:60, opacity:0 }} whileInView={{translateY:0, opacity:1}} viewport={{once:true}} transition={{duration:0.5}}
             className='text-5xl md:text-6xl font-medium tracking-tighter'>Elevate your SEO efforts.</motion.h2>
            <motion.p initial={{translateY:60,opacity:0}} whileInView={{translateY:0,opacity:1}} viewport={{once:true}} transition={{duration:0.5, delay:0.3}}
             className='text-white/70 text-lg tracking-tight mt-5 md:text-xl max-w-2xl mx-auto'>From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO. </motion.p>
            <div className='mt-10 flex flex-col gap-3 lg:flex-row '>
            {
                tabs.map((tab)=>{
                    return(
                    <motion.div
                    
                    whileHover={{}}
                    
                    key={tab.title} className='flex border border-white/15 p-2.5 rounded-xl gap-3 items-center flex-1 '>
                        <div className='border border-white/15 rounded-lg p-2.5 inline-flex items-center justify-center h-12 w-12'>
                            <DotLottieReact src={tab.icon} loop autoplay className='h-5 w-5'/>
                        </div>

                        <h3 className='font-medium'>{tab.title}</h3>
                        {tab.isNew && <div className='text-xs rounded-lg px-3 py-0.5 bg-[#8c44ff] text-black'>New</div>}
                    </motion.div>
                    )
                })
            }
            </div>
            <div className='border border-white/20 rounded-xl p-2.5 mt-3' >
                <div className='aspect-video bg-cover border border-white/20 rounded-lg p-2' style={{backgroundImage:`url(${productImage})`}}>

                </div>

            </div>
            {/* <img src={productImage} alt="" /> */}
            </div>
    </motion.section>
  )
}

export default Features