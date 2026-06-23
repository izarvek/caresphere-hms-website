import UserSidebar from "@/features/user/UserSidebar";
import UserTopBar from "@/features/user/UserTopBar";


export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 ">
      <div className="flex">
        <UserSidebar />
        <div className="flex flex-col w-full h-full">
          <UserTopBar />
          <div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
