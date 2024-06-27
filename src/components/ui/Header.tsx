'use client'
import { useState } from "react"
import { Logo } from "@/images/svgIcons";
import { MobileMenu } from "@/components/ui/mobileMenu";
import { Nav } from "@/components/ui/Nav";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <header className="py-8 container">
            <div className="flex items-center">
                <Logo className="w-32 aspect-[3/1] shrink-0" />
                <Nav
                    setIsOpen={setIsOpen}
                    className="w-full flex items-center justify-between"
                />
            </div>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}
export default Header
