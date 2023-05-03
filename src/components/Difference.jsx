import otherBanks from '../assets/other-banks.png'
import xludeOwn from '../assets/xlude-own.png'

export default function Difference() {
    return (
        <div className="flex flex-col items-center mx-auto p-5 space-y-7 md:space-x-7 md:px-8 lg:px-8 xl:px-14 md:flex-row">
            <div className="md:w-1/2 mt-0 md:mt-0 grow-big" data-aos='fade-up'>
                <img src={otherBanks} alt="" className='w-100' />
            </div> 

            <div className="md:w-1/2 mt-0 md:mt-0 grow-big" data-aos='fade-up'>
                <img src={xludeOwn} alt="" className='w-100' />
            </div>   
        </div>
    )
}