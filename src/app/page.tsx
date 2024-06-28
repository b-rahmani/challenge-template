'use client'
import { PostShortenUrl } from "@/api/api";
import Advanced from "@/components/ui/Advanced";
import BoostLinks from "@/components/ui/BoostLinks";
import Footer from "@/components/ui/Footer";
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
      <BoostLinks />
      <Footer />

    </main>
  );
}
