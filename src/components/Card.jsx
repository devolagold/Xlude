export default function Card(props) {
    
    return (
        <div className="card flex flex-col space-y-16 px-5 py-8 bg-grey-2 hover:bg-black hover:text-white md:w-1/3 rounded-[10px]"  data-aos='fade-up'>
            <div className="icon bg-primary w-fit p-3 rounded-full md:w-1/4 xl:w-max">
                <img src={props.icon} width="30px" />
            </div>
            <div className="details">
                <h1 className='mt-7 mb-3 text-[24px] text-primary font-semibold md:mb-1 md:mt-0  lg:mb-3 md:text-[18px] lg:text-[20px] xl:text-[24px]'>
                    {props.title}
                </h1>
                <p className='text-[18px] leading-5 tracking- md:text-left md:leading-3 lg:leading-5 md:text-[10px] xl:text-[18px]'>
                    {props.paragraph}
                </p>
            </div>
        </div>
    )
}