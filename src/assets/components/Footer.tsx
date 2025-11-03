import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneOutboundFill } from "react-icons/bs"
import { ContactInfoInterface } from "../Interfaces"



export const ContactInfo = [
    {
        icon: <BsTelephoneOutboundFill />,
        contact: '+234 803 401 8954',
        link: "tel:+2348034018954"
    },
    {
        icon: <BsEnvelopeFill />,
        contact: 'donatexdiagnostics@gmail.com',
        link: "mailto:donatexdiagnostics@gmail.com"
    },
    {
        icon: <BsGeoAltFill />,
        contact: 'RW8G+Q4C, Apebi Street, Ijebu Ode 120101, Ogun State',
        link: "#"
    },
]




const Footer = () => {
    return(
        <footer className="w-full center bg-primary pt-[10vh] pb-[5vh] lg:py-[15vh] text-white">
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-12 text-
            -200">
                <div className="flex flex-col lg:grid-cols-3 gap-y-10 md:gap-9">

                    <div className="flex flex-col gap-4 col-span-2">
                        <h2 className="text-3xl text-white">Donatext Diagnostics And Global Services</h2>
                        <p>Comprehensive, high-quality laboratory testing for your health needs.</p>
                    </div>

                </div>

                <div className="flex flex-col flex-wrap gap-3 lg:items-center my-3 lg:my-0">
                    {
                        ContactInfo.map((info: ContactInfoInterface, i) => (
                            <div key={i} className="flex items-center gap-2 w-full">
                                {info.icon}

                                <a href={`${info.link}`}>{info.contact}</a>
                            </div>
                        ))
                    }
                </div>

                <div className="w-fit ull justify-between items-center flex flex-col lg:flex-row gap-3">
                    <p className="w-full lg:w-fit">Copyright © {new Date().getFullYear()}</p>

                    <p className="w-full lg:w-fit">All Rights Reserved</p>
                </div>

                {/* <a href="https://paixtechdom.com" className="text-center">Developed by <strong> Paix Techdom</strong></a> */}
            </div>
        </footer>
    )
}

export default Footer