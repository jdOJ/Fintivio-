import logo from '../assets/ISOTIPO_-07.png'
import { Menu, X } from "lucide-react"
import { navItems } from '../constants'
import { useState } from 'react'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
    return (
        <nav className="sticky top-0 z-50 w-full py-3 backdrop-blur-lg border-b border-neutral-700/80">
            {/* Quité la clase "container" y "mx-auto" para que ocupe todo el ancho */}
            <div className=" container px-4 mx-auto relative text-sm ">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-12 w-10 mr-2 m-4" src={logo} alt="logo" />
                        <span className="text-xl-tracking-tight pl-2">
                            Fintivio
                        </span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className=" hover:bg-[#1494E2]  border-[#155CCE] py-2 px-3 border rounded-md transition duration-200">
                            Sign In
                        </a>
                        <a href="#" className=" hover:bg-[#1494E2] border border-[#155CCE] py-2 px-3 rounded-md transition duration-200">
                            Create Account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={handleMobileMenu}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className=" sticky  right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>))}
                        </ul>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="hover:bg-[#155CCE] py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a href="#" className="bg-[#1494E2] hover:bg-[#155CCE] py-2 px-3 rounded-md">
                                Create Account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar