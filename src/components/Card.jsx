export default function Card(props) {
    return (
        <div className="card flex flex-col space-y-16 px-5 py-8 bg-grey-2 hover:bg-black hover:text-white md:w-1/3 rounded-[10px]">
            <div className="icon bg-primary w-fit p-3 rounded-full">
                <img src={props.icon}/>
            </div>
            <div className="details">
                <h1 className='mt-7 mb-3 text-[24px] text-primary font-semibold'>
                    {props.title}
                </h1>
                <p className='text-[18px] leading-5 tracking- md:text-left'>
                    {props.paragraph}
                </p>
            </div>
        </div>
    )
}