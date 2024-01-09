import React from "react"

const page = () => {
    return (
        <section className=' mx-auto max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-3 md:gap-5'>
            <div className='col-span-1 bg-white shadow-md'>
                <div className='flex flex-col items-center justify-center'>
                    <img className='h-full w-full bg-cover bg-center' src='/pr-bg.svg' alt='bg' />
                    <img className='h-32 p-1 rounded-full bg-white -mt-16' src='/profile.svg' alt='' />
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <h2 className='text-xl font-bold text-center'>Mark John</h2>
                    <div className='flex justify-start items-center gap-[2px]'>
                        <img className='h-3 sm:h-4' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-3 sm:h-4' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-3 sm:h-4' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-3 sm:h-4' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-3 sm:h-4' src='/star-empty.svg' alt='starempty' />
                        <h4 className='text-sm sm:text-base font-semibold text-fikz-gray-light'>(51)</h4>
                    </div>
                </div>
                <div className='py-2 px-4 flex flex-col'>
                    <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-1' />
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <span className='flex justify-start items-center gap-4 py-2'>
                            <img className='h-4' src='/phone.svg' alt='phone' />
                            <h4 className='text-lg font-semibold text-fikz-gray-light'>Phone</h4>
                        </span>
                        <span className='flex justify-start items-center gap-2 py-2'>
                            <img className='h-4' src='/copy.svg' alt='copy' />
                            <h4 className='text-lg font-semibold'>+123 456 789</h4>
                        </span>
                    </div>
                    <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-1' />
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <span className='flex justify-start items-center gap-4 py-2'>
                            <img className='h-4' src='/add.svg' alt='add' />
                            <h4 className='text-lg font-semibold text-fikz-gray-light'>Address</h4>
                        </span>
                        <h6 className='text-lg font-semibold'>Louisiana, UK</h6>
                    </div>
                    <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-1' />
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <span className='flex justify-start items-center gap-4 py-2'>
                            <img className='h-4' src='/distance.svg' alt='distance' />
                            <h4 className='text-lg font-semibold text-fikz-gray-light'>Distance</h4>
                        </span>
                        <h6 className='text-lg font-semibold'>6 miles away</h6>
                    </div>
                    <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-1' />
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <span className='flex justify-start items-center gap-4 py-2'>
                            <img className='h-4' src='/lang.svg' alt='lang' />
                            <h4 className='text-lg font-semibold text-fikz-gray-light'>Language</h4>
                        </span>
                        <span className='flex items-center'>
                            <h6 className='text-lg font-semibold'>English</h6>-<h6 className='text-lg font-semibold text-fikz-gray-light'>Fluent</h6>
                        </span>
                    </div>
                    <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-1' />
                </div>
            </div>
            <div className='col-span-2 py-4'>
                <h4 className='text-lg  text-fikz-black'>deliver order</h4>
                <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
                <h4 className='text-xl font-semibold  text-fikz-black'>Services Details</h4>
                <div className='flex justify-around items-center flex-wrap gap-4 mt-10'>
                    <div className='h-44 w-56 rounded-lg border-2 border-fikz-black flex flex-col justify-center items-center'>
                        <span className='flex items-center gap-2'>
                            <h2 className='text-lg  text-fikz-black font-bold'>Electricity</h2>
                            <img className='h-4' src='/switch.svg' alt='switch' />
                        </span>
                        <ul className='text-fikz-gray-light font-semibold text-sm list-disc appearance-auto py-4'>
                            <li className='decoration-clone'>Switch Board</li>
                            <li className='decoration-clone'>Room wiring</li>
                            <li className='decoration-clone'>Fan Connection</li>
                        </ul>
                    </div>
                    <div className='h-44 w-56 rounded-lg border-2 border-fikz-black flex flex-col justify-center items-center'>
                        <span className='flex items-center gap-2'>
                            <h2 className='text-lg  text-fikz-black font-bold'>Lifting</h2>
                            <img className='h-4' src='/package.svg' alt='package' />
                        </span>
                        <ul className='text-fikz-gray-light font-semibold text-sm list-disc appearance-auto py-4'>
                            <li className='decoration-clone'>Switch Board</li>
                            <li className='decoration-clone'>Room wiring</li>
                            <li className='decoration-clone'>Fan Connection</li>
                        </ul>
                    </div>
                    <div className='h-44 w-56 rounded-lg border-2 border-fikz-black flex flex-col justify-center items-center'>
                        <span className='flex items-center gap-2'>
                            <h2 className='text-lg  text-fikz-black font-bold'>Roofing</h2>
                            <img className='h-4' src='/roof.svg' alt='roog' />
                        </span>
                        <ul className='text-fikz-gray-light font-semibold text-sm list-disc appearance-auto py-4'>
                            <li className='decoration-clone'>Switch Board</li>
                            <li className='decoration-clone'>Room wiring</li>
                            <li className='decoration-clone'>Fan Connection</li>
                        </ul>
                    </div>
                    <div className='h-44 w-56 rounded-lg border-2 border-fikz-black flex flex-col justify-center items-center'>
                        <span className='flex items-center gap-2'>
                            <h2 className='text-lg  text-fikz-black font-bold'>Electricity</h2>
                            <img className='h-4' src='/switch.svg' alt='switch' />
                        </span>
                        <ul className='text-fikz-gray-light font-semibold text-sm list-disc appearance-auto py-4'>
                            <li className='decoration-clone'>Switch Board</li>
                            <li className='decoration-clone'>Room wiring</li>
                            <li className='decoration-clone'>Fan Connection</li>
                        </ul>
                    </div>
                </div>
                <h4 className='mt-4 text-xl font-semibold  text-fikz-black'>Cover Letter</h4>
                <div className='grid md:grid-cols-2 gap-5 w-full pt-4'>
                    <div>
                        <textarea className='p-4 rounded-lg border-fikz-gray-light/50 outline-none appearance-none resize-none bg-white w-full' cols='30' rows='10' placeholder='Describe Your Offer'></textarea>
                        <p className='text-fikz-gray-light text-sm text-right'>0 / 1500 CHARS MAX</p>
                    </div>
                    <div className='flex flex-col justify-start items-center gap-4 w-full'>
                        <button className='mt-2 py-3 px-4 w-full  mx-auto text-center border-2 bg-fikz-black text-white rounded-xl '>Submit</button>
                        <button className='mt-2 py-3 px-4 w-full  mx-auto text-center border-2 border-fikz-black text-fikz-black rounded-xl '>Cancel</button>
                    </div>
                </div>
                <div className='py-4 flex justify-start items-center flex-wrap gap-5'>
                    <img className='rounded-lg h-24' src='/wires.svg' alt='wires' />
                    <img className='rounded-lg h-24' src='/wires.svg' alt='wires' />
                    <img width='96' height='96' src='https://img.icons8.com/external-regular-kawalan-studio/96/external-camera-plus-multimedia-regular-kawalan-studio.png' alt='external-camera-plus-multimedia-regular-kawalan-studio' />
                </div>
            </div>
        </section>
    )
}

export default page
