import React from 'react'
import x from '/social-x.svg'
import youtube from '/social-youtube.svg'
function Footer() {
  return (
    <section className='pt-20'>
        <div className='container border-t border-t-white/15 p-4 text-left lg:flex lg:gap-5  lg:items-center md:px-16'>
            <div className='flex lg:flex-1'>
                <h1 className='text-base'>AI startup Landing Page</h1>

            </div>
            <div className='flex flex-col gap-5 mt-8 lg:mt-0 text-sm lg:flex-row lg:justify-center lg:flex-1 lg:gap-7'>
                <a  className='text-white/50 hover:text-white'>Features</a>
                <a className='text-white/50 hover:text-white'>Developers</a>
                <a className='text-white/50 hover:text-white'>Company</a>
                <a className='text-white/50 hover:text-white'>Blog</a>
                <a className='text-white/50 hover:text-white'>Changelog</a>
            </div>
            <div className='mt-8 lg:mt-0 flex lg:flex-1 lg:justify-end'>
                <img src={x} alt="" className='w-5 h-5'/>
                {/* <img src={youtube} alt="" className='w-5 h-5' /> */}
            </div>
        </div>
    </section>
  )
}

export default Footer