import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Sidebar } from "./Sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    const cookieStore = document.cookie;
    const defaultOpen = cookieStore.split("sidebar=")[1] === "true";
    console.log(cookieStore, defaultOpen)

    return (

        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <SidebarInset>
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>

    )
}

export default Layout
