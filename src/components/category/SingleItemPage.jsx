import { useLoaderData } from "react-router";


const SingleItemPage = () => {
    const itemDetalis = useLoaderData();
    const {idMeal} = itemDetalis.meals[0]
   console.log(idMeal)
     
    return (
        <div>
            <h1>hi I am single page</h1>
        </div>
    );
};

export default SingleItemPage;