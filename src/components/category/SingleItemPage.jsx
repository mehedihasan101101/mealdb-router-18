import { useLoaderData } from "react-router";


const SingleItemPage = () => {
    const itemDetalis = useLoaderData();
    const { strMeal, strMealThumb, strInstructions, strArea, strCategory, strIngredient1,
        strIngredient2, strIngredient3, strIngredient4, strIngredient5,
        strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5 } = itemDetalis.meals[0]


    return (
        <div className="container m-auto lg:flex gap-5 p-5 mt-10 lg:pb-30">
            <div className="lg:w-2/4">
                <img className="rounded-xl lg:w-full lg:h-[500px]" src={strMealThumb} alt="" />
            </div>
            <div className="lg:w-3/4 space-y-5">
                <h1 className="md:text-4xl text-2xl font-bold">{strMeal}</h1>
                <p className="ml-3 text-justify text-[17px] ">{strInstructions}</p>
                <div>
                    <h5><span className="font-bold text-[17px] " >Origin:</span> {strArea} </h5>
                    <h5><span className="font-bold text-[17px] " >Category:</span> {strCategory} </h5>
                </div>
                <div className="flex gap-20">
                    <div className="">
                        <h4 className="font-bold text-[20px]">Ingredients:</h4>


                        <h5><span className="font-bold text-[17px] " >1.</span> {strIngredient1} </h5>
                        <h5><span className="font-bold text-[17px] " >2.</span> {strIngredient2} </h5>
                        <h5><span className="font-bold text-[17px] " >3.</span> {strIngredient3} </h5>
                        <h5><span className="font-bold text-[17px] " >4.</span> {strIngredient4} </h5>
                        <h5><span className="font-bold text-[17px] " >5.</span> {strIngredient5} </h5>
                    </div>
                    <div>
                        <h4 className="font-bold text-[20px]">Measures:</h4>
                        <h5><span className="font-bold text-[17px] " >1.</span> {strMeasure1} </h5>
                        <h5><span className="font-bold text-[17px] " >2.</span> {strMeasure2} </h5>
                        <h5><span className="font-bold text-[17px] " >3.</span> {strMeasure3} </h5>
                        <h5><span className="font-bold text-[17px] " >4.</span> {strMeasure4} </h5>
                        <h5><span className="font-bold text-[17px] " >5.</span> {strMeasure5} </h5>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default SingleItemPage;