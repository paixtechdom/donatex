import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneOutboundFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { ContactInfoInterface } from "../Interfaces"
import { Services } from "../Constants"



export const ContactInfo = [
    {
        icon: <BsTelephoneOutboundFill />,
        contact: '+234 802 339 3512'
    },
    {
        icon: <BsEnvelopeFill />,
        contact: 'stthomasspecialisthospital@gmail.com'
    },
    {
        icon: <BsGeoAltFill />,
        contact: 'Opposite De Prime Hotel, Molipa Road, Ijebu Ode, Ogun State'
    },
]




const Footer = () => {
    return(
        <footer className="w-full center bg-primary pt-[10vh] pb-[5vh] lg:py-[15vh]">
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-6 text-gray-200">
                <div className="flex flex-col lg:grid-cols-3 gap-y-10 md:gap-9">

                    <div className="flex flex-col gap-4 col-span-2">
                        <h2 className="text-3xl text-gray-100">St. Thomas Specialist Hospital</h2>
                        <p>Empowering Health, Enhancing Lives</p>
                    </div>


                    <div className="flex flex-col gap-4 w-full">
                        <h3 className="text-gray-100 font-semibold text-lg">General Services</h3>

                        <div className="flex flex-col gap-4 text-sm text-gray-200">
                            {
                                Services?.map((service :any, i) => (
                                    <Link key={i} to={'/about'}>
                                        {service.title}
                                    </Link>
                                ))
                            }
                        </div>
                   
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                        <h3 className="text-gray-100 font-semibold text-lg">Special Clinical Services</h3>

                        <div className="flex flex-col gap-4 text-sm text-gray-200">
                            {
                                Services[2].sub_services?.map((service :any, i) => (
                                    <Link key={i} to={'/about'}>
                                        {service.title}
                                    </Link>
                                ))
                            }
                        </div>
                   
                    </div>
                </div>

                <div className="flex flex-col flex-wrap md:flex-row gap-3 lg:items-center my-3 lg:my-0">
                    {
                        ContactInfo.map((info: ContactInfoInterface, i) => (
                            <div key={i} className="flex items-center gap-2">
                                {info.icon}

                                <a href="">{info.contact}</a>
                            </div>
                        ))
                    }
                </div>

                <div className="justify-between items-center flex flex-col lg:flex-row gap-3">
                    <p className="w-full lg:w-fit">Copyright © {new Date().getFullYear()}</p>

                    <p className="w-full lg:w-fit">All Rights Reserved</p>
                </div>
                <a href="https://paixtechdom.com" className="text-center">Developed by <strong> Paix Techdom</strong></a>
            </div>
        </footer>
    )
}

export default Footer