import { Link } from "react-router-dom"
import logo from "../images/logo.jpg"
import { Navigation } from "../Constants"
import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"

const Navbar = () => {
        const [ showNav, setShowNav ] = useState(false)

    return(
        <header className={`fixed center w-full left-0 top-0 h-[10vh] md:h-[12vh] z-50 transition-all duration-1000 bg-gray`}>
            <div className="flex items-center justify-between w-11/12 lg:w-10/12">

                <Link to={'/'} className='w-3/12 md:w-2/12 flex items-center gap-3 text-xl font-bold'>
                    <img src={logo} alt="Donatex Diagnostics And Global Services' Logo" />
                </Link>

                <div className="center text-3xl lg:hidden" onClick={() => {
                    setShowNav(!showNav)
                }}>
                    {
                        showNav ? 
                        <BiX />
                        : 
                        <BiMenu />
                    }
                </div>
                <div className={`fixed w-full flex justify-center items-start  transition-all duration-1000 top-[8vh] md:top-[10vh] h-screen lg:relative lg:top-0 lg:w-6/12 lg:h-fit ${showNav ? ' left-0 z-40' : '-left-[100%] lg:-left-0'} bg-white lg:bg-transparent`}>
                        <nav className={`flex flex-col lg:flex-row items-center w-full h-screen lg:gap-9 lg:h-fit lg:bg-transparent lg:justify-between transition-all duration-1000`}>
                            {
                                Navigation.map((nav, i) => (
                                    <Link to={`/${nav.link}`} key={i} className={`flex flex-col transition-all duration-1000 justify-between w-full text-primary  border-b border-gray-200 lg:border-0 relative p-5 lg:p-0 cursor-pointer`} onClick={() => {
                                        setShowNav(false)
                                    }}>

                                        <p>{nav.title}</p>
                                                                              
                                    </Link>
                                ))
                            }
                        </nav>
        
                        
        
                    </div>
       
            </div>

            
        </header>
    )
}


export default Navbar
