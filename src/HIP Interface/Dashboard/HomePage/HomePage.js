import "./HomePage.css"
import Register from "../../SignAndLogin/Register/Register"
import SignIN from "../../SignAndLogin/SignIn/SignIn"
import DashComponents from "../DashboardComponents"
import NotFound from "../NotFound"
import ErrorElements from "../ErrorElement"
import IsAuthenticated from "../../IsAuthenticated"

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom" //Navigate is removed
import IndexPage from "../IndexPage"
export default function HomePage() {

    const route = createBrowserRouter(createRoutesFromElements(
        <Route>
            {/* <Route path="/" element={<Navigate to="/healthcare" replace />} /> */}
            <Route path="/healthcare" errorElement={<ErrorElements />}>
                <Route path="" element={<IndexPage />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<SignIN />} />
                <Route element={<IsAuthenticated />}>
                    <Route path="dashboard/*" element={<DashComponents />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    ))

    return (
        <>
            <RouterProvider router={route} />
        </>
    )

}