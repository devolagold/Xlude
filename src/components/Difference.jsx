import otherBanks from '../assets/other-banks.jpg'
import xludeOwn from '../assets/xlude-own.jpg'

export default function Difference() {
    return (
        <div className="flex flex-col items-center mx-auto p-5 space-y-7 md:space-x-7 md:px-8 lg:px-8 xl:px-14 md:flex-row">
            <div className="md:w-1/2 mt-8 md:mt-0 grow-big" data-aos='fade-up'>
                <img src={xludeOwn} alt="" className='w-100' />
            </div> 

            <div className="md:w-1/2 mt-8 md:mt-0 grow-big" data-aos='fade-up'>
                <img src={otherBanks} alt="" className='w-100' />
            </div>   
        </div>
        // <div className="flex flex-col my-8 items-center mx-auto p-5 space-y-7 md:space-x-7 md:px-8 lg:px-8 xl:px-14 md:flex-row md:space-y-0">
        //     <div className="md:w-1/2" data-aos='fade-left'>
        //         <img src={otherBanks} alt="" />
        //     </div>

        //     <div className="md:w-1/2" data-aos='fade-right'>
        //         <img src={xludeOwn} alt="" />
        //     </div>
        // </div>
    )
}