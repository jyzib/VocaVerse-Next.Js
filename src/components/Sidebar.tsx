import React from 'react'
import { cn } from '@/lib/utils'
import SidebarLink from './SidebarLink'
const navbar = [
    {title:'home',href:'/learn'},
    {title:'about',href:'/about'},
    {title:'btn',href:'/button'},
]

const Sidebar = () => {
  return (
    <div className={cn('flex min-h-screen bg-blue-100 lg:w-[256px] lg:fixed border-r-2 border-white')}>
<ul>

    
{navbar.map((e,i)=>{
 return (
<SidebarLink key={i} data={e}/>
 )
})}
</ul>
    </div>
  )
}

export default Sidebar
