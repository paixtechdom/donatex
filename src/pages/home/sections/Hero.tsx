import { Button } from "../../../assets/components/Button"


export const Hero = () => {
    return(
        <section className="min-h-screen bg-hero bg-center bg-cover w-full center"> 
            <div className="w-11/12 lg:w-10/12 flex flex-col justify-center items-start">
                <div className="w-full flex flex-col justify-center items-center text-white gap-6 lg:gap-8 text-center">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl md:w-11/12 lg:w-8/12 hero-text">
                        St. Thomas Specialist Hospital
                    </h1>
                    <p className="md:w-11/12 lg:w-8/12">
                        Empowering Health, Enhancing Lives – Your trusted partner in compassionate care, advanced treatments, and community wellness.                    </p>
                    <div className="center w-11/12 lg:w-6/12">
                        <Button text="Contact us" className="bg-primary text-white font-bold w-fit py-3"/>
                    </div>
                </div>
            </div>
        </section>

      
    )
}