import { Button } from "@/components/ui/button";
import { menuData } from "@/lib/data";
import { HamburgerIcon } from "@/images/menu";

const Nav = ({ setIsOpen, className }: { setIsOpen?: any, className: string }) => {
    return (
        <div className={className}>

            <nav className="px-2 ms-8 hidden lg:block">
                <ul className="flex items-center gap-6 text-gray-500 font-bold ">
                    {
                        menuData.map(menu => <li key={menu.id}>
                            <a href={menu.link}>{menu.name}</a>
                        </li>)
                    }
                </ul>
            </nav>
            <div className="hidden lg:flex items-center gap-1">
                <Button variant="ghost" className="rounded-full">login</Button>
                <Button variant="default" className="rounded-full">sign up </Button>
            </div>
            <HamburgerIcon
                className="w-8 ms-auto cursor-pointer lg:hidden"
                click={() => setIsOpen((prev: boolean) => !prev)}
            />
        </div>
    )
}
export { Nav }
