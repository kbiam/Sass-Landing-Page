import React from 'react'
import { motion } from 'framer-motion'


function Button(props) {
  return (
    <motion.button
    
    className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'>
        <div className='absolute inset-0'>
        <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]'></div>
        <div className='rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top, black, transparent)]'></div>
        </div>
                        
    {props.children}</motion.button>

  )
}

export default Button