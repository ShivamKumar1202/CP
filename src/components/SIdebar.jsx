import { LucideHome, User, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <DesktopSidebar />
    <MobileSidebar />

    </>
  )
}

export default Sidebar;


const DesktopSidebar = () =>{
    return (
        <div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block'>
            <div className='flex flex-col sticky gap-20 top-10 left-0'>

                <div className='w-full'>
                    <img src='/centuryLogo.png' alt='logo' className='hidden md:block'/>
                    <img src='/centuryLogo.png' alt='mobile-logo' className='block md:hidden' />
                </div>
                <ul className='flex flex-col items-center md:items-start gap-8'>
                    <Link to={"/"} className="flex gap-1">
                    <LucideHome size={"24"} />
                    <span className='font-bold hidden md:block'>Machinery</span>
                    </Link>

                    <Link to={"/about"} className="flex gap-1">
                    <Building2 size={"24"} />
                    <span className='font-bold hidden md:block'>About Us</span>
                    </Link>

                </ul>

            </div>

        </div>
    );
}

const MobileSidebar = () => {
    return (
        <div className='flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden'>
                
                <Link to={'/'}>
                    <LucideHome size={"24"} className='cursor-pointer'/>
                </Link>
                
                <Link to={"/favourites"}>
                    <Building2 size={"24"} className='cursor-pointer'/>
                </Link>
                

        </div>
    );
}
