import React from "react"

const page = () => {
    return (
        <section className=' mx-auto max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-3 md:gap-5'>
            <div className=' col-span-1 bg-white shadow-md'>
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
                <span className='w-full flex justify-center items-center px-4'>
                    <button className='mt-2 py-3 px-8 w-[90%] mx-auto text-center border-2 bg-fikz-black text-white rounded-xl flex items-center justify-center gap-2'>
                        <img src='/phone.svg' alt='phone' />
                        <span>Call</span>
                    </button>
                    <button className='mt-2 py-3 px-8 w-[90%] mx-auto text-center border-2 bg-fikz-black text-white rounded-xl flex items-center justify-center gap-2'>
                        <img src='/chat.svg' alt='chat' />
                        <span>Chat</span>
                    </button>
                </span>
                <div className='py-2 px-4 flex flex-col'>
                    <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-1' />
                    <div className='flex justify-between items-center'>
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
                    <div className='flex justify-between items-center'>
                        <span className='flex justify-start items-center gap-4 py-2'>
                            <img className='h-4' src='/add.svg' alt='add' />
                            <h4 className='text-lg font-semibold text-fikz-gray-light'>Address</h4>
                        </span>
                        <h6 className='text-lg font-semibold'>Louisiana, UK</h6>
                    </div>
                    <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-1' />
                    <div className='flex justify-between items-center'>
                        <span className='flex justify-start items-center gap-4 py-2'>
                            <img className='h-4' src='/distance.svg' alt='distance' />
                            <h4 className='text-lg font-semibold text-fikz-gray-light'>Distance</h4>
                        </span>
                        <h6 className='text-lg font-semibold'>6 miles away</h6>
                    </div>
                    <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-1' />
                    <div className='flex justify-between items-center'>
                        <span className='flex justify-start items-center gap-4 py-2'>
                            <img className='h-4' src='/lang.svg' alt='lang' />
                            <h4 className='text-lg font-semibold text-fikz-gray-light'>Language</h4>
                        </span>
                        <span className='flex items-center'>
                            <h6 className='text-lg font-semibold'>English</h6>-<h6 className='text-lg font-semibold text-fikz-gray-light'>Fluent</h6>
                        </span>
                    </div>
                    <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-1' />
                    <span className='pt-4 w-full flex justify-center items-center'>
                        <button className='mt-2 py-3 px-8 w-full mx-auto text-center border-2 bg-fikz-black text-white rounded-xl flex items-center justify-center gap-2'>Proceed to Bid</button>
                    </span>
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
                <div className='grid lg:grid-cols-3 gap-6 w-full pt-4'>
                    <div className='col-span-2 shadow-sm flex flex-col gap-2 bg-white p-4 rounded-lg'>
                        <h4 className='text-xl font-semibold  text-fikz-black'>Summery</h4>
                        <p className='text-fikz-gray-light text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elzeeitsf xdd. Pellentesque amet enim volutpat maecenas nisl. Consectetaaur blandit eu id ornare turpis viverra arcu.</p>
                        <button className='text-fikz-black text-left'>Read more</button>
                        <div className='py-4 flex justify-start items-center flex-wrap gap-5'>
                            <img className='rounded-lg h-24' src='/wires.svg' alt='wires' />
                            <img className='rounded-lg h-24' src='/wires.svg' alt='wires' />
                            <img className='rounded-lg h-24' src='/wires.svg' alt='wires' />
                        </div>
                    </div>
                    <div className='col-span-1 shadow-sm flex flex-col gap-2 bg-white p-2 rounded-lg'>
                        <h4 className='text-xl font-semibold  text-fikz-black pt-2 px-2'>Property details</h4>
                        <ul className='mt-4 border'>
                            <li className='flex items-center justify-between px-4 py-2 border-b'>
                                <span className='flex items-center justify-start gap-2'>
                                    <img className='h-8' src='/planes.svg' alt='planes' />
                                    <h4 className=' font-semibold  text-fikz-black'>Floor</h4>
                                </span>
                                <h4 className=' font-semibold  text-fikz-black'>2</h4>
                            </li>
                            <li className='flex items-center justify-between px-4 py-2 border-b bg-fikz-gray-light/20'>
                                <span className='flex items-center justify-start gap-2'>
                                    <img className='h-8' src='/cube.svg' alt='Cube' />
                                    <h4 className=' font-semibold  text-fikz-black'>Square Feet</h4>
                                </span>
                                <h4 className=' font-semibold  text-fikz-black'>425sqft</h4>
                            </li>
                            <li className='flex items-center justify-between px-4 py-2 border-b'>
                                <span className='flex items-center justify-start gap-2'>
                                    <img className='h-8' src='/bed.svg' alt='bed' />
                                    <h4 className=' font-semibold  text-fikz-black'>Bedrooms</h4>
                                </span>
                                <h4 className=' font-semibold  text-fikz-black'>8</h4>
                            </li>
                            <li className='flex items-center justify-between px-4 py-2 border-b bg-fikz-gray-light/20'>
                                <span className='flex items-center justify-start gap-2'>
                                    <img className='h-8' src='/garage.svg' alt='Garage' />
                                    <h4 className=' font-semibold  text-fikz-black'>Garage</h4>
                                </span>
                                <h4 className=' font-semibold  text-fikz-black'>1</h4>
                            </li>
                            <li className='flex items-center justify-between px-4 py-2 border-b'>
                                <span className='flex items-center justify-start gap-2'>
                                    <img className='h-8' src='/shower.svg' alt='Bathroom' />
                                    <h4 className=' font-semibold  text-fikz-black'>Bathroom</h4>
                                </span>
                                <h4 className=' font-semibold  text-fikz-black'>2</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
