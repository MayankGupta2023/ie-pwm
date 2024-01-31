import React from 'react'
import Navbar from '../components/navbar'
import DropdownButton from '../components/dropdown_button'

const Working = () => {
    return (
        <div>
            <div className='h-20 fixed l-0 t-0 w-full'>
                <Navbar />
            </div>

            <div className='h-screen  flex justify-center items-center'>



                <div className='h-2/3 bg-red-600 w-2/3 p-4 flex relative'>

                    <div className='absolute right-10 top-0'>
                        <button className='p-2 font-medium text-xl '>Upgrade</button>
                        <button className='p-2 ml-4 text-2xl'>&#9733;</button>
                    </div>

                    <div className='w-2/5 bg-yellow-400 pt-8'>

                        <div className='w-full h-fit gap-1 flex'>
                            <DropdownButton />
                            <DropdownButton />
                            <DropdownButton />

                        </div>

                        <div className='mt-8'>
                            <button className='px-4 py-2 bg-white rounded bg-blue-400 text-white '>Chapter-wise-notes</button>
                            <button className='px-4 py-2 bg-lime-500 rounded ml-2 text-white'>FAQ</button>
                        </div>

                        <div className='mt-8'>
                            <input className='w-full px-2 py-1 border-2 border-gray-400 rounded ' type="text" id="enterTopic" name="enterTopic" value='Enter topic or Notes'></input>
                        </div>

                        <button className='p-2 text-center text-white w-full bg-purple-500 mt-8 rounded-xl '>Get Topic-wise Notes</button>

                        <div className='mt-8'>
                            <input className='w-full px-2 py-1 border-2 border-gray-400 rounded ' type="text" id="ask" name="ask" value='Ask a question'></input>
                        </div>

                        <button className='p-2 text-center text-white w-full bg-red-500 mt-8 rounded-xl '>Submit Question</button>



                    </div>


                    <div className='w-3/5 bg-white p-8 '>
                        <div className='font-bold text-2xl'>Results</div>
                        <div className='mt-4'>Result will appear here based on your selections and queries.</div>



                    </div>


                </div>
            </div>



        </div>
    )
}

export default Working
