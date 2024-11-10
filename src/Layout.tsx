import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Sidebar } from "./components/Sidebar"
import { Outlet } from "react-router-dom"

// export default function Layout({ children }: { children: React.ReactNode }) {
const Layout = () => {
    return (

        <SidebarProvider>
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
