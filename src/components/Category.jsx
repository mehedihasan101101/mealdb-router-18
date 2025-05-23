import { MdOutlineFoodBank } from "react-icons/md";
import { GiFlatfish, GiCarrot ,GiNoodles } from "react-icons/gi";
import { PiBowlFood } from "react-icons/pi";




import { NavLink } from 'react-router';


const Category = () => {
    return (
        <div className=' container m-auto space-y-5'>
            <h1 className='text-center text-5xl mt-8 font-bold'>Categories</h1>
            <div className='grid md:grid-cols-6 grid-cols-3 items-center justify-between'>
                <button className='btn'>
                    <NavLink>
                        <div className=" gap-1 flex items-center justify-center">
                            <MdOutlineFoodBank className=" mb-1 text- text-3xl " />Starter
                        </div>
                    </NavLink>
                </button>
                <button className='btn'>
                    <NavLink>
                        <div className=" gap-1 flex items-center justify-center">
                            <GiFlatfish className="text-[#ff9000] text-3xl " />Seafood
                        </div>
                    </NavLink>
                </button>
                <button className='btn'>
                    <NavLink>
                        <div className=" flex items-center justify-center">
                            <GiCarrot className=" text-[#4CAF50] text-3xl " />Vegetarian
                        </div>
                    </NavLink>
                </button>
                <button className='btn'>
                    <NavLink>
                        <div className=" flex items-center justify-center">
                            <PiBowlFood className="text-[#808000] text-3xl " />Side
                        </div>
                    </NavLink>
                </button>
                <button className='btn'>
                    <NavLink>
                        <div className=" flex items-center justify-center">
                            <GiNoodles className=" mb-1 text-[#D4A017] text-3xl " />Pasta
                        </div>
                    </NavLink>
                </button>
                <button className='btn'>
                    <NavLink>
                        <div className=" flex items-center justify-center">
                            <MdOutlineFoodBank className=" mb-1 text-[#8B4513] text-3xl " />Dessert
                        </div>
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default Category;