import React from 'react';

const ItemCard = ({ meal }) => {
    return (

        <div key={meal.idMeal} className=" p-5 space-y-5 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <img className='rounded-xl h-[300px]  w-full'  src={meal.strMealThumb} alt="" />
            <h1 className='font-bold text-xl '>{meal.strMeal}</h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus laudantium tempora nesciunt!</p>
            <button className="btn  bg-[#ff9000] ">Choose</button>
        </div>

    );
};

export default ItemCard;