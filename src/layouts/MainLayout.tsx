import { Outlet } from "react-router-dom"
import SideNavbar from "../components/common/SideNavbar"

function MainLayout() {
  return (
    <main className="flex min-h-screen">
        <div className="left bg-neutral-900  w-[20%] p-4 ">
            <SideNavbar/>
        </div>
        <div className="right bg-neutral-100 w-full p-6">
           <Outlet />
        </div>
      
    </main>
  )
}

export default MainLayout
