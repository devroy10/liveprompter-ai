import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context/ContextProvider.js";
import App from "./App.tsx";
import './index.css'; // Adjust the path as necessary
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"
// import { Sidebar } from "./components/Sidebar.js";
// import "@picocss/pico";
// import './index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      {/* <SidebarProvider> */}
        {/* <Sidebar /> */}
        <App />
      {/* </SidebarProvider> */}
    </ContextProvider>
  </StrictMode>
);
