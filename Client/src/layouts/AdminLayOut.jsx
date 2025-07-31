import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/AppSidebar";
const AdminLayOut = ({ children }) => {
  return (
    <SidebarProvider className="flex min-h-screen bg-gray-100 dark:bg-zinc-900">
      <AppSidebar />
      <main className="">
        <SidebarTrigger />
        <div className="sm:m-10">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default AdminLayOut;
