import React from "react"

const page = () => {
    return (
        <section className='w-full max-w-[1280px] mx-auto p-4'>
            <div className='flex flex-col md:flex-row justify-start md:justify-between gap-5 md:gap-0 items-center border-b-2 border-fikz-gray-light/30 py-3'>
                <div className='flex justify-start items-center gap-4 md:gap-20'>
                    <button className='flex items-center gap-4'>
                        <span className='h-8 w-8 font-semibold rounded-full border-2 border-fikz-black text-center flex justify-center items-center'>1</span>
                        <span className='font-bold text-fikz-black'>Business Info</span>
                    </button>
                    <button className='flex items-center gap-4'>
                        <span className='h-8 w-8 font-semibold rounded-full border-2 border-fikz-black text-center flex justify-center items-center'>2</span>
                        <span className='font-bold text-fikz-gray-light'>Payment Info</span>
                    </button>
                    <button className='flex items-center gap-4'>
                        <span className='h-8 w-8 font-semibold rounded-full border-2 border-fikz-black text-center flex justify-center items-center'>3</span>
                        <span className='font-bold text-fikz-gray-light'>Skills & Documents</span>
                    </button>
                </div>
                <div className='flex flex-col gap-3'>
                    <h4 className='text-lg font-bold text-fikz-black'>Completion info: 30%</h4>
                    <div className='h-3 w-48 bg-fikz-gray-light rounded-lg relative'>
                        <div className='h-full w-1/3 bg-fikz-black rounded-lg absolute top-0 left-0 z-10'></div>
                    </div>
                </div>
            </div>
            <div className='pt-10 pb-6 w-full max-w-4xl mx-auto border-b border-fikz-gray-light/20'>
                <h1 className='text-3xl font-bold py-3'>Business Info</h1>
                <div className='flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center text-fikz-gray-light'>
                    <p className=' text-sm w-full md:w-2/3'>Tell us a bit about yourself. this information will appear on your public profile, so that potential buyers can get to know your better.</p>
                    <span className='text-[12px] italic'>*Mandatory fields</span>
                </div>
            </div>
            <div className='w-full py-5 max-w-4xl mx-auto'>
                <div className='col-span-3 flex flex-col gap-5 px-28'>
                    <div className='flex flex-col gap-4'>
                        <label className='text-lg'>
                            <span>Business Email</span>
                        </label>
                        <input className='py-3 px-6 rounded-xl w-full bg-fikz-bg' type='text' placeholder='Email' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='text-lg'>
                            <span>Work Phone</span>
                        </label>
                        <input className='py-3 px-6 rounded-xl w-full bg-fikz-bg appearance-none' type='number' placeholder='Work Phone' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='text-lg'>
                            <span>Business Name</span>
                        </label>
                        <input className='py-3 px-6 rounded-xl w-full bg-fikz-bg' type='text' placeholder='Business Name' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='text-lg'>
                            <span>EIN</span>
                        </label>
                        <input className='py-3 px-6 rounded-xl w-full bg-fikz-bg' type='text' placeholder='EIN' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
