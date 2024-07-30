import { useState, useEffect } from 'react'
import { Search } from "lucide-react";
import MachineCard from '../components/MachineCard';
import MachineCard1 from '../components/MachineCard1';
import MachineCard2 from '../components/MachineCard2';
import MachineCard3 from '../components/MachineCard3';
import MachineCard4 from '../components/MachineCard4';
import MachineCard5 from '../components/MachineCard5';
import { getRandomColor } from '../lib/utils';

const APP_ID =  import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;


const HomePage = () => {
 // const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(true);
  
    setTimeout(()=>{ setLoading(false) }, 1500);
  
    const machines = [1,2,3,4,5,6];
  
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
                           
                            machines.slice(0,1).map(({ machine }, index) => (
                                <>
                                    <MachineCard  machine={machine} {...getRandomColor()} />
                                    <MachineCard1 machine={machine} {...getRandomColor()} />
                                    <MachineCard2 machine={machine} {...getRandomColor()} />
                                    <MachineCard3 machine={machine} {...getRandomColor()} />
                                    <MachineCard4 machine={machine} {...getRandomColor()} />
                                    <MachineCard5 machine={machine} {...getRandomColor()} />
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