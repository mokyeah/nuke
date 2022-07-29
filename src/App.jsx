import React from 'react'
import nuke from "./assets/nuke.jpg";
import donald from "./assets/donald.jpg";
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="bg-gradient-to-br from-green-300 flex justify-center items-center w-full h-screen ">
      
      <div className="rounded-xl overflow-hidden">
      <div className="bg-white relative p-5 ">
        <div className="flex">
          <img src={nuke} className="w-64 md:w-96 " />
          
            <div className="text-md p-2 font-seimifold">cheap<strong> NUKE</strong>
            <div className="text-md font-seimifold"><strong>$1000000</strong>
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
                    <div className='ml-2'><strong>(1)</strong></div>
                    
                    
                    
                    <div className='flex '></div>    
                </div>
                
                <div className='p-2 rounded-xl hover:animate-pulse transition-all bottom hover:border-2 border-red-600 bg-red-700  '>
                The Atomic Bomb
                </div>
                <div className='p-2 rounded-xl hover:animate-pulse transition-all bottom hover:border-2 border-red-600 bg-orange-600 '>
                Dirty Bombs
                </div>
                <div className='p-2 rounded-xl hover:animate-pulse transition-all bottom hover:border-2 border-red-600 bottom bg-red-300 '>
                Thermonuclear Weapons
                </div>
                <div className='p-2 rounded-xl  right-1 bottom-3 w-min bg-sky-300 hover:animate-bounce hover:border-2 border-sky-500 transition-all'>
                <Icon className="w-5 h-6 md:w-6 h-6" icon="fa-solid:cart-arrow-down" />
                </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      
      <div className="bg-red relative p-5 ">
    
        <img src={donald} className="w-32 bottom flex"></img>
        <div className='flex'>
          Trump: This Thing is Nice, I love it.
          </div>    
          
      
        
            
     </div>       


</div>
    


  )
}

export default App