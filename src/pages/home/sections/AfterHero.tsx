import { Button } from "../../../assets/components/Button"
import { BsArrowRight } from "react-icons/bs"

import blur from "../../../assets/images/blur.png"
import { AboutUs, ServicesContent } from "../../../assets/Constants"
import { FaBaby, FaCheckCircle, FaHandsHelping } from "react-icons/fa"


export const AfterHero : React.FC =  () => {
    const AfterHeroContent = [
        {
          title: "Quality and Reliability",
          desc: "Advanced technology and expert staff for fast, accurate results",
          icon: <FaCheckCircle />
        },
        {
          title: "Comprehensive Preventive Care",
          desc: "Wide range of services to support proactive health management.",
          icon: <FaBaby />
        },
        {
          title: "Comprehensive Preventive Care",
          desc: "Professional, caring environment focused on patient satisfaction",
          icon: <FaHandsHelping  />
        },
      ]

    return(
        <>
            <section className="w-full center py-[20vh] overflow-hidden relative bg-bg">
                <img src={blur} alt="" className="absolute z-[-1] bottom-0 -right- 36 rotate-180 scale-110"/>


                <div className="w-11/12 lg:w-10/12 center flex-col text-primary gap-6">           
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-y-10 gap-[25px] w-full">
                        {
                            AfterHeroContent.map((content : any, i) => (
                                <div key={i} className={`flex flex-col gap-3 ${i === 2 ? "" : "border-b border-primary"} lg:border-none pb-9`}>
                                    <div className="center bg-primary text-white rounded-full size-24 text-5xl">
                                        {content.icon}
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <h3 className="font-bold text-black2">{content.title}</h3>

                                        <p className="text-black2">{content.desc}</p>
                                    </div>
                                </div>
                            ))
                        }   
                    </div>
                </div>



            </section>

            <section className="w-full center bg-primary py-[8vh]">
                <div className="w-11/12 lg:w-10/12 flex flex-col rounded-2xl p-6 lg:p-12 text-white gap-4">

                    <p>{ServicesContent.intro}</p>
                    <p>{AboutUs.why_trust_us.intro}</p>

                    <div className="flex lg:justify-end w-full lg:pr-8">

                    <Button 
                        className="text-black bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                        text="Book Appointment" 
                        icon={<BsArrowRight className="ml-3 "/>}
                        navigateTo="/contact"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}