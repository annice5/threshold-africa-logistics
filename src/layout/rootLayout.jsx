import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ScrollToTop from "../components/scrollToTop"


const RootLayout = () => {
  return (
   <>
   <ScrollToTop/>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default RootLayout ;