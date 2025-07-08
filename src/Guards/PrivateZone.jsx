import { Navigate } from "react-router";

const PrivateZone = ({children}) => {
    const user = localStorage.getItem("user");
    return user ? children : <Navigate to="/login"/>;
};

export default PrivateZone;

