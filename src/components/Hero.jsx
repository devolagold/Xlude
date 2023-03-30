import heroImage from '../assets/Hero Image.png'
export default function Hero() {
    return(
        <div className="flex flex-col my-8 items-center mx-auto p-5 space-y-7 md:space-x-7 md:px-8 md:flex-row lg:px-8 xl:px-14">
            <div className=" flex flex-col space-y-3 text-center items-center md:item-left md:w-1/2 md:items-start md:space-y-4">
                <h1 className="text-[2rem] leading-9 font-bold md:leading-12 md:text-left md:text-3xl mlg:text-4xl xl:text-5xl">
                    Simple solution <br className='hidden lg:block' /> to paying your bills<br className='hidden lg:block' /> <span className="text-primary">securely</span> & <span className="text-primary">conveniently</span> </h1>
                <p className='text-base leading-5 tracking-tighter lg:text-xl md:text-left '>Xlude makes paying bills a breeze with its secure and user-friendly platform. Say goodbye to the hassle of managing bills and enjoy the convenience of paying all of your bills in one place.</p>
                <div className="button-group space-x-3">
                    <button className="button bg-primary text-white text-base font-medium lg:text-lg">Get the App</button>
                    <button className="button border text-black text-base font-medium lg:text-lg">Open an account</button>
                </div>
            </div>
            <div className="md:w-1/2 grow-big">
                <img src={heroImage} alt="Hero-Image"/>
            </div>
        </div>
    )
}