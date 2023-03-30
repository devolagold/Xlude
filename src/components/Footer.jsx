import logo from '../assets/logo.svg'

export default function Footer() {
    let currentYear = new Date().getFullYear()
    
    return (
        <div className="flex flex-col bg-black py-10 mx-auto p-5 md:px-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 gap-y-6">
                <div className="about-us flex flex-col text-white space-y-3">
                    <h1 className="text-primary font-bold text-2xl md:text-3xl">About Us</h1>
                    <a href="#" className="footer-text md:text-lg font-light pt-3">Company</a>
                    <a href="#" className="footer-text md:text-lg font-light">Press</a>
                    <a href="#" className="footer-text md:text-lg font-light">Careers</a>
                    <a href="#" className="footer-text md:text-lg font-light">Ambassadors</a>
                    <a href="#" className="footer-text md:text-lg font-light">Privacy</a>
                    <a href="#" className="footer-text md:text-lg font-light">Terms</a>
                </div>

                <div className="about-us flex flex-col text-white space-y-3">
                    <h1 className="text-primary font-bold text-2xl md:text-3xl">Information</h1>
                    <a href="#" className="footer-text md:text-lg font-light pt-3">Copyright</a>
                    <a href="#" className="footer-text md:text-lg font-light">Pricing</a>
                    <a href="#" className="footer-text md:text-lg font-light">Jobs</a>
                    <a href="#" className="footer-text md:text-lg font-light">Business</a>
                    <a href="#" className="footer-text md:text-lg font-light">Embed API</a>
                    <a href="#" className="footer-text md:text-lg font-light">Media</a>
                    <a href="#" className="footer-text md:text-lg font-light">Security</a>
                    <a href="#" className="footer-text md:text-lg font-light">Got a Suggestion?</a>
                </div>

                <div className="about-us flex flex-col text-white space-y-3">
                    <h1 className="text-primary font-bold text-2xl md:text-3xl">Learn</h1>
                    <a href="#" className="footer-text md:text-lg font-light pt-3">Blog</a>
                    <a href="#" className="footer-text md:text-lg font-light">Guides</a>
                    <a href="#" className="footer-text md:text-lg font-light">Video Tutorials</a>
                    <a href="#" className="footer-text md:text-lg font-light">Commerce</a>
                    <a href="#" className="footer-text md:text-lg font-light">FAQs</a>
                    <a href="#" className="footer-text md:text-lg font-light">Careers</a>
                    <a href="#" className="footer-text md:text-lg font-light">Customer Stories</a>
                </div>

                <div className="about-us flex flex-col text-white space-y-3">
                    <h1 className="text-primary font-bold text-2xl md:text-3xl">Support</h1>
                    <a href="#" className="footer-text md:text-lg font-light pt-3">support@xlude.com</a>
                    <a href="#" className="footer-text md:text-lg font-light">Help Desk</a>
                    <a href="#" className="footer-text md:text-lg font-light">Why was I debited?</a>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4 space-x-0 pt-12 md:flex-row md:justify-between md:space-y-0">
                <div className="flex flex-col space-y-4 space-x-5 items-center text-primary md:flex-row md:space-y-0">
                    <img src={logo}/>
                    <h3 className='text-lg text-center'>Copyright © <span>{currentYear}</span> Xlude — All Rights Reserved.</h3>
                </div>

                <div className="socials flex space-x-4 pt-3 md:pt-0">
                    <a href="#" className="footer-text">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.53202 5.207C8.30352 5.069 10.459 5 11.999 5C13.539 5 15.6955 5.069 18.4685 5.2075C19.1942 5.24372 19.882 5.54203 20.4043 6.04706C20.9266 6.55208 21.2479 7.22949 21.3085 7.9535C21.4355 9.4705 21.499 10.8065 21.499 11.962C21.499 13.1315 21.434 14.486 21.304 16.026C21.2437 16.7417 20.9285 17.412 20.4159 17.9151C19.9033 18.4181 19.2272 18.7206 18.5105 18.7675C16.14 18.9225 13.9695 19 11.999 19C10.029 19 7.85902 18.9225 5.49002 18.7675C4.77356 18.7206 4.09766 18.4184 3.58507 17.9156C3.07249 17.4129 2.75722 16.7429 2.69652 16.0275C2.56502 14.476 2.49902 13.1205 2.49902 11.962C2.49902 10.817 2.56352 9.4805 2.69152 7.952C2.75236 7.22817 3.07376 6.551 3.59605 6.04618C4.11834 5.54136 4.80605 5.24319 5.53152 5.207H5.53202Z" stroke="#00AB44" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M10.5 9.80482V14.2028C10.5 14.2803 10.5209 14.3563 10.5607 14.4228C10.6004 14.4893 10.6574 14.5437 10.7256 14.5804C10.7938 14.6171 10.8707 14.6346 10.9481 14.6311C11.0254 14.6275 11.1004 14.6031 11.165 14.5603L14.4635 12.3803C14.5225 12.3415 14.5709 12.2886 14.6045 12.2265C14.6381 12.1644 14.6558 12.095 14.6561 12.0244C14.6564 11.9538 14.6393 11.8842 14.6062 11.8218C14.5731 11.7594 14.5251 11.7062 14.4665 11.6668L11.1675 9.44882C11.103 9.40549 11.028 9.38051 10.9504 9.37654C10.8728 9.37257 10.7956 9.38976 10.7271 9.42627C10.6585 9.46279 10.6012 9.51725 10.5612 9.58384C10.5212 9.65043 10.5 9.72664 10.5 9.80432V9.80482Z" stroke="#00AB44" strokeLinecap="round"/>
                        </svg>
                    </a>

                    <a href="#" className="footer-text">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3H12Z" stroke="#00AB44" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z" stroke="#00AB44" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M17 8.5C17.8284 8.5 18.5 7.82843 18.5 7C18.5 6.17157 17.8284 5.5 17 5.5C16.1716 5.5 15.5 6.17157 15.5 7C15.5 7.82843 16.1716 8.5 17 8.5Z" fill="#00AB44"/>
                        </svg>
                    </a>

                    <a href="#" className="footer-text">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z" fill="#00AB44"/>
                            <path d="M17 8.94701C16.632 9.10701 16.237 9.21701 15.822 9.26501C16.246 9.01501 16.57 8.61901 16.724 8.14801C16.32 8.38348 15.8791 8.54913 15.42 8.63801C15.2269 8.43558 14.9945 8.27462 14.7372 8.16493C14.4798 8.05524 14.2028 7.99913 13.923 8.00001C12.79 8.00001 11.872 8.90501 11.872 10.02C11.872 10.178 11.89 10.332 11.925 10.48C11.1123 10.4414 10.3166 10.2339 9.58865 9.87056C8.86068 9.50726 8.21643 8.99621 7.697 8.37001C7.51456 8.67711 7.41851 9.02781 7.419 9.38501C7.419 10.085 7.782 10.705 8.332 11.066C8.00644 11.0558 7.68786 10.9691 7.402 10.813V10.838C7.40509 11.3075 7.5708 11.7613 7.87092 12.1224C8.17103 12.4834 8.587 12.7292 9.048 12.818C8.74536 12.898 8.42869 12.9096 8.121 12.852C8.25513 13.2559 8.51167 13.608 8.85502 13.8594C9.19837 14.1108 9.61148 14.2491 10.037 14.255C9.30696 14.8176 8.41064 15.1215 7.489 15.119C7.324 15.119 7.161 15.109 7 15.091C7.94047 15.6863 9.03096 16.0016 10.144 16C13.918 16 15.981 12.922 15.981 10.252L15.974 9.99001C16.3763 9.70729 16.7239 9.3539 17 8.94701Z" fill="#00AB44"/>
                        </svg>
                    </a>

                    <a href="#" className="footer-text">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 13.13V16.827H14.857V13.377C14.857 12.511 14.547 11.92 13.771 11.92C13.179 11.92 12.826 12.318 12.671 12.704C12.615 12.842 12.6 13.034 12.6 13.226V16.827H10.456C10.456 16.827 10.485 10.985 10.456 10.38H12.6V11.293L12.586 11.314H12.6V11.293C12.885 10.853 13.393 10.228 14.532 10.228C15.942 10.228 17 11.15 17 13.13ZM8.213 7.271C7.48 7.271 7 7.753 7 8.385C7 9.005 7.466 9.5 8.185 9.5H8.199C8.947 9.5 9.412 9.004 9.412 8.385C9.398 7.753 8.947 7.271 8.213 7.271ZM7.127 16.827H9.271V10.38H7.127V16.827Z" fill="#00AB44"/>
                            <path d="M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z" fill="#00AB44"/>
                        </svg>
                    </a>

                    <a href="#" className="footer-text">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 19.938C15.0173 19.6813 16.8611 18.6661 18.1568 17.0988C19.4525 15.5314 20.1027 13.5295 19.9754 11.5C19.848 9.47041 18.9527 7.56549 17.4713 6.17238C15.9898 4.77927 14.0336 4.00252 12 4C9.96396 3.99848 8.00395 4.77334 6.51934 6.16668C5.03473 7.56002 4.13724 9.46699 4.00974 11.499C3.88225 13.5311 4.53434 15.5353 5.83314 17.1033C7.13195 18.6712 8.97974 19.685 11 19.938V14H9V12H11V10.346C11 9.009 11.14 8.524 11.4 8.035C11.6561 7.55119 12.052 7.15569 12.536 6.9C12.918 6.695 13.393 6.572 14.223 6.519C14.552 6.498 14.978 6.524 15.501 6.599V8.499H15C14.083 8.499 13.704 8.542 13.478 8.663C13.3431 8.73236 13.2334 8.84215 13.164 8.977C13.044 9.203 13 9.427 13 10.345V12H15.5L15 14H13V19.938ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z" fill="#00AB44"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}