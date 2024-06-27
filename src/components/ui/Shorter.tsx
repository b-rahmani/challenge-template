import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Shorter = () => {
    return (
        <div className="container">
            <div className="bg-secondary/70 bg-[url('/bg-boost-desktop.svg')] bg-[20%_90%] text-secondary-foreground w-full py-10 px-12 rounded-sm translate-y-[-50%] ">
                <div className="flex flex-col md:flex-row w-full justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
                    <Input
                        type="url"
                        placeholder="Shorten a link here...."
                        className="w-full md:w-[85%] max-w-5xl rounded-sm px-6 py-6 bg-white text-black placeholder:text-black placeholder-current caret-black"
                    />
                    <Button
                        type="submit"
                        className="w-full md:w-auto px-10 py-6 bg-primary">
                        Shorten it!
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Shorter
