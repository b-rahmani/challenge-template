import { Logo } from "@/images/svgIcons"
import { FooterMenu } from "@/components/ui/FooterMenu"
import { Socials } from "@/components/ui/Socials"


const Footer = () => {
    return (
        <footer className="py-8 bg-[#232027] text-white">
            <div className="container flex flex-col md:flex-row items-center md:items-start gap-y-4">
                <Logo className="w-32 aspect-[3/1] shrink-0 fill-white" />
                <div className="md:ms-auto flex flex-col md:flex-row gap-y-4 items-center md:items-start justify-between sm:w-2/3">
                    <FooterMenu />
                    <Socials />
                </div>
            </div>

        </footer>
    )
}
export default Footer
