'use client'

import Image from "next/image";
import { useState } from "react";
import {Button} from '@/components/ui/button'
export default function Home() {
  const [user,setUser] = useState(true)
const handelbtn = ()=>{
  setUser(!user)
console.log(user)
}
console.log('body')

return (
  <div className="">
   <Button onClick={handelbtn} >click</Button>
  </div>
)
}
