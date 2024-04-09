import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col max-w-[200px] gap-y-3 p-5' >
      <Button>default</Button>
      <Button variant={'primary'}>primary </Button>
      <Button variant={'primaryOutline'}>primary outline</Button>
      <Button variant={'secondary'}>Secondary </Button>
      <Button variant={'secondaryOutline'}>Secondary outline</Button>
      <Button variant={'danger'}>Danger </Button>
      <Button variant={'dangerOutline'}>Danger outline</Button>
      


    </div>
  )
}

export default page
