import image from '../assets/Organized Section Image.png'
export default function Organized() {
    return (
        <div className="flex flex-col-reverse my-8 items-center mx-auto p-5 space-y-7 md:space-x-7 md:px-8 md:flex-row lg:px-8 xl:px-14">
            <div className="md:w-1/2 mt-8 md:mt-0 grow-big" data-aos="fade-right">
                <img src={image} alt="" className='w-100' />
            </div>

            <div className="flex flex-col space-y-3 text-center items-center md:item-left md:w-1/2 md:items-start md:space-y-4">
                <h1 className="text-4xl leading-9 font-bold md:leading-12 md:text-left md:text-2xl lg:text-4xl xl:text-5xl">
                    Stay organized, never <br className='hidden lg:block' /> miss any payment and <br className='hidden lg:block' /> have a peace of mind
                </h1>
                
                <p className='text-base leading-5 tracking-tighter lg:text-xl md:text-left'>
                    Ultimate bill payment platform for the modern age. Our sleek and user-friendly interface allows you to easily manage all your bills in one place.
                </p>
                
                <button className="button bg-primary text-white text-base font-medium lg:text-lg">Learn More</button>
            </div>
        </div>
    )
}