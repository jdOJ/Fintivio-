import { CheckCircle2 } from "lucide-react";
import archivo1 from "../assets/archivo1.jpg";
import { checklistItems } from "../constants";

const WorkFlow = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 my-8 tracking-tight">
                Accelerate your coding  <span className="bg-gradient-to-r from-[#99ccff] to-[#155CCE] text-transparent bg-clip-text">{" "}Workflow.  </span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2">
                    <img className="rounded-2xl" src={archivo1} alt="Code" />
                </div>
                <div className="pt-2 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="text-[#99ccff] bg-[#155CCE] mx-6 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default WorkFlow;