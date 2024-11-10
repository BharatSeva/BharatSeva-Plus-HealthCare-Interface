import { Navigate, Outlet } from "react-router-dom";
export default function IsNavBarAuthenticated() {
    try {
        const HealthCare = JSON.parse(sessionStorage.getItem("BharatSevahealthCare"))
        if (HealthCare.IsAuthenticated && HealthCare.token && HealthCare.name && HealthCare.healthcareId) {
            return (
                <>
                    <Outlet />
                </>
            )
        }
    } catch (err) {
        alert("Something Got Wrong With Your Session! Please Login Again!")
        return <Navigate to='/healthcare/login' />
    }
    return (<Outlet />)
}