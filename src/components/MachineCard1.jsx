import { Soup,Heart, HeartPulse } from 'lucide-react'
import { useState } from 'react';


function MachineCard1({machine, bg, badge}) {

    return (
    <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
        <a href="#" className='relative h-50'>
           
           <div className='skeleton absolute inset-0' />    {/* Display a skeleton in case of slow loading*/}
            <img src='/boiler.png' alt="machine image"
                className='rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500'
                onLoad={(e) => {
                    e.currentTarget.style.opacity = 1;      // show the image once it loads
                    e.currentTarget.previousElementSibling.style.display = "none";  // remove the skeleton
                }}
            />

        </a>

        <div className='flex mt-1'>
            <p className='font-bold tracking-wide'> Thermic Fluid Heater </p>
        </div>
        <div className='flex mt-1'>
            <p className='font-bold tracking-wide'> Efficiency </p>
        </div>
        <div className='flex mt-1'>
            <p className='font-bold tracking-wide'> Energy Consumption </p>
        </div>
      
        <p className='my-2'>
            M1
        </p>

        <div className='flex gap-2 mt-auto'>

            <div className={`flex gp-1 ${badge} items-center p-1 rounded-md`}>
                {/* <HeartPulse size={"16"} /> */}
                <span className='text-sm tracking-tighter font-semibold'>
                  Active
                </span>
            </div>
    
        </div>

    </div>
  )
}

export default MachineCard1