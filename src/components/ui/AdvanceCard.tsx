import { cn } from "@/lib/utils"

const AdvanceCard = ({ children, heading, content, className }: { children: React.ReactNode, heading: string, content: string, className?: string }) => {
    return (
        <div className={cn("bg-white aspect-[3/2] rounded-sm relative px-6 pt-10 ", className)}>
            <div className="absolute top-0 start-1/2 translate-x-[-50%] md:translate-x-0 md:start-5 translate-y-[-50%] rounded-full bg-secondary flex items-center justify-center aspect-square p-3">
                {children}
            </div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="text-base text-black/50 py-6">{content}</p>
        </div>
    )
}
export default AdvanceCard
