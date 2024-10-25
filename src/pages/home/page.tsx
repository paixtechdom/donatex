import { AfterHero } from "./sections/AfterHero"
import { Hero } from "./sections/Hero"
import blur from "../../assets/images/blur.png"
import experience1 from "../../assets/images/experience 1.jpg"
import experience2 from "../../assets/images/experience 2.jpg"
import experience3 from "../../assets/images/experience 3.jpg"
import office from "../../assets/images/antenatal.jpg"


const HomePage: React.FC = () => {
    return(
        <main className="center flex-col">
            <Hero />
            <AfterHero />

            <section className="center w-full my-[10vh]">
              <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 gap-8 lg:gap-[25px]">
                <div className="flex flex-col lg:flex-row justify-between lg:justify-start lg:items-stretch gap-3 w-full lg:h-[18vh] relative">
                    <img src="" alt="" className="absolute"/>
                    <img src={experience1} alt="Eperience Image 1" className="h-full" />
                    <img src={experience2} alt="Eperience Image 2" className="h -full"/>
                    <img src={experience3} alt="Eperience Image 3" className="h -full" />
                </div>


                <h2 className="text-2xl font-bold lg:w-8/12 text-primary">
                Our expertise ensures exceptional care and excellence.
                </h2>
              </div>
            </section>


            <section className="center w-full text-primary py-[20vh] overflow-hidden relative">
                <img src={blur} alt="" className="absolute z-[-1] bottom-0  rotate-180"/>   
                <div className="w-11/12 lg:w-10/12 flex-col lg:flex-row center gap-[50px]">
                    <div className="w-full lg:w-5/12 center relative">
                        <img src={office} alt="Image of an office" />

                    </div>

                    <div className="flex flex-col gap-6 text-primary w-full lg:w-7/12">
                        <h2 className="font-bold text-3xl">Need a consultant?</h2>

                        <p className="tracking-wide leading-relaxed text-gray-500 text-lg">
                        Connect with our experienced consultants for personalized care and expert guidance. Whether it is medical advice, surgical consultation, or specialized clinical services, we are here to support you every step of the way.
                        </p>
                    </div>
                </div>
            </section>        
        </main>
    )
}


export default HomePage