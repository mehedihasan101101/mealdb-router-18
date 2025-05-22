import { NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
export default function Nav() {
    const [hasShadow, setHasShadow] = useState(false);
    useEffect(() => {
        function controlNav() {
            setHasShadow(window.scrollY > 10)
        }
        window.addEventListener('scroll', controlNav)

        return () => window.removeEventListener('scroll', controlNav);
    }, [])
    return (
        <>
            <div className={`navbar sticky top-0 z-50  lg:h-23 bg-base-100 ${hasShadow ? "shadow" : ""}`}>
                <div className="flex container mx-auto items-center">
                    <div className="flex-1 flex items-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><NavLink to={"/mealdb-router-18"}>Home</NavLink></li>
                                <li><NavLink to={"about"}>AboutUs</NavLink></li>
                                <li><NavLink>News</NavLink></li>
                                <li><NavLink>Schedules</NavLink></li>
                            </ul>
                        </div>
                        <NavLink className="text-xl" href=''><img src={logo} className='lg:w-[110.16px] w-[75px]' alt="" /></NavLink>
                    </div>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[#5a5a5a] text-[16px] gap-8">
                            <li><NavLink to={"/mealdb-router-18"}>Home</NavLink></li>
                            <li><NavLink to={"about"}>AboutUs</NavLink></li>
                            <li><NavLink>News</NavLink></li>
                            <li><NavLink>Schedules</NavLink></li>
                        </ul>
                    </div>
                    <button className="btn  bg-[#ff9000]">Book Now</button>
                </div>

            </div>
        </>
    )
}