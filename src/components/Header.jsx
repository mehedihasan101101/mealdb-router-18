import bannerImage from '../assets/bannerImage.png'
const Header = () => {
    return (
        <div className="hero bg-base-200 md:py-30 py-20">
            <div className=" flex flex-col justify-between container p-6 items-center lg:flex-row-reverse">
                <img
                    src={bannerImage}
                    className="max-w-sm rounded-lg"
                />
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className="text-5xl font-bold text-center">Bold Flavors. Fresh Vibes</h1>
                    <p className="py-6 text-center lg:text-start max-w-[800px]">
                        Welcome to your ultimate food discovery guide. Dive into the world of restaurant dishes — 
                        learn their origin, explore how they’re made, and understand the stories behind every bite. 
                        Whether you're a foodie, a home cook, or just curious, our platform brings you detailed descriptions,
                         cooking insights, and rich cultural backgrounds of popular dishes from around the world.
                    </p>
                    <button className="btn bg-[#ff9000]"><a href="#AllCategory">Read Now</a></button>
                </div>
            </div>
        </div>
    );
};

export default Header;