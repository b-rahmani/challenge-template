import Shorter from "@/components/ui/Shorter";

const Advanced = () => {
    return (
        <div className="bg-background">
            <Shorter />
            <div className="container text-center -mt-8">
                <h2 className="text-2xl font-bold text-black">Advanced Statics</h2>
                <p className="text-lg font-bold text-black/50 py-4">
                    Track how your links are performing across the web with our advanced statics dashboard
                </p>
                <div className="py-8 grid md:grid-cols-3 relative gap-4 z-20">
                    <div className="bg-white aspect-[3/2]"></div>
                    <div className="bg-white aspect-[3/2]"></div>
                    <div className="bg-white aspect-[3/2]"></div>
                    <div className="absolute -z-10 w-full h-4 bg-primary left-0  top-1/2 translate-y-[50%]"></div>
                </div>
            </div>

        </div>
    )
}
export default Advanced
