import { BsClipboard2, BsEyeFill } from "react-icons/bs"
import { Button } from "../../assets/components/Button"
import { AboutUs, logo, PathologyDepartments } from "../../assets/Constants"
import { useEffect } from "react"
import { ScrolltoTop } from "../../App"


const AboutPage = () => {
    useEffect(() => {
      ScrolltoTop()
  }, [])

  return (
    <main className="w-full center flex-col mt-[10vh] md:mt-[12vh] pb-[10vh] gap-[10vh] bg-bg">

      <div className="center bg-primary w-full h-[30vh]">
        <h1 className="text-3xl font-bold text-white">
          About Us
        </h1>
      </div>

      <div className="w-11/12 lg:w-10/12 center flex-col gap-[10vh] mt">

        <div className="center flex-col lg:flex-row gap-16">

          <div className="flex flex-col gap-2 w-full">
            {
              AboutUs.history.map((p, i) => (
                <p key={i}>{i === 0 && <span className="capitalize font-bold text-primary">DONATEX DIAGNOSTICS & GLOBAL SERVICES LIMITED</span> } {p}</p>
              )) 
            }
          </div>
          <img src={logo} alt="Donatex Diagnostics and Global Services' Logo" className="w-full lg:w-5/12 object-cover h-[50vh] shadow-xl rounded-xl"/>
        </div>

        

        <div className="flex flex-col gap-3 w-full bg-primary bg-opacity-[0.05] p-8 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="center rounded-full bg-primary text-secondary size-12">
              <BsClipboard2 className="text-2xl"/>
            </div>

            <h3 className="font-bold text-xl uppercase">
              Our Mission
            </h3>
          </div>
      
          <li className="w-full">
            {AboutUs.mission}
          </li>
        </div>


        <div className="flex flex-col gap-3 w-full bg-primary bg-opacity-[0.05] p-8 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="center rounded-full bg-primary text-secondary size-12">
              <BsEyeFill className="text-2xl"/>
            </div>

            <h3 className="font-bold text-xl uppercase">
              Our Vision
            </h3>
          </div>
      
          <li className="w-full">
            {AboutUs.vision}
          </li>
        </div>
        
       

      </div>

        <div className="center bg-why bg-center bg-cover bg-no-repeat bg-fixed w-full min-h-[60vh] relative text-white py-12 p-2">
          <div className="bg-primaryDark h-full w-full absolute top-0 left-0 bg-opacity-90 z-0">

          </div>
          <div className="w-11/12 lg:w-10/12 flex flex-col gap-4 z-10">

            <h2 className="text-3xl font-bold text-white">Why trust us</h2>

            <p>{AboutUs.why_trust_us.intro}</p>
            
            {
              AboutUs.why_trust_us.reasons.map((p, i) => (
                <li key={i}>{p}</li>
              )) 
            }
          </div>
        </div>

        
        <div className="flex flex-col gap-5 w-11/12 lg:w-10/12">
            <h2 className="text-3xl font-bold">Our Pathology Departments</h2>

            <div className="flex flex-col gap-2">
              {
                PathologyDepartments.main.map((p, i) => (
                  <li key={i}>{p.title}</li>
                )) 
              }
            </div>

            <Button 
                text="Read more"
                className="w-fit bg-primary text-white shadow-xl"
                navigateTo="services"
            />

        </div>
    </main>
)
}

export default AboutPage