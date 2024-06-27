import { Button } from '@/components/ui/button'
import Image from '@/lib/Image'
import working from '@/images/working.svg'

const Hero = () => {
    return (
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between pb-28">
            <div className='text-center md:text-start'>
                <h1 className='font-bold text-5xl lg:text-7xl py-0.5'> more than just shorter links</h1>
                <p className='font-bold text-base lg:text-2xl text-gray-400 py-1'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <Button variant="default" className='rounded-full my-4'>Get Started</Button>
            </div>
            <div className='relative w-full md:w-1/2 aspect-[4/3] shrink-0'>

                <Image
                    src={working}
                    alt='working'
                    className='absolute top-0 start-0 md:translate-x-[25%] w-full h-full z-10'
                />
            </div>
        </div>
    )
}
export default Hero
