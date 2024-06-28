import Facebook from "@/images/Facebook"
import Instagram from "@/images/Instagram"
import Pinterest from "@/images/Pinterest"
import Twitter from "@/images/Twitter"

const Socials = () => {
    return (
        <div className="flex items-center justify-center gap-5 [&>svg]:w-6 [&>svg]:aspect-square py-1 ps-6">
            <Facebook />
            <Twitter />
            <Pinterest />
            <Instagram />
        </div>
    )
}
export { Socials }
