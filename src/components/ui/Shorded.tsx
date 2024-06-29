import { Button } from "@/components/ui/button"
import { copyUrl, shortUrl } from "@/lib/typesDefinition"
import { useState } from "react"

const Shorded = ({ url }: { url: shortUrl }) => {

    const [copy, setCopied] = useState<copyUrl>("copy")

    const copyHandler = (): void => {
        navigator.clipboard.writeText(url.shorted)
        setCopied("copied!")
        setTimeout(() => {
            setCopied("copy")
        }, 5000);
    }

    return (
        <div>

            <div className="flex justify-between items-center p-4 bg-white rounded-sm">
                <p className="text-black ">{url.main}</p>
                <div className="flex items-center gap-4">

                    <p className="text-primary">{url.shorted}</p>
                    <Button
                        type="button"
                        onClick={copyHandler}
                        className={`${copy === "copy" ? "bg-primary" : "bg-secondary hover:bg-secondary/90"} text-sm text-white`}
                    >
                        {copy}
                    </Button>
                </div>

            </div>
        </div>
    )
}
export default Shorded
