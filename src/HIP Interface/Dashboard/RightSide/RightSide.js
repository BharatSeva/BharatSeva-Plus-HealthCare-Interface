import Appointment from "./Appointment/Appointment"
import CreatePatientRecord from "./CreatePatientRecord/Cr_PatientRecord"
import CreatePatientD from "./Create_PatientD/CreatePatient"
import Home from "./Home/Home"
import "./RightSide.css"
import Setting from "./Setting/Setting"
import ViewRecord from "./ViewRecord/ViewRecord"
import ViewPatientBioData from "./View_PatientBioData/ViewPatientBioData"
import { Routes, Route } from "react-router-dom"
import IsNavBarAuthenticated from "../../IsNavBarAuthenticated"
import About from "./about";

export default function RightSide() {

    return (
        <>
            <div className="RightSideBar DisplayFlexJustify">
                <Routes>
                    <Route element={<IsNavBarAuthenticated />}>
                        <Route index element={<About />} />
                        <Route path="home" element={<Home />} />
                        <Route path="viewrecords" element={<ViewRecord />} />
                        <Route path="createrecords" element={<CreatePatientRecord />} />
                        <Route path="viewpatientbiodata" element={< ViewPatientBioData />} />
                        <Route path="createpatientbiodata" element={<CreatePatientD />} />
                        <Route path="setting" element={<Setting />} />
                        <Route path="appointment" element={<Appointment />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}