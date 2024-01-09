import React from "react"

const page = () => {
    return (
        <section className=' mx-auto max-w-[1440px] w-full flex flex-col md:gap-5 mt-8'>
            <div>
                <span className='p-2 lg:p-0 flex flex-col lg:flex-row justify-start items-center'>
                    <h4 className='text-lg font-semibold text-fikz-black lg:border-b-2 w-full lg:w-[20%] border-fikz-black pb-2'>Incoming Requests</h4>
                    <h4 className='text-lg font-semibold text-fikz-gray-light lg:border-b-2 w-full border-fikz-gray-light/20 pb-2'>In Progress</h4>
                </span>
            </div>
            <div className='pt-8 flex flex-col '>
                <div className='flex flex-col lg:flex-row items-center lg:justify-between p-2'>
                    <div className='flex  justify-start gap-2 md:gap-4 lg:gap-10'>
                        <div className='flex flex-col md:flex-row items-center'>
                            <img className='h-14' src='/sq-profile.svg' alt='' />
                            <div className='flex flex-col items-center px-4'>
                                <h2 className='text-xl font-semibold text-center'>Mark John</h2>
                                <div className='flex justify-start items-center gap-[2px] '>
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                                    <h4 className='text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                                </div>
                            </div>
                        </div>
                        <img className='hidden md:block' src='/bar.svg' alt='bar' />
                        <p className='md:w-[300px] px-4 text-sm text-fikz-gray-light font-semibold'>I want to Cleaning my store I want to Cleaning my storeI want to Cleaning my store I want to Cleaning my store</p>
                    </div>
                    <div className='flex justify-start gap-4 lg:gap-10  '>
                        <div className='flex items-center gap-4 lg:gap-8'>
                            <img className='h-9' src='/reno.svg' alt='' />
                            <img className='h-9' src='/other.svg' alt='' />
                            <img className='h-9' src='/fire.svg' alt='' />
                        </div>
                        <img src='/bar.svg' alt='bar' />
                        <span className='flex flex-col justify-center items-center'>
                            <h4 className='text-lg font-semibold text-fikz-black'>Jul 28, 2021</h4>
                            <h4 className='text-lg font-semibold text-fikz-black'>10:00 AM</h4>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:justify-between bg-fikz-gray-light/20 p-2'>
                    <div className='flex  justify-start gap-2 md:gap-4 lg:gap-10'>
                        <div className='flex flex-col md:flex-row items-center'>
                            <img className='h-14' src='/sq-profile.svg' alt='' />
                            <div className='flex flex-col items-center px-4'>
                                <h2 className='text-xl font-semibold text-center'>Mark John</h2>
                                <div className='flex justify-start items-center gap-[2px] '>
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                                    <h4 className='text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                                </div>
                            </div>
                        </div>
                        <img className='hidden md:block' src='/bar.svg' alt='bar' />
                        <p className='md:w-[300px] px-4 text-sm text-fikz-gray-light font-semibold'>I want to Cleaning my store I want to Cleaning my storeI want to Cleaning my store I want to Cleaning my store</p>
                    </div>
                    <div className='flex justify-start gap-4 lg:gap-10  '>
                        <div className='flex items-center gap-4 lg:gap-8'>
                            <img className='h-9' src='/reno.svg' alt='' />
                            <img className='h-9' src='/other.svg' alt='' />
                            <img className='h-9' src='/fire.svg' alt='' />
                        </div>
                        <img src='/bar.svg' alt='bar' />
                        <span className='flex flex-col justify-center items-center'>
                            <h4 className='text-lg font-semibold text-fikz-black'>Jul 28, 2021</h4>
                            <h4 className='text-lg font-semibold text-fikz-black'>10:00 AM</h4>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:justify-between p-2'>
                    <div className='flex  justify-start gap-2 md:gap-4 lg:gap-10'>
                        <div className='flex flex-col md:flex-row items-center'>
                            <img className='h-14' src='/sq-profile.svg' alt='' />
                            <div className='flex flex-col items-center px-4'>
                                <h2 className='text-xl font-semibold text-center'>Mark John</h2>
                                <div className='flex justify-start items-center gap-[2px] '>
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                                    <h4 className='text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                                </div>
                            </div>
                        </div>
                        <img className='hidden md:block' src='/bar.svg' alt='bar' />
                        <p className='md:w-[300px] px-4 text-sm text-fikz-gray-light font-semibold'>I want to Cleaning my store I want to Cleaning my storeI want to Cleaning my store I want to Cleaning my store</p>
                    </div>
                    <div className='flex justify-start gap-4 lg:gap-10  '>
                        <div className='flex items-center gap-4 lg:gap-8'>
                            <img className='h-9' src='/reno.svg' alt='' />
                            <img className='h-9' src='/other.svg' alt='' />
                            <img className='h-9' src='/fire.svg' alt='' />
                        </div>
                        <img src='/bar.svg' alt='bar' />
                        <span className='flex flex-col justify-center items-center'>
                            <h4 className='text-lg font-semibold text-fikz-black'>Jul 28, 2021</h4>
                            <h4 className='text-lg font-semibold text-fikz-black'>10:00 AM</h4>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:justify-between bg-fikz-gray-light/20 p-2'>
                    <div className='flex  justify-start gap-2 md:gap-4 lg:gap-10'>
                        <div className='flex flex-col md:flex-row items-center'>
                            <img className='h-14' src='/sq-profile.svg' alt='' />
                            <div className='flex flex-col items-center px-4'>
                                <h2 className='text-xl font-semibold text-center'>Mark John</h2>
                                <div className='flex justify-start items-center gap-[2px] '>
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                                    <h4 className='text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                                </div>
                            </div>
                        </div>
                        <img className='hidden md:block' src='/bar.svg' alt='bar' />
                        <p className='md:w-[300px] px-4 text-sm text-fikz-gray-light font-semibold'>I want to Cleaning my store I want to Cleaning my storeI want to Cleaning my store I want to Cleaning my store</p>
                    </div>
                    <div className='flex justify-start gap-4 lg:gap-10  '>
                        <div className='flex items-center gap-4 lg:gap-8'>
                            <img className='h-9' src='/reno.svg' alt='' />
                            <img className='h-9' src='/other.svg' alt='' />
                            <img className='h-9' src='/fire.svg' alt='' />
                        </div>
                        <img src='/bar.svg' alt='bar' />
                        <span className='flex flex-col justify-center items-center'>
                            <h4 className='text-lg font-semibold text-fikz-black'>Jul 28, 2021</h4>
                            <h4 className='text-lg font-semibold text-fikz-black'>10:00 AM</h4>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:justify-between p-2'>
                    <div className='flex  justify-start gap-2 md:gap-4 lg:gap-10'>
                        <div className='flex flex-col md:flex-row items-center'>
                            <img className='h-14' src='/sq-profile.svg' alt='' />
                            <div className='flex flex-col items-center px-4'>
                                <h2 className='text-xl font-semibold text-center'>Mark John</h2>
                                <div className='flex justify-start items-center gap-[2px] '>
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                                    <h4 className='text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                                </div>
                            </div>
                        </div>
                        <img className='hidden md:block' src='/bar.svg' alt='bar' />
                        <p className='md:w-[300px] px-4 text-sm text-fikz-gray-light font-semibold'>I want to Cleaning my store I want to Cleaning my storeI want to Cleaning my store I want to Cleaning my store</p>
                    </div>
                    <div className='flex justify-start gap-4 lg:gap-10  '>
                        <div className='flex items-center gap-4 lg:gap-8'>
                            <img className='h-9' src='/reno.svg' alt='' />
                            <img className='h-9' src='/other.svg' alt='' />
                            <img className='h-9' src='/fire.svg' alt='' />
                        </div>
                        <img src='/bar.svg' alt='bar' />
                        <span className='flex flex-col justify-center items-center'>
                            <h4 className='text-lg font-semibold text-fikz-black'>Jul 28, 2021</h4>
                            <h4 className='text-lg font-semibold text-fikz-black'>10:00 AM</h4>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:justify-between bg-fikz-gray-light/20 p-2'>
                    <div className='flex  justify-start gap-2 md:gap-4 lg:gap-10'>
                        <div className='flex flex-col md:flex-row items-center'>
                            <img className='h-14' src='/sq-profile.svg' alt='' />
                            <div className='flex flex-col items-center px-4'>
                                <h2 className='text-xl font-semibold text-center'>Mark John</h2>
                                <div className='flex justify-start items-center gap-[2px] '>
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                                    <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                                    <h4 className='text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                                </div>
                            </div>
                        </div>
                        <img className='hidden md:block' src='/bar.svg' alt='bar' />
                        <p className='md:w-[300px] px-4 text-sm text-fikz-gray-light font-semibold'>I want to Cleaning my store I want to Cleaning my storeI want to Cleaning my store I want to Cleaning my store</p>
                    </div>
                    <div className='flex justify-start gap-4 lg:gap-10  '>
                        <div className='flex items-center gap-4 lg:gap-8'>
                            <img className='h-9' src='/reno.svg' alt='' />
                            <img className='h-9' src='/other.svg' alt='' />
                            <img className='h-9' src='/fire.svg' alt='' />
                        </div>
                        <img src='/bar.svg' alt='bar' />
                        <span className='flex flex-col justify-center items-center'>
                            <h4 className='text-lg font-semibold text-fikz-black'>Jul 28, 2021</h4>
                            <h4 className='text-lg font-semibold text-fikz-black'>10:00 AM</h4>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
