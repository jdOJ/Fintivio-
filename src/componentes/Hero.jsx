import video3 from '../assets/video3.mp4';
import dimensions from "../assets/dimensions.jpg";

const Hero = () => {
    return (
        <div className=" mt-0 flex flex-col items-center text-white lg: bg-gradient-to-r from-[#99ccff] to-[#155CCE] p-10 ">
            <h1 className=" pt-8 text-4xl sm:text-6xl lg:text-7xl text-center tracking-tight">
                Revolutionizing Wealth Management for the Modern World
               
            </h1>
            <p className="mt-10 text-lg text-center text-white max-w-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, porro minima vitae, nulla ratione in aperiam inventore soluta ad sint voluptas voluptate voluptatibus accusamus suscipit doloribus sunt, deleniti esse quae.
            </p>

            <div className="flex justify-center my-10">
                <a href="#" className="hover:bg-[#1494E2] border border-white py-3 px-4 mx-3 rounded-md transition duration-200">
                    Start for free
                </a>
                <a href="#" className="hover:bg-[#1494E2] border border-white py-3 px-4 mx-3 rounded-md transition duration-200">
                    Documentation
                </a>
            </div>

            {/* Contenedor del video y la imagen */}
            <div className="flex flex-col lg:flex-row mt-10 justify-center w-full px-4">
                {/* Video */}
                <div className="w-full lg:w-1/2 lg:mx-2 my-2">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-lg w-full h-64 object-cover border-[#061027] shadow-blue-500"
                    >
                        <source src={video3} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Imagen */}
                <div className="w-full lg:w-1/2 lg:mx-2 my-2">
                    <img
                        className="rounded-lg w-full h-64 object-cover"
                        src={dimensions}
                        alt="Code"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;