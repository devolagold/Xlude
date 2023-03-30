import image from '../assets/analytic.png'

export default function Analytics() {
    return(
        <div className="flex flex-col-reverse my-2 items-center mx-auto p-5 space-y-8 md:space-x-16 md:px-14 md:flex md:flex-row">
            <div className="md:w-1/2 mt-8 md:mt-0 grow-big">
                <img src={image} alt="" className='w-100' />
            </div>

            <div className="flex flex-col space-y-3 text-center items-center md:item-left md:w-1/2 md:items-start md:space-y-4">
                <h1 className='bg-primary text-white p-2 px-4 text-lg font-medium rounded-full md:text-xl md:px-6 md:p-3'>EXPLANTORY ANALYTICS</h1>
                <h1 className="text-4xl leading-9 font-bold md:leading-12 md:text-left lg:text-5xl">
                    Examine your spending and sort your finances <br /> into categories.
                </h1>
                
                <p className='text-base leading-5 tracking-tighter lg:text-xl md:text-left'>
                    Get a clearer picture of your finances by analyzing your spending and categorizing expenses for better budgeting and money management.
                </p>
            </div>
        </div>
    )
}