import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import logos from '../assets/logo/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [active, setActive] = useState(1);

    const handleNav = () => setNav(!nav);

    const navItems = [
        {id: 1, text: 'Home'},
        {id: 2, text: 'Company'},
        {id: 3, text: 'Resources'},
        {id: 4, text: 'About'},
    ];

    return (
        <div className='bg-darkBlue/90 w-full sticky top-0 shadow-md shadow-bgDarkBlue px-4 py-3 text-white z-[1000]'>
            <div className={'max-w-[1000px] flex justify-between items-center mx-auto'}>
                <a className={'w-full'}>
                    <img src={logos} alt="qr logos" className={'h-14 hover:cursor-pointer'} onClick={() => {
                        window.location.reload()
                    }}/>
                </a>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={`${active === item.id ? 'bg-[#00df9a] text-bgDarkBlue' : ''} px-4 py-2 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-bgDarkBlue`}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[70%] sm:w-[60%] h-full border-r border-r-gray-900 bg-bgDarkBlue ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <a className={'w-full'}>
                        <img src={logos} alt="qr logos" className={'m-4 mb-10 h-14 hover:cursor-pointer'} onClick={() => {
                            window.location.reload()
                        }}/>
                    </a>

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li
                            onClick={() => setActive(item.id)}
                            key={item.id}
                            className={`${active === item.id ? 'bg-[#00df9a] text-bgDarkBlue' : ''} p-4 my-3 mx-2 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-bgDarkBlue cursor-pointer border-gray-600`}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;