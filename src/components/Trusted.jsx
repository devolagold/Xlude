import spotify from '../assets/spotify.svg'
import spectranet from '../assets/spectranet.svg'
import netflix from '../assets/netflix.svg'
import sportybet from '../assets/sportybet.svg'

export default function Trusted() {
    return (
        <div className="bg-black text-white my-8 py-8 flex flex-col space-y-6 items-center justify-center text-center mx-auto p-5 md:px-14">
            <p className='text-lg leading-5 tracking-tight lg:text-xl'>
                We are trusted by over 20,000+ business for their order fulfillment needs.
            </p>
            <div className="grid items-center grid-cols-2 gap-8 md:grid-cols-4 md:gap-16 md:mx-12 md:w-full">
                <img src={spotify} alt="" />
                <img src={spectranet} alt="" />
                <img src={netflix} alt="" />
                <img src={sportybet} alt="" />
            </div>
        </div>
    )
}