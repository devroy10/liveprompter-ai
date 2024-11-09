import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"
// import { Sidebar } from "./components/Sidebar"
import { Outlet } from "react-router-dom"

// export default function Layout({ children }: { children: React.ReactNode }) {
export default function Layout() {
    return (
        <>
            <SidebarProvider>
                {/* <AppSidebar /> */}
                <SidebarInset>
                    <main>
                        {/* <Sidebar /> */}
                        {/* {children} */}
                        <Outlet />
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}
