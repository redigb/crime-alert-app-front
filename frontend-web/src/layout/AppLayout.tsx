import { Outlet } from "react-router-dom";
import SideBarApp from "../components/SideBarApp";

export default function AppLayout() {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <SideBarApp />
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-[#0B0B13] via-[#141421] to-[#0B0B13]">
          <div className="p-4 md:p-6 2xl:p-10 h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
