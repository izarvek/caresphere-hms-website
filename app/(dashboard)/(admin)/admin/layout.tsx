import AdminSidebar from "@/features/admin/AdminSidebar";
import AdminTopBar from "@/features/admin/AdminTopBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 ">
      <div className="flex">
        <AdminSidebar />
        <div className="flex flex-col w-full h-full">
          <AdminTopBar />
          <div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
