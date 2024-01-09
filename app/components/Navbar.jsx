import React from "react"

const Navbar = () => {
    return (
        <nav className='p-6 shadow-md'>
            <div className='mx-auto max-w-[1440px] w-full flex justify-between items-center'>
                <img className='h-8' src='/logo.svg' alt='fikz' />
                <img className='h-6' src='/logout.svg' alt='logout' />
            </div>
        </nav>
    )
}

export default Navbar
