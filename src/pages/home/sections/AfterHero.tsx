import { Button } from "../../../assets/components/Button"
import { BsArrowRight, BsHeartFill } from "react-icons/bs"

import blur from "../../../assets/images/blur.png"
import { AboutText, Services } from "../../../assets/Constants"



export const AfterHero : React.FC =  () => {
    return(
        <>
            <section className="w-full center py-[20vh] overflow-hidden relative">
                <img src={blur} alt="" className="absolute z-[-1] bottom-0 -right- 36 rotate-180 scale-110"/>


                <div className="w-11/12 lg:w-10/12 center flex-col text-primary gap-6">
                    <h2 className="text-4xl font-bold text-center">
                        We offer
                    </h2>
                    <div className="text-center text-lg md:w-11/12 text-black3">
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-y-16 gap-[25px] w-full">
                        {
                            Services.map((service : any, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <div className="center h-[40vh] w-full overflow-hidden">
                                        <img src={service.img} alt={`Image for ${service.title}`} className="w-full"/>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-black2">{service.title}</h3>

                                        <BsHeartFill className="text-gray-500"/>
                                    </div>
                                    <Button 
                                        text="Read more"
                                        className="w-fit bg-primary text-white shadow-xl"
                                        navigateTo="services"
                                    />

                                </div>
                            ))
                        }   
                    </div>
                </div>



            </section>

            <section className="w-full center bg-primary py-[8vh]">
                <div className="w-11/12 lg:w-10/12 flex flex-col rounded-2xl p-6 lg:p-12 text-white gap-4">

                    <div className="flex flex-col gap-2">
                        {
                            AboutText.map((p, i) => (
                                <p key={i} className="">{p}</p>

                            ))
                        }
                    </div>

                    <div className="flex lg:justify-end w-full lg:pr-8">

                    <Button 
                        className="text-primary bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                        text="Contact Us" 
                        icon={<BsArrowRight className="ml-3 "/>}
                        navigateTo="/contact"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}