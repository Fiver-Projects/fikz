import React from "react"

const page = () => {
    return (
        <section className=' mx-auto max-w-[1440px] w-full '>
            <div className='grid sm:grid-cols-[300px_1fr] sm:grid-rows-[70px_1fr] h-full '>
                <div className='py-4 pr-4 border flex justify-between'>
                    <select id='countries' className=' text-sm rounded-lg bg-inherit border-none outline-none text-fikz-black font-semibold'>
                        <option selected>All Conversations</option>
                        <option value='US'>United States</option>
                        <option value='CA'>Canada</option>
                        <option value='FR'>France</option>
                        <option value='DE'>Germany</option>
                    </select>
                    <button>
                        <img src='/search.svg' alt='search' />
                    </button>
                </div>
                <div className='border py-2 px-4 flex items-center justify-between'>
                    <span className=''>
                        <h2 className='font-semibold'>Mark John</h2>
                        <h4 className='text-fikz-gray-light text-sm'>Last seen: 18 minutes</h4>
                    </span>
                    <button>
                        <img src='/threedot.svg' alt='3dot' />
                    </button>
                </div>
                <div className='h-full '>
                    <ul className='h-[calc(100vh-80px-70px)] overflow-y-auto'>
                        <li className='flex justify-start items-center gap-2 px-4 py-3 border-l border-b bg-fikz-gray-light/20'>
                            <span className='relative'>
                                <img className='h-14' src='/profile.svg' alt='profile' />
                                <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                            </span>
                            <span>
                                <h2 className='font-semibold'>Mark John</h2>
                                <h4 className='text-fikz-gray-light text-sm'>Me: all your co...</h4>
                            </span>
                            <h4 className='text-fikz-gray-light text-[12px]'>18 minutes</h4>
                        </li>
                        <li className='flex justify-start items-center gap-2 px-4 py-3 border-l border-b'>
                            <span className='relative'>
                                <img className='h-14' src='/profile.svg' alt='profile' />
                                <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                            </span>
                            <span>
                                <h2 className='font-semibold'>Mark John</h2>
                                <h4 className='text-fikz-gray-light text-sm'>Me: all your co...</h4>
                            </span>
                            <h4 className='text-fikz-gray-light text-[12px]'>18 minutes</h4>
                        </li>
                        <li className='flex justify-start items-center gap-2 px-4 py-3 border-l border-b'>
                            <span className='relative'>
                                <img className='h-14' src='/profile.svg' alt='profile' />
                                <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                            </span>
                            <span>
                                <h2 className='font-semibold'>Mark John</h2>
                                <h4 className='text-fikz-gray-light text-sm'>Me: all your co...</h4>
                            </span>
                            <h4 className='text-fikz-gray-light text-[12px]'>18 minutes</h4>
                        </li>
                        <li className='flex justify-start items-center gap-2 px-4 py-3 border-l border-b'>
                            <span className='relative'>
                                <img className='h-14' src='/profile.svg' alt='profile' />
                                <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                            </span>
                            <span>
                                <h2 className='font-semibold'>Mark John</h2>
                                <h4 className='text-fikz-gray-light text-sm'>Me: all your co...</h4>
                            </span>
                            <h4 className='text-fikz-gray-light text-[12px]'>18 minutes</h4>
                        </li>
                        <li className='flex justify-start items-center gap-2 px-4 py-3 border-l border-b'>
                            <span className='relative'>
                                <img className='h-14' src='/profile.svg' alt='profile' />
                                <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                            </span>
                            <span>
                                <h2 className='font-semibold'>Mark John</h2>
                                <h4 className='text-fikz-gray-light text-sm'>Me: all your co...</h4>
                            </span>
                            <h4 className='text-fikz-gray-light text-[12px]'>18 minutes</h4>
                        </li>
                        <li className='flex justify-start items-center gap-2 px-4 py-3 border-l border-b'>
                            <span className='relative'>
                                <img className='h-14' src='/profile.svg' alt='profile' />
                                <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                            </span>
                            <span>
                                <h2 className='font-semibold'>Mark John</h2>
                                <h4 className='text-fikz-gray-light text-sm'>Me: all your co...</h4>
                            </span>
                            <h4 className='text-fikz-gray-light text-[12px]'>18 minutes</h4>
                        </li>
                        <li className='flex justify-start items-center gap-2 px-4 py-3 border-l border-b'>
                            <span className='relative'>
                                <img className='h-14' src='/profile.svg' alt='profile' />
                                <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                            </span>
                            <span>
                                <h2 className='font-semibold'>Mark John</h2>
                                <h4 className='text-fikz-gray-light text-sm'>Me: all your co...</h4>
                            </span>
                            <h4 className='text-fikz-gray-light text-[12px]'>18 minutes</h4>
                        </li>
                        <li className='flex justify-start items-center gap-2 px-4 py-3 border-l border-b'>
                            <span className='relative'>
                                <img className='h-14' src='/profile.svg' alt='profile' />
                                <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                            </span>
                            <span>
                                <h2 className='font-semibold'>Mark John</h2>
                                <h4 className='text-fikz-gray-light text-sm'>Me: all your co...</h4>
                            </span>
                            <h4 className='text-fikz-gray-light text-[12px]'>18 minutes</h4>
                        </li>
                        <li className='flex justify-start items-center gap-2 px-4 py-3 border-l border-b'>
                            <span className='relative'>
                                <img className='h-14' src='/profile.svg' alt='profile' />
                                <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                            </span>
                            <span>
                                <h2 className='font-semibold'>Mark John</h2>
                                <h4 className='text-fikz-gray-light text-sm'>Me: all your co...</h4>
                            </span>
                            <h4 className='text-fikz-gray-light text-[12px]'>18 minutes</h4>
                        </li>
                        <li className='flex justify-start items-center gap-2 px-4 py-3 border-l border-b'>
                            <span className='relative'>
                                <img className='h-14' src='/profile.svg' alt='profile' />
                                <img className='h-2 absolute bottom-0 right-2' src='/eclipse.svg' alt='eclipse' />
                            </span>
                            <span>
                                <h2 className='font-semibold'>Mark John</h2>
                                <h4 className='text-fikz-gray-light text-sm'>Me: all your co...</h4>
                            </span>
                            <h4 className='text-fikz-gray-light text-[12px]'>18 minutes</h4>
                        </li>
                    </ul>
                </div>
                <div className='bg-[url(/wap-bg.svg)]  flex flex-col h-full'>
                    <ul className='h-[calc(100vh-80px-70px-66px-56px)] overflow-y-auto flex-grow flex flex-col gap-2 p-2'>
                        <li className='relative w-fit'>
                            <img className='h-16' src='/white-bubble.svg' alt='white-bubble' />
                            <p className='text-fikz-black font-semibold text-sm absolute top-2 left-8 '>How are you Mark?</p>
                            <p className='text-fikz-gray-light text-[10px] absolute bottom-4 right-4'>11:48 PM</p>
                        </li>
                        <li className='relative w-fit self-end'>
                            <img className='h-16' src='/brown-bubble.svg' alt='white-bubble' />
                            <p className='text-white font-semibold text-sm absolute top-2 left-4'>How are you Mark?</p>
                            <p className='text-white text-[10px] absolute bottom-4 right-8'>11:48 PM</p>
                        </li>
                        <li className='relative w-fit'>
                            <img className='h-16' src='/white-bubble.svg' alt='white-bubble' />
                            <p className='text-fikz-black font-semibold text-sm absolute top-2 left-8 '>How are you Mark?</p>
                            <p className='text-fikz-gray-light text-[10px] absolute bottom-4 right-4'>11:48 PM</p>
                        </li>
                        <li className='relative w-fit self-end'>
                            <img className='h-16' src='/brown-bubble.svg' alt='white-bubble' />
                            <p className='text-white font-semibold text-sm absolute top-2 left-4'>How are you Mark?</p>
                            <p className='text-white text-[10px] absolute bottom-4 right-8'>11:48 PM</p>
                        </li>
                        <li className='relative w-fit'>
                            <img className='h-16' src='/white-bubble.svg' alt='white-bubble' />
                            <p className='text-fikz-black font-semibold text-sm absolute top-2 left-8 '>How are you Mark?</p>
                            <p className='text-fikz-gray-light text-[10px] absolute bottom-4 right-4'>11:48 PM</p>
                        </li>
                        <li className='relative w-fit self-end'>
                            <img className='h-16' src='/brown-bubble.svg' alt='white-bubble' />
                            <p className='text-white font-semibold text-sm absolute top-2 left-4'>How are you Mark?</p>
                            <p className='text-white text-[10px] absolute bottom-4 right-8'>11:48 PM</p>
                        </li>
                        <li className='relative w-fit'>
                            <img className='h-16' src='/white-bubble.svg' alt='white-bubble' />
                            <p className='text-fikz-black font-semibold text-sm absolute top-2 left-8 '>How are you Mark?</p>
                            <p className='text-fikz-gray-light text-[10px] absolute bottom-4 right-4'>11:48 PM</p>
                        </li>
                        <li className='relative w-fit self-end'>
                            <img className='h-16' src='/brown-bubble.svg' alt='white-bubble' />
                            <p className='text-white font-semibold text-sm absolute top-2 left-4'>How are you Mark?</p>
                            <p className='text-white text-[10px] absolute bottom-4 right-8'>11:48 PM</p>
                        </li>
                        <li className='relative w-fit'>
                            <img className='h-16' src='/white-bubble.svg' alt='white-bubble' />
                            <p className='text-fikz-black font-semibold text-sm absolute top-2 left-8 '>How are you Mark?</p>
                            <p className='text-fikz-gray-light text-[10px] absolute bottom-4 right-4'>11:48 PM</p>
                        </li>
                        <li className='relative w-fit self-end'>
                            <img className='h-16' src='/brown-bubble.svg' alt='white-bubble' />
                            <p className='text-white font-semibold text-sm absolute top-2 left-4'>How are you Mark?</p>
                            <p className='text-white text-[10px] absolute bottom-4 right-8'>11:48 PM</p>
                        </li>
                    </ul>
                    <span className='bg-white w-full'>
                        <form className='flex justify-start items-center gap-2 px-4 py-3 border border-fikz-gray-light/20'>
                            <input type='text' className='w-full py-2 outline-none appearance-none border-none' placeholder='Type a message...' />
                            <img className='h-6' src='/send.svg' alt='send' />
                        </form>
                        <span className='p-4 flex justify-start items-center gap-8'>
                            <img className='h-6' src='/bolt.svg' alt='bolt' />
                            <img className='h-6' src='/link.svg' alt='link' />
                            <h4 className='text-fikz-black font-semibold'>Create an Offer</h4>
                        </span>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default page
