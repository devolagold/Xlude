import otherBanks from '../assets/other-banks.jpg'
import xludeOwn from '../assets/xlude-own.jpg'

export default function Difference() {
    return (
        <div className="flex flex-col my-8 items-center mx-auto p-5 space-y-7 md:space-x-7 md:px-8 lg:px-8 xl:px-14 md:flex-row md:space-y-0">
            <div className="md:w-1/2" data-aos='fade-left'>
                 <img src={otherBanks} />
             </div>

            <div className="md:w-1/2" data-aos='fade-right'>
                <img src={xludeOwn} alt="" />
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