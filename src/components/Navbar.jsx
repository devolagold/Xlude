import logo from '../assets/logo.svg'
// import '../js/script'

export default function Navbar(){
    return(
        <nav id="nav" className="navbar">
            <a href="#">
                <img src={logo} alt="logo" className='logo' />
            </a>
            <div className="nav-link text-black">
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
            <div className="cta-button">
                <a href="#" className="button bg-primary text-white">Get the App</a>
            </div>
            <a href="#" className="toggle-button">
                <span className="bar1 bg-black"></span>
                <span className="bar2 bg-black"></span>
            </a>
        </nav>
    )
}