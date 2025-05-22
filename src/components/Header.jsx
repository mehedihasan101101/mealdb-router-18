import bannerImage from '../assets/bannerImage.png'
const Header = () => {
    return (
        <div className="hero bg-base-200 py-30">
            <div className=" flex flex-col justify-between container p-6 items-center lg:flex-row-reverse">
                <img
                    src={bannerImage}
                    className="max-w-sm rounded-lg"
                />
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className="text-5xl font-bold text-center">Bold Flavors. Fresh Vibes</h1>
                    <p className="py-6 text-center lg:text-start max-w-[800px]">
                        Our dishes blend timeless recipes with bold, modern flavors—crafted from fresh ingredients and creative passion. 
                        Whether you're grabbing a bite or settling in with friends, enjoy a relaxed atmosphere, stylish decor, and food that
                         brings people together.


                    </p>
                    <button className="btn bg-[#ff9000]">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Header;