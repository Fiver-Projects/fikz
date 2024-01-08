import React from "react"

const page = () => {
    return (
        <section className='mx-auto max-w-[1440px] grid md:gap-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 px-2 md:px-4 lg:px-0 py-4 md:py-8'>
            <div className='sm:col-span-1 lg:col-span-1 2xl:col-span-1'>
                <div className='flex justify-start items-center gap-4'>
                    <img className='h-4' src='/filter.svg' alt='filter' />
                    <h4 className='text-lg font-semibold text-fikz-gray-strong'>Filter</h4>
                </div>
                <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
                <div className='flex justify-start items-center gap-4'>
                    <img className='h-4' src='/star-brown.svg' alt='star' />
                    <h4 className='text-lg font-semibold text-fikz-gray-light'>Rating</h4>
                </div>
                <div className='flex justify-start items-center gap-3 py-4'>
                    <img className='h-8' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-8' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-8' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-8' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-8' src='/star-empty.svg' alt='starempty' />
                    <h4 className='text-lg font-semibold text-fikz-gray-strong'>& UP</h4>
                </div>
                <div className='flex justify-start items-center gap-4 py-2'>
                    <img className='h-4' src='/distance.svg' alt='distance' />
                    <h4 className='text-lg font-semibold text-fikz-gray-light'>Distance</h4>
                </div>
                <div class='relative acccent'>
                    <input className='bg-fikz-bg w-full h-2 rounded-lg text-black cursor-pointer ' type='range' />
                    <span class='text-lg font-semibold text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>0</span>
                    <span class='text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8'>
                        <h4 className='text-lg font-bold text-fikz-black'>250</h4>
                        <h6 className='-mt-1 text-fikz-black text-sm'>miles</h6>
                    </span>
                    <span class='text-lg font-semibold text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6'>600</span>
                </div>
                <div className='flex justify-start items-center gap-4 py-2 mt-12'>
                    <img className='h-4' src='/dollar.svg' alt='dollar' />
                    <h4 className='text-lg font-semibold text-fikz-gray-light'>Cost</h4>
                </div>
                <div class='relative acccent'>
                    <input className='bg-fikz-bg w-full h-2 rounded-lg text-black cursor-pointer ' type='range' />
                    <span class='text-lg font-semibold text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>0</span>
                    <span class='text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6'>
                        <h4 className='text-lg font-bold text-fikz-black'>$400</h4>
                    </span>
                    <span class='text-lg font-semibold text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6'>1000</span>
                </div>
                <div className='flex justify-start items-center gap-4 py-2 mt-12'>
                    <img className='h-4' src='/case.svg' alt='case' />
                    <h4 className='text-lg font-semibold text-fikz-gray-light'>Availability</h4>
                </div>
                <div className='flex flex-col gap-1 pt-2'>
                    <span className=' font-semibold text-fikz-gray-light'>from</span>
                    <input className='p-2 rounded-md' type='date' value='09/10/24' placeholder='09/10/24' />
                    <span className=' font-semibold text-fikz-gray-light'>to</span>
                    <input className='p-2 rounded-md' type='date' value='09/10/24' placeholder='MM/DD/YY' />
                </div>
                <div className='flex justify-start items-center gap-4 py-2 mt-6'>
                    <img className='h-4' src='/spec.svg' alt='spec' />
                    <h4 className='text-lg font-semibold text-fikz-gray-light'>building spec</h4>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-start items-center gap-2'>
                        <img className='h-10' src='/planes.svg' alt='planes' />
                        <input type='number' id='number-input' aria-describedby='helper-text-explanation' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Min' />
                        <span className=' font-semibold text-fikz-gray-light'>to</span>
                        <input type='number' id='number-input' aria-describedby='helper-text-explanation' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Max' />
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <img className='h-10' src='/cube.svg' alt='cube' />
                        <input type='number' id='number-input' aria-describedby='helper-text-explanation' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Min' />
                        <span className=' font-semibold text-fikz-gray-light'>to</span>
                        <input type='number' id='number-input' aria-describedby='helper-text-explanation' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Max' />
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <img className='h-10' src='/bed.svg' alt='bed' />
                        <input type='number' id='number-input' aria-describedby='helper-text-explanation' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Min' />
                        <span className=' font-semibold text-fikz-gray-light'>to</span>
                        <input type='number' id='number-input' aria-describedby='helper-text-explanation' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Max' />
                    </div>
                    <button className='mt-2 py-2 px-4 w-full border-2 border-fikz-black text-fikz-black rounded-xl'>Apply</button>
                </div>
            </div>
            <div className='sm:col-span-2 lg:col-span-3 2xl:col-span-4'>
                <h4 className='text-lg  text-fikz-black'>Bids</h4>
                <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
                <div className='flex justify-between items-center p-2'>
                    <div className='flex justify-start items-start'>
                        <div className='flex flex-col sm:gap-2 '>
                            <img className='h-16 sm:h-20' src='/sq-profile.svg' alt='pr' />
                            <div className='flex justify-start items-center gap-[2px]'>
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                                <h4 className='text-[12px] sm:text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-2'>
                            <div className='flex'>
                                <div className='flex justify-start items-center text-fikz-black gap-1 lg:gap-4'>
                                    <h2 className='text-xl font-bold'>Mark John</h2>
                                    <h4 className='text-sm font-bold'>San Fransisco, CA</h4>
                                    <h6 className='text-sm font-bold'>6 miles away</h6>
                                </div>
                            </div>
                            <div className='flex justify-center sm:justify-start items-center gap-2 lg:gap-4'>
                                <img className='h-6 sm:h-8 lg:h-11' src='/garage.svg' alt='garage' />
                                <img className='h-6 sm:h-8 lg:h-11' src='/shower.svg' alt='shower' />
                                <img className='h-6 sm:h-8 lg:h-11' src='/planes.svg' alt='planes' />
                                <img className='h-6 sm:h-8 lg:h-11' src='/cube.svg' alt='cube' />
                                <img className='h-6 sm:h-8 lg:h-11' src='/bed.svg' alt='bed' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-xl sm:text-3xl lg:text-5xl font-bold '>$100</h1>
                        <h4 className='text-[12px] sm:text-base font-semibold text-fikz-gray-light'>July 21, 2021</h4>
                    </div>
                </div>
                <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
                <div className='flex justify-between items-center p-2'>
                    <div className='flex justify-start items-start'>
                        <div className='flex flex-col sm:gap-2 '>
                            <img className='h-16 sm:h-20' src='/sq-profile.svg' alt='pr' />
                            <div className='flex justify-start items-center gap-[2px]'>
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                                <h4 className='text-[12px] sm:text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-2'>
                            <div className='flex'>
                                <div className='flex justify-start items-center text-fikz-black gap-1 lg:gap-4'>
                                    <h2 className='text-xl font-bold'>Mark John</h2>
                                    <h4 className='text-sm font-bold'>San Fransisco, CA</h4>
                                    <h6 className='text-sm font-bold'>6 miles away</h6>
                                </div>
                            </div>
                            <div className='flex justify-center sm:justify-start items-center gap-2 lg:gap-4'>
                                <img className='h-6 sm:h-8 lg:h-11' src='/garage.svg' alt='garage' />
                                <img className='h-6 sm:h-8 lg:h-11' src='/shower.svg' alt='shower' />
                                <img className='h-6 sm:h-8 lg:h-11' src='/planes.svg' alt='planes' />
                                <img className='h-6 sm:h-8 lg:h-11' src='/cube.svg' alt='cube' />
                                <img className='h-6 sm:h-8 lg:h-11' src='/bed.svg' alt='bed' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-xl sm:text-3xl lg:text-5xl font-bold '>$100</h1>
                        <h4 className='text-[12px] sm:text-base font-semibold text-fikz-gray-light'>July 21, 2021</h4>
                    </div>
                </div>
                <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
            </div>
        </section>
    )
}

export default page
