import logo from '../assets/logo.svg'
import { useRef, useEffect } from 'react'

export default function Navbar(){
    const ref = useRef(null)

    useEffect(() => {
        const toggleBtn = document.querySelector(".toggle-button")
        const navLink = document.querySelector(".nav-link")
        const ctaButton = document.querySelector(".cta-button")
        const navbar = document.querySelector(".navbar")

        const handleFixedBar = event => {
            if(window.pageYOffset > navbar.getBoundingClientRect().height){
                navbar.classList.add("navbar-fixed")
            } else{
                navbar.classList.remove("navbar-fixed")
            }
        }

        const handleClick = event => {
            navLink.classList.toggle('active')
            ctaButton.classList.toggle('active')
            navbar.classList.toggle('active')
            toggleBtn.classList.toggle('open')
        }

        const element = ref.current

        element.addEventListener('click', handleClick)

        window.addEventListener('scroll', handleFixedBar)
        
        return () => {
            element.removeEventListener('click', handleClick)
            window.removeEventListener('scroll', handleFixedBar)
        }
    }, [])
    
    return(
        <nav id="nav" className="navbar">
            <a href="#">
                <img src={logo} alt="logo" className='logo' />
            </a>
            <div className="nav-link">
                <ul>
                    <li className="nav-item">
                        <a href="#">Our Solution</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Support</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Why Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="cta-button test-btn">
                <a href="#" className="button bg-primary text-white">Get the App</a>
            </div>
            <a href="#" className="toggle-button" ref={ref}>
                <span className="bar1 bg-black"></span>
                <span className="bar2 bg-black"></span>
            </a>
        </nav>
    )
} 