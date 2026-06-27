import ReceptionistSidebar from "@/features/receptionist/ReceptionistSidebar";
import ReceptionistTopbar from "@/features/receptionist/ReceptionistTopbar";

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 ">
      <div className="flex">
        <ReceptionistSidebar/>
        <div className="flex flex-col w-full h-full">
          <ReceptionistTopbar/>
          <div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
