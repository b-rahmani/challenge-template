import { footerMenu } from "@/lib/data"
import { Menu } from "@/lib/typesDefinition"
import Link from "next/link"

const FooterMenu = () => {
    return (
        <div className="grid md:grid-cols-3 gap-10 lg:gap-20">
            {
                footerMenu.map((menu: Menu) => <div
                    className="flex flex-col gap-3 text-md"
                    key={menu.id}>
                    <Link
                        href={menu.link}
                        className="font-bold text-white"
                    >{menu.name}</Link>
                    {
                        menu.child?.map((childMenu: Menu) => <Link
                            href={childMenu.link}
                            key={childMenu.id}
                            className="text-white/50 text-sm"
                        >
                            {childMenu.name}
                        </Link>)
                    }
                </div>
                )
            }
        </div>
    )
}
export { FooterMenu }
