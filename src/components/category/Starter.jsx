import { useLoaderData } from "react-router";
import ItemCard from "./ItemCard";

const Starter = () => {
    const { meals } = useLoaderData();
    return (
        <>
            <div className=" container mt-5 m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {meals.map(meal => <ItemCard key={meal.idMeal} meal={meal}></ItemCard>)}

            </div>

        </>
    );
};

export default Starter;