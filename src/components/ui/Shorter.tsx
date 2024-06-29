'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { shortUrl } from "@/lib/typesDefinition"
import { useState } from "react"
import Shorded from "@/components/ui/Shorded"

const Shorter = () => {

    const [url, setUrl] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [urls, setUrls] = useState<shortUrl[]>([])

    const getShorterLink = () => {
        if (url.trim().length < 1) {
            setError('please add a link')
        } else {
            setError(null)

            var data = new URLSearchParams();

            data.append("url", url)
            fetch("https://cleanuri.com/api/v1/shorten", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: data
            })
                .then(res => res.json())
                .then(data => setUrls(prev => [...prev, { "main": url, "shorted": data.result_url }]))
                .catch(error => {
                    setError(error)

                })
        }
    }

    return (
        <div className="container">
            <div className="">

                <div className="translate-y-[-50%] bg-secondary/70 bg-[url('/bg-boost-desktop.svg')] bg-[20%_90%] text-secondary-foreground w-full py-10 px-12 rounded-sm  ">
                    <div className="flex flex-col md:flex-row w-full justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
                        <Input
                            type="url"
                            placeholder="Shorten a link here...."
                            className={`w-full md:w-[85%] max-w-5xl rounded-sm px-6 py-6 bg-white text-black  placeholder-current caret-black ${error ? "placeholder:text-red-600 focus-visible:ring-red-600" : "placeholder:text-black"}`}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <Button
                            type="button"
                            onClick={getShorterLink}
                            className="w-full md:w-auto px-10 py-6 bg-primary"
                        >
                            Shorten it!
                        </Button>
                    </div>

                </div>
                <div className="flex flex-col gap-4">
                    {
                        urls.map((url) => <Shorded key={url.main} url={url} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Shorter
