import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
const PricingSection = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6  my-8 tracking-tight">
                Choose a plan that <span className="bg-gradient-to-r from-[#99ccff] to-[#155CCE] text-transparent bg-clip-text">{" "}Works for you </span>
                
            </h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700-rounded-xl">
                            <p className="text-4xl mb-8">
                                {option.title}
                                {option.title === "Pro" && <span className="bg-gradient-to-r from-[#99ccff] to-[#155CCE] text-transparent bg-clip-text text-xl mb ml-2">(Most Popular)</span>}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight">/Month</span>
                            </p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li key={index} className="flex items-center mt-8">
                                        <CheckCircle2 />
                                        <span className="text-neutral-500 ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-15 tracking-tight text-xl hover:bg-[#1494E2] border border-[#155CCE] 
                             rounded-lg transition duration-200">Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PricingSection;