import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { RootLayoutProps } from "@/interface/RootLayoutProps";

export default function LayoutAdmin({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="container mx-auto px-0 max-w-full">{children}</div>
    </SidebarProvider>
  );
}
