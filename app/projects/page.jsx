import React from "react"

const page = () => {
    return (
        <section className='mx-auto max-w-[1440px]'>
            <h4 className='text-lg  text-fikz-black'>Manage Orders</h4>
            <hr className='h-[2px] w-full bg-fikz-gray-light/20 my-3' />
            <div className='flex flex-col'>
                <div className=' flex flex-col gap-2'>
                    <div className='flex justify-start items-center p-2 bg-fikz-gray-light/20'>
                        <h2 className='text-fikz-gray-light w-[23%]'>REPAIR MAN</h2>
                        <h2 className='text-fikz-gray-light w-[27%]'>SERVICES</h2>
                        <h2 className='text-fikz-gray-light w-[13%]'>CITY</h2>
                        <h2 className='text-fikz-gray-light w-[13%]'>DUE ON</h2>
                        <h2 className='text-fikz-gray-light w-[13%]'>TOTAL</h2>
                        <h2 className='text-fikz-gray-light'>STATUS</h2>
                    </div>
                    {/* Project 1 */}
                    <div className='flex justify-between items-center p-2'>
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
                        <div className='flex justify-start items-center gap-2 flex-wrap'>
                            <img className='h-6 sm:h-8 lg:h-11' src='/garage.svg' alt='garage' />
                            <img className='h-6 sm:h-8 lg:h-11' src='/shower.svg' alt='shower' />
                            <img className='h-6 sm:h-8 lg:h-11' src='/planes.svg' alt='planes' />
                            <img className='h-6 sm:h-8 lg:h-11' src='/cube.svg' alt='cube' />
                            <img className='h-6 sm:h-8 lg:h-11' src='/bed.svg' alt='bed' />
                        </div>
                        <h4 className='text-sm md:text-lg font-semibold'>Lahore</h4>
                        <h4 className='text-sm md:text-lg font-semibold'>DEC 18</h4>
                        <h4 className='text-sm md:text-lg font-semibold'>$100</h4>
                        <span className='bg-blue-600 px-2 py-2 text-sm text-white h-fit rounded-lg text-center w-full max-w-[170px]'>Accepted</span>
                    </div>
                    {/* Project 2 */}
                    <div className='flex justify-between items-center p-2'>
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
                        <div className='flex justify-start items-center gap-2 flex-wrap'>
                            <img className='h-6 sm:h-8 lg:h-11' src='/garage.svg' alt='garage' />
                            <img className='h-6 sm:h-8 lg:h-11' src='/shower.svg' alt='shower' />
                            <img className='h-6 sm:h-8 lg:h-11' src='/planes.svg' alt='planes' />
                            <img className='h-6 sm:h-8 lg:h-11' src='/cube.svg' alt='cube' />
                            <img className='h-6 sm:h-8 lg:h-11' src='/bed.svg' alt='bed' />
                        </div>
                        <h4 className='text-sm md:text-lg font-semibold'>Lahore</h4>
                        <h4 className='text-sm md:text-lg font-semibold'>DEC 18</h4>
                        <h4 className='text-sm md:text-lg font-semibold'>$100</h4>
                        <span className='bg-red-500 px-4 py-2 text-sm text-white h-fit rounded-lg text-center w-full max-w-[170px]'>payment pending</span>
                    </div>
                </div>
                {/* Project 3 */}
                <div className='flex justify-between items-center p-2'>
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
                    <div className='flex justify-start items-center gap-2 flex-wrap'>
                        <img className='h-6 sm:h-8 lg:h-11' src='/garage.svg' alt='garage' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/shower.svg' alt='shower' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/planes.svg' alt='planes' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/cube.svg' alt='cube' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/bed.svg' alt='bed' />
                    </div>
                    <h4 className='text-sm md:text-lg font-semibold'>Lahore</h4>
                    <h4 className='text-sm md:text-lg font-semibold'>DEC 18</h4>
                    <h4 className='text-sm md:text-lg font-semibold'>$100</h4>
                    <span className='bg-yellow-500 px-4 py-2 text-sm text-white h-fit rounded-lg text-center w-full max-w-[170px]'>in progress</span>
                </div>
                {/* Project 4 */}
                <div className='flex justify-between items-center p-2'>
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
                    <div className='flex justify-start items-center gap-2 flex-wrap'>
                        <img className='h-6 sm:h-8 lg:h-11' src='/garage.svg' alt='garage' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/shower.svg' alt='shower' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/planes.svg' alt='planes' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/cube.svg' alt='cube' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/bed.svg' alt='bed' />
                    </div>
                    <h4 className='text-sm md:text-lg font-semibold'>Lahore</h4>
                    <h4 className='text-sm md:text-lg font-semibold'>DEC 18</h4>
                    <h4 className='text-sm md:text-lg font-semibold'>$100</h4>
                    <span className='bg-red-500 px-4 py-2 text-sm text-white h-fit rounded-lg text-center w-full max-w-[170px]'>payment pending</span>
                </div>
                {/* Project 5 */}
                <div className='flex justify-between items-center p-2'>
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
                    <div className='flex justify-start items-center gap-2 flex-wrap'>
                        <img className='h-6 sm:h-8 lg:h-11' src='/garage.svg' alt='garage' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/shower.svg' alt='shower' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/planes.svg' alt='planes' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/cube.svg' alt='cube' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/bed.svg' alt='bed' />
                    </div>
                    <h4 className='text-sm md:text-lg font-semibold'>Lahore</h4>
                    <h4 className='text-sm md:text-lg font-semibold'>DEC 18</h4>
                    <h4 className='text-sm md:text-lg font-semibold'>$100</h4>
                    <span className='bg-green-500 px-4 py-2 text-sm text-white h-fit rounded-lg text-center w-full max-w-[170px]'>Completed</span>
                </div>
            </div>
        </section>
    )
}

export default page
