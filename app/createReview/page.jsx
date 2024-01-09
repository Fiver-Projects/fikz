import React from "react"

const page = () => {
    return (
        <section className='mx-auto max-w-[1440px]'>
            <h4 className='text-lg  text-fikz-black'>Review</h4>
            <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
            <div className='flex flex-col justify-center items-center gap-4 pt-4 m-2'>
                <h1 className='text-3xl font-semibold text-center'>
                    Your review helps the
                    <br /> contractor business
                </h1>
                <img className='h-28' src='/profile.svg' alt='profile' />
                <h2 className='text-2xl font-semibold text-center'>Mark John</h2>
                <div className='flex justify-start items-center gap-2'>
                    <img className='h-5 sm:h-7' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-5 sm:h-7' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-5 sm:h-7' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-5 sm:h-7' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-5 sm:h-7' src='/star-empty.svg' alt='starempty' />
                </div>
                <textarea className='rounded-lg bg-white shadow-sm max-w-[530px] w-full p-2 resize-none text-fikz-gray-strong font-semibold' cols='30' rows='5'>
                    The Service is extremely good. Every work was done with precision. The bills were very detailed and everything...
                </textarea>
                <div className='flex flex-col justify-center items-center gap-4 w-full'>
                    <button className='mt-2 py-3 px-8 w-full max-w-[390px] mx-auto text-center border-2 bg-fikz-black text-white rounded-xl '>Submit</button>
                    <button className='text-fikz-black'>Skip</button>
                </div>
            </div>
        </section>
    )
}

export default page
