import React from "react"

const Navbar2 = () => {
    return (
        <nav className='p-6 shadow-md'>
            <div className='mx-auto max-w-[1440px] w-full flex justify-start items-center gap-8'>
                <img className='h-8' src='/logo.svg' alt='fikz' />
                <form className='hidden sm:flex max-w-sm rounded-lg border'>
                    <span className='relative'>
                        <input className='rounded-l-lg px-8 py-2 appearance-none bg-inherit border border-fikz-black' placeholder='Find Services' type='text' />
                        <img className='absolute top-3 left-2' src='/search.svg' alt='' />
                    </span>
                    <button className='px-4 py-2 text-white border border-fikz-black bg-fikz-black rounded-r-lg'>Search</button>
                </form>
                <div className='flex-grow flex justify-end items-center gap-4 lg:gap-8'>
                    <button className='text-fikz-gray-light font-semibold hidden lg:block'>Explore</button>
                    <button className='text-fikz-gray-light font-semibold hidden lg:block'>Explore</button>
                    <button className='hidden md:block'>
                        <img src='/file.svg' alt='file' />
                    </button>
                    <button className='hidden md:block'>
                        <img src='/bell.svg' alt='bell' />
                    </button>
                    <button>
                        <span className='relative'>
                            <img className='h-12' src='/profile.svg' alt='profile' />
                            <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar2
