import { FC, useState } from 'react'
import { Services } from '../../assets/Constants'
import { PiStethoscopeBold } from 'react-icons/pi'
import { BiChevronDown } from 'react-icons/bi'
import { Button } from '../../assets/components/Button'

const ServicesPage = () => {
    const [ currentSubservice, setCurrentSubservice ] = useState(12)
    
    
  return (
    <main className='my-[20vh] center w-full'>
        
        <div className="center gap-[10vh] flex-col w-11/12 lg:w-10/12">
            <h1 className="text-3xl font-bold text-center">
                Our Services
            </h1>
            <div className="flex flex-col gap-[10vh]">
                {
                    Services.map((service, i) => (
                        <section key={i} className="flex flex-col gap-[5vh]">

                            <div className="flex gap-2 items-center relative w-full h-[30vh] overflow-hidden text-white ">
                                <img src={service.img} alt={service.title} className='absolute w-full h-full object-cover z-[-1]'/>
                                <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-70 z-[-1]">
                                </div>
                                    

                                <PiStethoscopeBold className='ml-3 text-2xl'/>
                                <h3 className='font-bold text-2xl'>{service.title}</h3>
                            </div>

                            <div className="flex flex-col gap-3">
                                {
                                    service.description.map((d, j) => (
                                        <p key={j}>{d}</p>
                                    ))
                                }
                            </div>

                            {
                                service.sub_services &&
                                <div id={"subservices"} className="text-4xl"></div>
                            }
                            {/* hidden for small screens */}
                            <div className="hidden md:block">
                                {
                                    service?.sub_services?.map((sub, j) => (
                                        j == currentSubservice &&
                                       <AService 
                                            key={j}
                                            sub={sub} 
                                            j={j} 
                                            currentSubservice={currentSubservice} 
                                            setCurrentSubservice={setCurrentSubservice}
                                        /> 
                                    ))
                                }
                            </div>

                            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-2 gap-x-2 mt-3">
                                {
                                    service?.sub_services?.map((sub, j) => (
                                        j !== currentSubservice &&
                                       <AService 
                                            key={j}
                                            sub={sub} 
                                            j={j} 
                                            currentSubservice={currentSubservice} 
                                            setCurrentSubservice={setCurrentSubservice}
                                        />
                                    ))
                                }
                            </div>

                            <div className="md:hidden flex flex-col gap-2 mt-3">
                                {
                                    service?.sub_services?.map((sub, j) => (
                                       <AService 
                                            sub={sub} 
                                            j={j} 
                                            currentSubservice={currentSubservice} 
                                            setCurrentSubservice={setCurrentSubservice}
                                        />
                                    ))
                                }
                            </div>


                        </section>
                    ))
                }
            </div>
        </div>
       
    </main>
  )
}

export default ServicesPage




const AService:FC<any> = ({sub, j, currentSubservice, setCurrentSubservice}) => {
    return(
         <div key={j} className={`flex flex-col gap-4 ${j == currentSubservice ? "col-span-3 mb-6" : ""}`}>

            {/* Hidden for sm screens but visible for md and above */}

            <div className="md:relative h-[40vh] overflow-hidden md:flex-col md:justify-center md:items-center cursor-pointer gap-3 hidden md:flex" onClick={() => {
                setCurrentSubservice(j) 
                document.querySelector('#subservices')?.scrollIntoView({
                behavior: "smooth"
                })
            }}>
                <h4 className='font-bold text-lg z-1 text-center text-white'>{sub.title}</h4>
                {
                    j !== currentSubservice &&
                        <Button
                            text={
                                <>
                                <BiChevronDown className="text-2xl"/> <span>Read more</span>
                                </> 
                            }
                            className='flex items-center gap-2 bg-primary text-white'
                        />
                    
                }

                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[-1]"></div>
                <img src={sub.img} alt={sub.title} className='absolute top-0 w-full h-full object-cover z-[-2]'/>
            </div>
            

            {/* Hidden for md and above screens but visible for sm */}

            <div className="relative h-[40vh] overflow-hidden center flex-col cursor-pointer gap-3 md:hidden" onClick={() => {
                setCurrentSubservice(j) 
            }}>
                <h4 className='font-bold text-lg z-1 text-center text-white'>{sub.title}</h4>

                {
                    j !== currentSubservice &&
                        <Button
                            text={
                                <>
                                <BiChevronDown className="text-2xl"/> <span>Read more</span>
                                </> 
                            }
                            className='flex items-center gap-2 bg-primary text-white'
                        />
                    
                }

                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[-1]"></div>
                <img src={sub.img} alt={sub.title} className='absolute top-0 w-full h-full object-cover z-[-2]'/>
            </div>


            <div className="flex flex-col gap-3">
                {
                    j == currentSubservice &&
                    sub?.description.map((d: string, j:number) => (
                        
                        <p key={j}>{d}</p>
                    ))
                    
                }

                
            </div>
            
        </div>
    )
}