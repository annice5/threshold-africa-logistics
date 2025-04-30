import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/rootLayout"
import About from "./components/pages/about"
import Service from "./components/pages/service"
import Contact from "./components/pages/contact"
import Home from "./components/pages/home"
import MarketSector from "./components/pages/marketSector"
import Partners from "./components/pages/partners"





function App(){
const router = createBrowserRouter([
  {
     path: '/',
     element: <RootLayout/>,
     children: [
              {
               index: true,
               element: <Home/>
              },
             
              {
                path: 'about',
                element: <About/>
              },
              {
                path: 'service',
                element: <Service/>
              },
              {
                path: 'marketsector',
                element: <MarketSector/>
              },
              {
                path: 'partners',
                element: <Partners/>
              },
              {
                path: 'contact',
                element: <Contact/>
              }
     ]
  }
])

return(
  <RouterProvider router= {router}/>
  
)
}
export default App