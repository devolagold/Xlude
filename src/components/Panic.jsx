import panic from '../assets/panic-section-image.png'
export default function Panic() {
    return (
        <div className="flex flex-col md:mx-8 p-5 py-6 space-y-8 md:px-0 md:flex-col lg:px-0 xl:px-8">
            <div className="space-y-4">
                <h1 className="text-3xl leading-9 font-bold text-center md:leading-12 md:text-center lg:text-5xl md:px-4">
                    You don’t have to panic when DSTV subscription finishes during a match
                </h1>
                <p className='text-base text-center leading-5 tracking-tighter lg:text-xl md:text-center'>
                    Quickly recharge back in seconds when you exhaust your DSTV subscription
                </p>
            </div>
            
            <div className="">
                <img src={panic} alt="" />
            </div>
        </div>
    )
}