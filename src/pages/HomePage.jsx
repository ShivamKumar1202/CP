import { useState, useEffect } from 'react'
import MachineCard from '../components/MachineCard';
import { getRandomColor } from '../lib/utils';

const HomePage = () => {
 // const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(true);
  
    setTimeout(()=>{ setLoading(false) }, 1500);
  
    const machines = [
        {
            image : '/core-composer.jpg',
            name : 'Core Composer',
            efficiency : '85',
            consumption : '100'
        },
        
        {
            image : '/boiler.png',
            name : 'Thermic Fluid Heater',
            efficiency : '85',
            consumption : '100'
        },
        {
            image : '/cold press.jpg',
            name : 'Cold Press',
            efficiency : '85',
            consumption : '100'
        },
        {
            image : '/dryer.png',
            name : 'Dryer',
            efficiency : '85',
            consumption : '100'
        },
        {
            image : '/glue spreader.webp',
            name : 'Glue Spreader',
            efficiency : '85',
            consumption : '100'
        },
        {
            image : '/hot press.jpg',
            name : 'Core Composer',
            efficiency : '85',
            consumption : '100'
        },
        
    ];
  
  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>  
    {/* flex-1 makes it so that the homepage occupies all the remaining width after sidebar, sdebar has fixed with */}
        <div className='max-w-screen-lg mx-auto'>   

            <h1 className='font-bold text-3xl md:text-5xl mt-4'>
                Machinery
            </h1>
            <br/>
            <br/>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{loading ? 
						(
                            [...Array(9)].map((_, index) => (
                                <div key={index} className='flex flex-col gap-4 w-full'>
                                    <div className='skeleton h-32 w-full'></div>
                                    <div className='flex justify-between'>
                                        <div className='skeleton h-4 w-28'></div>
                                        <div className='skeleton h-4 w-24'></div>
                                    </div>
                                    <div className='skeleton h-4 w-1/2'></div>
                                </div>
                            ))

                    ) : (
                           
                            machines.map((machine , index) => (
                                <>
                                    <MachineCard key={index} machine={machine} {...getRandomColor()} />
                                   
                                </>
                            ))
                        )
                    }
				</div>
			</div>
		</div>  
    );
       
}

export default HomePage


// WBS, calibrator, labelling, peeling, DD saw, seasoning chamber
// remove glue spreader