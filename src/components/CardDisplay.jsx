import image from '../assets/Card Image.png'
export default function CardDisplay() {
    return(
        <div className="flex flex-col items-center mx-auto p-5 space-y-7 md:space-x-7 md:px-14 md:flex-row">
            <div className=" flex flex-col space-y-3 md:item-left md:w-1/2 md:items-start md:space-y-4">
                <h1 className="text-4xl leading-9 font-bold md:leading-12 md:text-left lg:text-5xl">
                    Simplify your bill <br /> payment process by <br /> adding a card
                </h1>
                <p className='text-base leading-5 tracking-tighter lg:text-xl md:text-left'>
                With Xlude's secure payment processing, you can rest assured <br /> that your card information is safe and protected.
                </p>
            </div>
            <div className="md:w-1/2 grow-big">
                <img src={image} alt="" />
            </div>
        </div>
    )
}