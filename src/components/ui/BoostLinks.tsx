import { Button } from '@/components/ui/button'

const BoostLinks = () => {
    return (
        <div className="bg-secondary/80 bg-[url('/bg-boost-desktop.svg')] bg-[20%_90%] text-secondary-foreground py-8">
            <div className="container text-center">

                <h3 className="text-3xl font-bold">Boost your links today</h3>
                <Button variant="default" className='rounded-full mt-6'>Get Started</Button>
            </div>
        </div>
    )
}
export default BoostLinks
