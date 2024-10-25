import { ContactInfoInterface } from "../../assets/Interfaces"
import { ContactInfo } from "../../assets/components/Footer"




const ContactPage = () => {
   

    return(
        <main className="center flex-col w-full pt-[20vh] pb-[10vh] bg-white">
            <div className="w-11/12 lg:w-10/12 center flex-col gap-9 text-primary">

                <div className="w-full flex flex-col lg:flex-row gap-[50px] lg:gap-[25px] xl:gap-[50px] p-2 rounded-xl bg-white min-h-[80vh] shadow-2xl">
                    <div className="bg-primary flex flex-col justify-between text-gray-300 p-9 py-[6vh] rounded-t-xl lg:rounded-r-none lg:rounded-l-xl relative overflow-hidden w-full lg:w-5/12 gap-[10vh] lg:gap-9">

                        <div className="flex flex-col gap-1 h-[20%]">
                            <h2 className="text-white text-2xl font-semibold">Get in touch</h2>
                        </div>
                        
                        <div className="flex flex-col gap-5 h-[80%]">
                            {
                                ContactInfo.map((contact : ContactInfoInterface, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <div className="text-xl text-white">
                                            {contact.icon}
                                        </div>

                                        <p>{contact.contact}</p>
                                    </div>
                                ))
                            }
                        </div>


                        <div className="absolute w-[150px] h-[150px] bg-white bg-opacity-20 rounded-full -right-[70px] -bottom-[35px]"></div>

                    </div>


                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15845.780677354624!2d3.9129427!3d6.8371099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10396f5c4151fcb1%3A0x8e86e90c64c464fb!2sSt.%20Thomas%20Specialist%20Hospital!5e0!3m2!1sen!2sng!4v1729849049421!5m2!1sen!2sng" className="border-0 w-full h-96 rounded-xl outline-none" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </main>
    )
}


export default ContactPage


