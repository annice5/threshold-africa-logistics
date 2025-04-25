import React from "react"
import Hero from "./components/hero"
import AboutLanding from "./components/aboutLanding"
import ServicesLanding from "./components/servicesLanding"
import MarketSectors from "./components/marketSectors"
import Partners from "./components/partners"
import Testimonials from "./components/testimonials"
import ContactLanding from "./components/contactLanding"


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutLanding/>
      <ServicesLanding/>
      <MarketSectors/>
       <Partners/>
      <Testimonials/>
      <ContactLanding/>
    </div>
  )
}

export default Home;