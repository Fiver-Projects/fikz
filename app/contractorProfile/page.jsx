import React from "react"

const page = () => {
    return (
        <section className='mx-auto max-w-[1440px] grid md:gap-8 grid-cols-1 md:grid-cols-5 2xl:grid-cols-7 px-2 md:px-4 lg:px-0 py-4 md:py-8'>
            <div className=' md:col-span-2 2xl:col-span-2 bg-white shadow-md'>
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
                <span className='w-full flex justify-center items-center'>
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
                    <div className='flex justify-around items-center py-4'>
                        <span className='flex flex-col justify-center items-center'>
                            <h4 className='font-semibold'>Bid Price & Schedule</h4>
                            <span className='flex gap-3 items-center'>
                                <h2 className='text-3xl font-semibold'>$100</h2>|<h5 className='text-xl font-semibold'>23-jul-2021</h5>
                            </span>
                        </span>
                        <button className='mt-2 py-3 px-4 mx-auto text-center border-2 bg-fikz-black text-white rounded-xl flex items-center justify-center gap-2'>
                            <img src='/tick.svg' alt='tick' />
                            <span>Accept</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className=' md:col-span-3 2xl:col-span-5 mt-4 sm:mt-0'>
                <h4 className='text-lg  text-fikz-black'>Cover Letter</h4>
                <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
                <p className='text-sm text-fikz-gray-light font-semibold'>Sed sit amet augue cursus ipsum hendrerit pelle ntesque eget vitae nulla. Curabitur at pellentesq ue urna. Fusce volutpat euismod sagittis. rit pelle ntesque eget vitae nulla. Curabitur at prit pelle ntesque eget vitae nulla. Curabitur at p Sed sit amet augue cursus ipsum hendrerit pelle ntesque eget vitae nulla. Curabitur at pellentesq ue urna. Fusce volutpat euismod sagittis.</p>
                <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
                <h4 className='text-lg  text-fikz-black'>Skills</h4>
                <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
                <div className='flex justify-start items-center gap-5'>
                    <span className='bg-[#B77729]/20 p-6 rounded-lg'>
                        <img className='h-8 sm:h-11' src='/painter.svg' alt='painter' />
                    </span>
                    <span className='bg-[#B77729]/20 p-6 rounded-lg'>
                        <img className='h-8 sm:h-11' src='/switch.svg' alt='switch' />
                    </span>
                    <span className='bg-[#B77729]/20 p-6 rounded-lg'>
                        <img className='h-8 sm:h-11' src='/package.svg' alt='package' />
                    </span>
                    <span className='bg-[#B77729]/20 p-6 rounded-lg'>
                        <img className='h-8 sm:h-11' src='/roof.svg' alt='roof' />
                    </span>
                </div>
                <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
                <h4 className='text-lg  text-fikz-black'>Reviews</h4>

                <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />

                <div className='flex justify-between items-center p-2'>
                    <div className='flex justify-start items-start'>
                        <div className='flex flex-col sm:gap-2 flex-grow flex-shrink-0'>
                            <img className='h-16  w-full resize-none sm:h-20 flex-shrink-0' src='/sq-profile.svg' alt='pr' />
                            <div className='flex justify-start items-center gap-[2px]'>
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                                <h4 className='text-[12px] sm:text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 px-2'>
                            <div className='flex'>
                                <div className='flex justify-start items-center text-fikz-black gap-1'>
                                    <h2 className='text-xl font-bold'>Mark John</h2> - <h4 className='text-sm font-semibold text-fikz-gray-light'>July 21, 2021</h4>
                                </div>
                            </div>
                            <p className='text-fikz-gray-light w-fit'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-shrink-0'>
                        <h1 className='text-xl sm:text-3xl lg:text-5xl font-bold '>$100</h1>
                        <h4 className='text-sm font-bold'>San Fransisco, CA</h4>
                        <h6 className='text-sm font-bold'>6 miles away</h6>
                    </div>
                </div>
                <div className='flex justify-between items-center p-2 bg-fikz-gray-light/20'>
                    <div className='flex justify-start items-start'>
                        <div className='flex flex-col sm:gap-2 flex-grow flex-shrink-0'>
                            <img className='h-16  w-full resize-none sm:h-20 flex-shrink-0' src='/sq-profile.svg' alt='pr' />
                            <div className='flex justify-start items-center gap-[2px]'>
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                                <h4 className='text-[12px] sm:text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 px-2'>
                            <div className='flex'>
                                <div className='flex justify-start items-center text-fikz-black gap-1'>
                                    <h2 className='text-xl font-bold'>Mark John</h2> - <h4 className='text-sm font-semibold text-fikz-gray-light'>July 21, 2021</h4>
                                </div>
                            </div>
                            <p className='text-fikz-gray-light w-fit'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-shrink-0'>
                        <h1 className='text-xl sm:text-3xl lg:text-5xl font-bold '>$100</h1>
                        <h4 className='text-sm font-bold'>San Fransisco, CA</h4>
                        <h6 className='text-sm font-bold'>6 miles away</h6>
                    </div>
                </div>
                <div className='flex justify-center items-center py-2'>
                    <span className='font-semibold text-center'>+ Read More</span>
                </div>
            </div>
        </section>
    )
}

export default page
