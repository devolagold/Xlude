export default function CallToAction() {
    return (
        <div className="cta flex flex-col mt-8 py-14 items-center md:justify-between mx-auto p-5 space-y-4 md:space-x-16 md:px-8 lg:px-8 xl:px-14 md:flex md:flex-row">
            <div className="flex flex-col space-y-3 items-center md:items-start" data-aos='fade-up'>
                <p className='text-lg text-primary leading-5 tracking-tighter lg:text-xl md:text-left'>
                    Try Xlude Now
                </p>
                <h1 className="text-4xl text-center leading-9 font-bold md:leading-12 md:text-left md:text-3xl lg:text-4xl xl:text-5xl">
                    Start paying bill with ease
                </h1>
            </div>
            <div className="">
                <button className="button bg-primary text-white text-base font-medium lg:text-lg">Download the app</button>
            </div>
        </div>
    )
}