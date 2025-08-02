// it is going to look for children, because we want to display the pages
import {Separator} from "@/components/ui/separator"
import Sidebar from './Sidebar'

// We do need to setup the type and children is going to be called to react.ReactNode
function DashboardLayout({children}:{children: React.ReactNode}) {
    // We want render the children & the sidebar
  return (
    <>
    <h2 className="text-2x1 pl-4">Dashboard</h2>
    <Separator className="mt-2" />
    <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
            <Sidebar />
        </div>
        <div className='lg:col-span-10 px-4'>
            {children}
        </div>
    </section>
    </>
  )
}

export default DashboardLayout