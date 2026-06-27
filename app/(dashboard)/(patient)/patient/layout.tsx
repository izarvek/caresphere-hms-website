import PatientSidebar from "@/features/patient/PatientSidebar";
import PatientTopbar from "@/features/patient/PatientTopbar";

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 ">
      <div className="flex">
        <PatientSidebar/>
        <div className="flex flex-col w-full h-full">
          <PatientTopbar/>
          <div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
