import React from 'react'
import nuke from "./assets/nuke.jpg";
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="bg-gradient-to-br bg-stone-300 flex justify-center items-center w-full h-screen ">

      <div className="rounded-md overflow-hidden">
        <div className="bg-white h-1/2 relative p-5 ">
          <div className="">
            <img src={nuke} className="w-128 md:w-96 " />

            <div className="text-xl p-2 font-seimifold">cheap<strong> NUKE</strong>
            <div className="text-s font-seimifold">The thing that Trump like alot</div>
              <div className="text-md font-seimifold mt-2"><strong>$1000000</strong>
                <div>
                  <div className='flex '>
                    {Array(5)
                      .fill(0)
                      .map(() => (
                        <div>
                          <Icon
                            icon="eva:star-fill"
                            className="text-yellow-300 w-4 h-4 mt-1 ">

                          </Icon>

                        </div>
                      ))}
                    <div className='-mt-1 text-s'> (1)</div>



                    <div className='flex '></div>
                  </div>
                  <div className='flex flex-col mt-5  gap-2'>
                    <div className='p-2  hover:animate-pulse transition-all bottom hover:scale-110 border-red-600 bg-gray-400 text-red-600 '>
                      The Atomic Bomb
                    </div>
                    <div className='p-2  hover:animate-pulse transition-all bottom hover:scale-110 border-red-600 bg-gray-400 text-red-600'>
                      Dirty Bombs
                    </div>
                    <div className='p-2 hover:animate-pulse transition-all bottom hover:scale-110 border-red-600  bg-gray-400 text-red-600'>
                      Thermonuclear Weapons
                    </div>
                  
                  
                  <a
                  
                  className='p-2 rounded-md hover:animate-pulse mt-5 transition-all bottom hover:scale-110 border-sky-300 bottom bg-gray-600' href="https://www.youtube.com/watch?v=E5JPbpzZH-4">
                    Add To Cart 
                    
                  </a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className='p-2 md:p-3 rounded-xl absolute right-3 top-3 w-min bg-stone-300' >
        <Icon className="w-5 h-6 md:w-7 h-7" icon="fa-solid:cart-arrow-down" />
      </div>
      
      <a
      className="p-4 md:text-md bottom-3 font-seimifold absolute "><strong>Think before you buy. Why would you need such a thing? Drink some hot water and everything is going to be ok. </strong></a>


      </div>
    








  )
}

export default App