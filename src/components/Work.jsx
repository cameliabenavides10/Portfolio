import React from 'react'
import PintPlanner from '../assets/pintplanner8888.png'
import BetterReads from '../assets/betterreads.png'
import TechBlog from '../assets/techblog.png'
import Node from '../assets/nodeteamplanner.png'
import Git from '../assets/gityourlifetogether.png'
import Weather from '../assets/weatherApp.png'
const Work = () => {
    return (
        <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>
                {/* grid container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* card item */}
                    <div style={{ backgroundImage: `url(${PintPlanner})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Pint Planner
                            </span>
                            <div className='pt-8 text-center'>
                                < a href='https://cameliabenavides10.github.io/pintplanner/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo </button>
                                </a>
                                < a href='https://github.com/cameliabenavides10/pintplanner'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
{/* second work item */}
                    <div style={{ backgroundImage: `url(${BetterReads})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Better Reads
                            </span>
                            <div className='pt-8 text-center'>
                                < a href='https://better-reads10.herokuapp.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo </button>
                                </a>
                                < a href='https://github.com/cameliabenavides10/books-app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* third work item */}
                    <div style={{ backgroundImage: `url(${TechBlog})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                               Tech Blog
                            </span>
                            <div className='pt-8 text-center'>
                                < a href='https://techblog1002.herokuapp.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo </button>
                                </a>
                                < a href='https://github.com/cameliabenavides10/techblog'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* fourth work item */}
                    <div style={{ backgroundImage: `url(${Node})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Employee Node Tracker
                            </span>
                            <div className='pt-8 text-center'>
                                < a href='https://github.com/cameliabenavides10/EmployeeTracker'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo </button>
                                </a>
                                < a href='https://github.com/cameliabenavides10/EmployeeTracker'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* fifth work item */}
                    <div style={{ backgroundImage: `url(${Git})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Git Your Life Together
                            </span>
                            <div className='pt-8 text-center'>
                                < a href='https://git-your-life-together.herokuapp.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo </button>
                                </a>
                                < a href='https://github.com/cameliabenavides10/Git-your-life-together-'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

 {/* sixth work item */}
 <div style={{ backgroundImage: `url(${Weather})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather App
                            </span>
                            <div className='pt-8 text-center'>
                                < a href='https://cameliabenavides10.github.io/weatherapp/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo </button>
                                </a>
                                < a href='https://github.com/cameliabenavides10/weatherapp'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}


export default Work