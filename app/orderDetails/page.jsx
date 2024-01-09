import React from "react"

const page = () => {
    return (
        <section className='mx-auto max-w-[1440px] mt-2'>
            <h4 className='text-lg  text-fikz-black'>Cover Letter</h4>
            <hr className='h-[2px] w-full bg-fikz-gray-light/20 mb-3' />
            <div className='p-2 flex flex-col sm:flex-row bg-fikz-gray-light/20'>
                <img className='h-14' src='/sq-profile.svg' alt='' />
                <div className='flex flex-col items-center px-4'>
                    <h2 className='text-xl font-semibold text-center'>Mark John</h2>
                    <div className='flex justify-start items-center gap-[2px]'>
                        <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                        <h4 className='text-sm font-semibold text-fikz-gray-light'>(51)</h4>
                    </div>
                </div>
                <div className='flex justify-end items-center gap-2 sm:gap-8 flex-grow flex-col sm:flex-row'>
                    <h2 className='text-xl font-semibold'>DEC 18</h2>
                    <h2 className='text-xl font-semibold'>$100</h2>
                    <span className='text-sm text-white bg-red-500 font-semibold py-1 px-2 rounded-lg'>payment pending</span>
                </div>
            </div>
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
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 m-2'>
                <div className='shadow-md rounded-lg  p-4 bg-white'>
                    <h2 className='text-fikz-black font-semibold text-lg pb-2'>Summary</h2>
                    <p className='text-fikz-gray-light text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elzeeitsf xdd. Pellentesque amet enim volutpat maecenas nisl. Consectetaaur blandit eu id ornare turpis viverra arcu. Ornare ut erat pharestrris enim eget leo purus nec. Vitae neque risus interdum amet ac ull corper facilisi arcu, leo. Placerat est, quis tellus in et neque biben dum est dictum. Sed phasellus eget sed posuere sagittis, ornare. Mi et consectetur tellus augue risus ac vitae.
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <button className='mt-2 py-3 px-8 w-full max-w-[390px] mx-auto text-center border-2 bg-fikz-black text-white rounded-xl '>Submit</button>
                    <button className='text-fikz-black'>Cancel</button>
                </div>
            </div>
        </section>
    )
}

export default page
