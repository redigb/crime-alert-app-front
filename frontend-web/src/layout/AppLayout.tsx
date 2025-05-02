import { Outlet } from "react-router-dom";
import SideBarApp from "../components/SideBarApp";

export default function AppLayout() {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <SideBarApp />
                <main>
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
}
