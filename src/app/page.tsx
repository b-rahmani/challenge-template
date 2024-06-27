'use client'
import { PostShortenUrl } from "@/api/api";
import Advanced from "@/components/ui/Advanced";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";

export default function Home() {
  // const data = await PostShortenUrl("https://ui.shadcn.com/docs/components/button")
  const getData = () => {
    PostShortenUrl("https://ui.shadcn.com/").then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }



  // const setIsOpenMenu=setIsOpen as BooleanSetter

  return (
    <main className="">
      <Header />
      <Hero />
      
      <Advanced />
      <div className="flex items-center justify-between">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veniam ad id quae ipsum odit asperiores non, earum nostrum fuga voluptatibus deserunt aspernatur quisquam a ea fugiat natus aut dolor commodi, voluptate ex fugit? Ea, autem non? Sunt delectus facilis fugit numquam soluta quaerat consectetur reiciendis perspiciatis officiis alias illum nesciunt ducimus pariatur, earum voluptate omnis dolorem nisi. Saepe corporis ducimus nulla rem excepturi odio illum laboriosam. Saepe dolores minus, veritatis fuga sit laborum libero, delectus, porro totam non deserunt maiores eaque. Ullam qui eligendi molestiae ipsum repellendus molestias, assumenda accusamus tenetur aspernatur dolor aperiam laborum eos, facilis minima sequi.</div>
    </main>
  );
}
