import image from '../assets/analytic.png'

export default function Analytics() {
    return(
        <div className="flex flex-col-reverse items-center mx-auto p-5 space-y-7 md:space-x-7 md:px-8 lg:px-8 xl:px-14 md:flex-row">
            <div className="md:w-1/2 mt-8 md:mt-0 grow-big" data-aos='fade-up'>
                <img src={image} alt="" className='w-100' />
            </div>

            <div className="flex flex-col space-y-3 text-center items-center md:item-left md:w-1/2 md:items-start md:space-y-4">
                <h1 className='bg-primary text-white p-2 px-4 text-lg font-medium rounded-full md:px-4 md:p-1 md:text-base xl:text-xl xl:p-3 xl:px-6'>EXPLANTORY ANALYTICS</h1>
                <h1 className="text-4xl leading-9 font-bold md:leading-12 md:text-left md:text-2xl lg:text-4xl xl:text-5xl">
                    Examine your spending and sort your finances into categories.
                </h1>
                
                <p className='text-base leading-5 tracking-tighter lg:text-xl md:text-left'>
                    Get a clearer picture of your finances by analyzing your spending and categorizing expenses for better budgeting and money management.
                </p>
            </div>
        </div>
    )
}