
import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
type props = {
    children:React.ReactNode
}

const layout = ({children}:props) => {
  console.log('layout')
  return (
    <div className="min-h-screen flex flex-col" >
      <Header/>
<main className="flex items-center justify-center flex-1" >
{children}
</main>
<Footer/>
     
    </div>
  )
}

export default layout
