import Hero from "./Hero"
import Meta from "./Meta"
import ThirdSection from "./ThirdSection"

function Home() {
  return (
        <>
    <div className="max-w-[1200px] mx-auto ">
      <Hero/>
      <Meta/>
    </div>
    <ThirdSection />
    </>
  )
}

export default Home