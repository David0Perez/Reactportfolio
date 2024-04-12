import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClcik={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            {
                nav ? (
                    <div className='fixed w-full h-sceen bg-white/99 flex flex-col justify-center items-cemter z-20'>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg ng-gray-100 shadow-gra'>
                            <AiOutLineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        </div>
                )
                :(
                    <div></div>
                )
            }
        </div>
    );
};

export default Sidenav