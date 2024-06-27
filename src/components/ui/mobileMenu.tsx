"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { menuData } from "@/lib/data";

const MobileMenu = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) => {

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full space-y-2"
        >

            <CollapsibleContent className="space-y-2">
                <div className="bg-secondary text-secondary-foreground w-full px-4 py-6 rounded-md divide-y-[1px] divide-white/50">
                    <nav className="pb-6">
                        <ul className="flex flex-col items-center gap-6 text-white font-bold ">
                            {
                                menuData.map(menu => <li key={menu.id}>
                                    <a href={menu.link}>{menu.name}</a>
                                </li>)
                            }
                        </ul>
                    </nav>
                    <div className="flex flex-col w-full gap-1 pt-4">
                        <Button variant="ghost" className="rounded-full">login</Button>
                        <Button variant="default" className="rounded-full">sign up </Button>
                    </div>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}

export { MobileMenu }
