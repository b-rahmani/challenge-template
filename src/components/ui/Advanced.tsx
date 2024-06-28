import Shorter from "@/components/ui/Shorter";
import AdvanceCard from "@/components/ui/AdvanceCard";
import Customizable from "@/images/customizable";
import Recognition from "@/images/recognition";
import Record from "@/images/records";

const Advanced = () => {
    return (
        <div className="bg-background">
            <Shorter />
            <div className="container text-center -mt-8 pb-10">
                <h2 className="text-2xl font-bold text-black">Advanced Statics</h2>
                <p className="text-lg font-bold text-black/50 py-4">
                    Track how your links are performing across the web with our advanced statics dashboard
                </p>
                <div className="my-8 grid md:grid-cols-3 relative gap-4 z-20">
                    <AdvanceCard
                        heading="Brand Recognition"
                        content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
                    >
                        <Recognition />
                    </AdvanceCard>
                    <AdvanceCard
                        heading="Brand Recognition"
                        content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
                        className="mt-8">
                        <Record />
                    </AdvanceCard>
                    <AdvanceCard
                        heading="Brand Recognition"
                        content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
                        className="mt-16"
                    >
                        <Customizable />
                    </AdvanceCard>

                    <div className="absolute -z-10 w-4 h-full md:w-full md:h-4 bg-primary top-0 start-1/2 md:start-0 md:top-1/2 translate-x-[-50%] md:translate-y-[50%]"></div>
                </div>
            </div>

        </div >
    )
}
export default Advanced
