'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import Link from 'next/link'


type props = {
    
}
const SidebarLink = ({data}:props) => {
    const path = usePathname()
    console.log(path)
    console.log(data)
  return (
    <div>
        <Link href={data.href} >

    <Button   variant={ path == data.href ? 'secondary' : 'default'} >{data.title}</Button>
        </Link>
    </div>
  )
}

export default SidebarLink
