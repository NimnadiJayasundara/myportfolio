'use client'

import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import Nav from '@/components/Navbar'
import MobileNav from '@/components/mobileNav'


const Header = () => {
    return (
        <header className='fixed z-40 w-full bg-primary py-6 xl:py-8 '>
            <div className='container mx-auto flex items-center
             justify-between'>
                {/* logo */}
                <Link to='home' spy={true} smooth={true} className='cursor-pointer'>
                    <Image src='https://img.freepik.com/premium-vector/hn-script-logo-design-vector-template-initial-calligraphy-letter-hn-vector-illustration_616200-1338.jpg' height={54.53} width={41.35} alt='logo' />
                </Link>
                
                {/* desktop nav */}
                <div className='hidden items-center gap-x-8 xl:flex'>
                <Nav />
                <Link
                    to='/'
                    spy={true}
                    smooth={true}
                    className='text-md rounded-full bg-blue px-6 py-2 font-medium text-white transition-all hover:bg-blue/80'
                >
                    Hire me
                </Link>
                </div>

                {/* mobile nav */}
                {/* mobile nav */}
                <div className='z-50 xl:hidden'>
                <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header