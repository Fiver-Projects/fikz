import React from "react"

const page = () => {
    return (
        <section className='bg-white min-h-screen h-full w-full flex justify-center items-center'>
            <div className='border shadow-lg shadow-black/20 min-h-[600px] max-w-[500px] w-full flex flex-col justify-center items-center gap-5 p-8 m-4 sm:m-2'>
                <img className='h-12' src='/logo.svg' alt='fikz-logo' />
                <h1 className='text-lg font-bold text-fikz-gray-strong'>Login to your Account</h1>
                <form className='w-full flex flex-col gap-2'>
                    <input type='Email' placeholder='email' className='text-sm outline-none border border-fikz-gray-light/20 focus:border-fikz-gray-light hover:border-fikz-gray-light active:border-fikz-gray-light p-4 rounded-xl w-full' />
                    <input type='Password' placeholder='password' className='text-sm outline-none border border-fikz-gray-light/20 focus:border-fikz-gray-light hover:border-fikz-gray-light active:border-fikz-gray-light p-4 rounded-xl w-full' />
                    <input type='submit' value='Login' className='mt-2 text-white outline-none cursor-pointer bg-fikz-brown focus:bg-fikz-yellow hover:bg-fikz-yellow active:bg-fikz-yellow p-4 rounded-xl w-full' />
                </form>
                <h6 className='text-sm text-fikz-gray-light'>-Or login with-</h6>
                <div className='flex justify-center items-center gap-3'>
                    <button className=' outline-none cursor-pointer focus:bg-fikz-bg hover:bg-fikz-bg active:bg-fikz-bg py-4 px-6 sm:px-12 rounded-xl w-full border border-fikz-gray-light/20'>
                        <img className='h-8' src='/google.svg' alt='google-logo' />
                    </button>
                    <button className=' outline-none cursor-pointer focus:bg-fikz-bg hover:bg-fikz-bg active:bg-fikz-bg py-4 px-6 sm:px-12 rounded-xl w-full border border-fikz-gray-light/20'>
                        <img className='h-7' src='/fb.svg' alt='fb-logo' />
                    </button>
                    <button className=' outline-none cursor-pointer focus:bg-fikz-bg hover:bg-fikz-bg active:bg-fikz-bg py-4 px-6 sm:px-12 rounded-xl w-full border border-fikz-gray-light/20'>
                        <img className='h-7' src='/apple.svg' alt='apple-logo' />
                    </button>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <h6 className='text-sm text-fikz-gray-light'>Don’t have an account?</h6>
                    <button className='text-sm text-fikz-brown'>Sign Up</button>
                </div>
            </div>
        </section>
    )
}

export default page
