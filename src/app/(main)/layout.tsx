import Sidebar  from "@/components/Sidebar"

type props = {
    children:React.ReactNode
}
const layout = ({children}:props) => {
  return (
    <>
   <Sidebar/>
    <main className="pl-[256px] min-h-screen">
<div className="bg-red-200 min-h-screen">
{children}
</div>
    </main>
    </>
  )
}

export default layout
