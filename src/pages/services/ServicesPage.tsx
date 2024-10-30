import { FC, useEffect, useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { PathologyDepartments, ServicesContent } from '../../assets/Constants'
import { ScrolltoTop } from '../../App'

const ServicesPage = () => {
    const [ currentService, setCurrentService ] = useState(0)
    
    useEffect(() => {
        ScrolltoTop()
    }, [])
    
  return (
    <main className='mt-[10vh] md:mt-[12vh] pb-[10vh] gap-[10vh] center flex-col w-full bg-bg'>
        
        <div className="center bg-service bg-center bg-cover bg-no-repeat bg-fixed w-full h-[50vh] lg:h-[60vh] relative text-white">
          <div className="bg-primaryDark h-full w-full absolute top-0 left-0 bg-opacity-90 z-0"></div>
          <div className="w-11/12 lg:w-10/12 flex flex-col gap-4 z-10 text-center">

                <h1 className="text-4xl lg:text-5xl font-bold text-center">
                    {ServicesContent.laboratory.title}
                </h1>

                <p>{ServicesContent.laboratory.desc}</p>
            </div>
        </div>
        


        <div className="center gap-[10vh] flex-col w-11/12 lg:w-10/12">

            <div className="flex flex-col gap-y-12 lg:gap-y-8 mt-3 w-full lg:w-10/12">
                {
                    ServicesContent.services?.map((sub, j) => (
                        <AService 
                            key={j}
                            sub={sub} 
                            j={j} 
                            currentService={currentService} 
                            setCurrentService={setCurrentService}
                        />
                    ))
                }
            </div>


            <div className="flex flex-col gap-5 w-full mt-9">
                <h2 className="text-3xl font-bold">Our Pathology Departments</h2>

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        PathologyDepartments.main.map((p, i) => (
                        <div key={i} className="text-xl center text-center bg-primary bg-opacity-40 h-[20vh] rounded-xl shadow-lg">
                            {p.title}
                        </div>
                        )) 
                    }
                    {
                        PathologyDepartments.others.map((p, i) => (
                            <div key={i} className="text-xl center text-center bg-primary bg-opacity-40 h-[20vh] rounded-xl shadow-lg">
                                {p}
                        </div>  
                        )) 
                    }
                </div>


               <div className="flex flex-col gap-[8vh] mt-[10vh]">
                {ServicesContent.others.map((service, i) => (
                    <div key={i} className="center flex-col w-full relative min-h -[40vh] text-white overflow-hidden rounded-xl p-4 py-8"> 
                            <img src={service.img} alt={service.title} className='absolute h-full w-full object-cover z-0'/>
                            <div className="bg-primaryDark bg-opacity-80 h-full w-full absolute top-0 left-0 z-1"></div>
                            

                        <div className="center text-left lg:text-center flex-col z-10 h-full gap-3 w-11/12 lg:w-10/12">
                            <h3 className="text-2xl font-bold text-white w-full">{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                        
                    </div>
                ))}
               </div>

               <div className="flex flex-col gap-3 w-full mt-12">
                {ServicesContent.conslusion.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
               </div>
            </div>
        </div>
       
    </main>
  )
}

export default ServicesPage




const AService:FC<any> = ({sub, j, currentService, setCurrentService}) => {
    return(
         <div id={sub.title.replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '').replace('/', '')} key={j} className={`flex flex-col gap-4 w-full ${currentService === j ? "p-6 bg-primary bg-opacity-5 rounded-2xl w-7/12" : ""}`}>


            <div className={`relative overflow-hidden flex items-center justify-between cursor-pointer gap-3 ${currentService === j ? "w-full" : "w-full lg:w-7/12 "}`} onClick={() => {
                setCurrentService(j) 
                document.querySelector(`#${sub.title.replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '').replace('/', '')}`)?.scrollIntoView({
                    behavior: "smooth"
                })
            }}>
                <h4 className='font-bold text-lg z-1'>{sub.title}</h4>

                <div className="center size-6 bg-primary bg-opacity-35 rounded-full">

                    {
                        currentService == j ?
                        <BiChevronUp className="text-2xl"/>
                        :
                        <BiChevronDown className="text-2xl"/>
                    }
                </div>


            </div>
            {
                currentService == j &&
                <p key={j}>{sub?.desc}</p>
            }
            
        </div>
    )
}