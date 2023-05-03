import image from '../assets/Card Image.png'

export default function CardDisplay() {
    return(
        <div className="flex flex-col items-center mx-auto p-5 space-y-7 md:space-x-7 md:px-8 lg:px-8 xl:px-14 md:flex-row">
            <div className="flex flex-col space-y-3 text-center items-center md:item-left md:w-1/2 md:items-start md:space-y-4">
            <h1 className="text-4xl leading-9 font-bold md:leading-12 md:text-left md:text-2xl lg:text-4xl xl:text-5xl">
                Simplify your bill <br className='hidden xl:block' /> payment process by <br className='hidden xl:block' /> adding a card
            </h1>
                <p className='text-base leading-5 tracking-tighter lg:text-xl md:text-left'>
                With Xlude's secure payment processing, you can rest assured <br className='hidden xl:block' /> that your card information is safe and protected.
                </p>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0" data-aos='fade-up'>
                <img src={image} alt="" className='w-100' />
            </div>   
        </div>
    )
}