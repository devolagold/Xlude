import Card from './Card'
import cardData from '../card-data'

export default function Simple() {
    const cardElement = cardData.map(card => {
        return <Card 
                    key = {card.id}
                    {...card}
                />
    })

    return (
        <div className="simple flex flex-col my-8 mx-auto p-5 py-16 space-y-7 md:px-8 md:flex-col lg:px-8 xl:px-14">
            <div className="space-y-4">
                <h1 className="text-4xl leading-9 font-bold md:leading-12 md:text-left lg:text-5xl">
                    Simple, easy bill payments
                </h1>
                <p className='text-base leading-5 tracking-tighter lg:text-xl md:text-left'>
                    Make bill payments simple and stress-free.
                </p>
            </div>

            <div className="card-container flex flex-col space-y-6 md:space-y-0 md:space-x-6 md:flex-row">
                {cardElement}
            </div>
        </div>
    )
}