import NurseSidebar from "@/features/nurse/NurseSidebar";
import NurseTopBar from "@/features/nurse/NurseTopbar";

export default function NurseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 ">
      <div className="flex">
        <NurseSidebar />
        <div className="flex flex-col w-full h-full">
          <NurseTopBar />
          <div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
