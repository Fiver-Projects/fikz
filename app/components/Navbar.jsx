import React from "react"

const Navbar = () => {
    return (
        <nav className='p-6 mb-4 flex justify-between items-center shadow-md'>
            <img className='h-8' src='/logo.svg' alt='fikz' />
            <img className='h-6' src='/logout.svg' alt='logout' />
        </nav>
    )
}

export default Navbar
