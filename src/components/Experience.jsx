import image from '../assets/Experience Image.png'
export default function Experience() {
    return(
        <div className="flex flex-col my-8 items-center mx-auto p-5 space-y-7 md:space-x-7 md:px-8 md:flex-row lg:px-8 xl:px-14">
            <div className=" flex flex-col space-y-3 md:item-left md:w-1/2 md:items-start md:space-y-4">
                <h1 className="text-4xl leading-9 font-bold md:leading-12 md:text-left md:text-3xl lg:text-4xl xl:text-5xl">
                Experience the future of <br className='hidden lg:block' /> bill payments</h1>
                <p className='text-base leading-5 tracking-tighter lg:text-xl md:text-left'>
                    With Xlude, you can say goodbye to the hassle of traditional <br className='md:hidden xl:block' /> bill payments and experience a smarter, more efficient <br className='md:hidden xl:block' /> way to manage your bills.
                </p>
                <h1 className="text-4xl leading-9 font-bold md:leading-12 md:text-left md:text-3xl lg:text-4xl xl:text-5xl">
                    Never miss a payment <br /> and stay in control
                </h1>
                <p className='text-base leading-5 tracking-tighter lg:text-xl md:text-left'>
                Take control of your finances and stay on top of your bills with <br className='md:hidden xl:block' /> peace of mind knowing your finances are in good hands.
                </p>
        
            </div>
            <div className="md:w-1/2 grow-big" data-aos="fade-up">
                <img src={image} alt="" />
            </div>
        </div>
    )
}