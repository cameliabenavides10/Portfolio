import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            
{/* container */}
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'> 
<p className='text-pink-600'>Hi, my name is</p>
<h1> Camelia Benavides</h1>
<h2> I am a Full Stack Developer.</h2>
<p>I do stuff</p> 
<div>
<button>View Work <HiArrowNarrowRight /> </button>
</div>
</div>

        </div>
    )
}

export default Home