import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <nav className='bg-gray-800 shadow-sm border-b'>
            <div className='max-w-7xl mx-auto px-4 '>
                <div className='flex items-center justify-between h-16'>
                    {/* logo */}
                    <div className='shrink-0'>
                        <Link href="/" className='text-xl text-white font-bold'>Logo
                        </Link>
                    </div>
                    {/* navigation links */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <Link href="/" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Home</Link>

                            <Link href="/about" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>About</Link>

                            <Link href="/contact" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Contact</Link>

                        </div>
                    </div>

                    <div className='md:hidden'>
                        {/* Mobile menu button */}
                        <button type='button' className='text-gray-300 hover:text-white focus:outline-none focus:text-white'>
                            <svg className='h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        </button>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <Link href="/" className='block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Home</Link>

                            <Link href="/about" className='block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>About</Link>

                            <Link href="/contact" className='block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Contact</Link>
                        </div>
                    </div>
                </div>
        </nav>
    )
}

export default Navigation
