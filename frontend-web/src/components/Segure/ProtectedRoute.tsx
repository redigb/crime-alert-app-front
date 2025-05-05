import { Navigate, Outlet } from "react-router-dom";
// interface
import { Props } from "./interface"

export const ProtectedRoute = ({isAllowed, children}: Props) => {
    /*if (!isAllowed) {
        return <Navigate to="/" />;
    }  */
    return children ? <>{children}</> : <Outlet />;
} 