import React from 'react'
import PopullarMovie from './PopullarMovie'

export default function MovieContainer() {
    return (
        <div className='bg-gray-900 px-4'>
            <h1 className='lg:text-3xl md:text-2xl pb-3 text-gray-300 font-semibold'>Discovers</h1>
            <div className='flex items-center justify-evenly'>
                <div>
                    <img src='https://www.joblo.com/wp-content/uploads/2021/06/The-Green-Knight-coming-soon-913.jpg'
                     width={350} height={250} className='rounded-lg ' />
                </div>
                <div>
                    <img src='https://movieposters2.com/images/1590159-b.jpg'
                    width={300} height={250} className='rounded-lg' />
                </div>
            </div>
            <PopullarMovie />
        </div>
    )
}
