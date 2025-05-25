import { Outlet } from "react-router";
import Category from "./Category";
import Header from "./Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Category></Category>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;