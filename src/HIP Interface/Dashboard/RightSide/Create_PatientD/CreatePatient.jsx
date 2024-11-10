import "./CreatePatient.css"
import Select from 'react-select'
import { useState } from "react"
import { PostData } from "../../../LoadData"
import { Navigate } from "react-router-dom"
export default function CreatePatientD() {
    const Togglesuccesstxt = document.querySelector(".CreatePatient_viewAfterSuccess")
    const [SituationContainer, SetSituationContainer] = useState();
    const [IsLoaded, SetIsLoaded] = useState({
        IsLoaded: false,
        IsRedirected: false
    });
    const [CPFormData, SetDPFormData] = useState({
        health_id: "",
        fname: "",
        middlename: "",
        lname: "",
        sex: "",
        dob: "",
        bloodgrp: "",
        bmi: "",
        marriage_status: "",
        weight: "",
        email: "",
        mobilenumber: "",
        aadhar_number: "",
        primary_location: "",
        sibling: "",
        twin: "",
        fathername: "",
        mothername: "",
        emergencynumber: "",
        address: {
            country: "India",
            state: "UP",
            city: "Kashi",
            landmark: "BHU"
        }
    })

    function OnChangeCPRData(e) {
        const { name, value } = e.target
        SetDPFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function OnChangeSelectPDC(e) {
        const { name, value } = e
        SetDPFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function PostFetchDataForPBD(e) {
        e.preventDefault();
        const HealthCareId = document.getElementById("healthId")
        if (HealthCareId.value.length >= 30) {
            alert("HealthID Must not Be 30 or more Characters Long!")
            return
        }
        FetchDataForPBD();
    }

    async function FetchDataForPBD() {
        Togglesuccesstxt.classList.add("Display_none")
        SetIsLoaded((p) => ({ ...p, IsLoaded: true }))

        try {
            const { data, res } = await PostData(`/patientbiodata/create`, CPFormData) // removed err variable when it was never used
            if (res.status === 405) { SetIsLoaded((p) => ({ ...p, IsRedirected: true })) }
            SetSituationContainer(data.status)
        } catch (error) {
            SetSituationContainer(error.message)
        }
        Togglesuccesstxt.classList.remove("Display_none")
        SetIsLoaded((p) => ({ ...p, IsLoaded: false }))
    }


    const twin = [{ "label": "Yes", "value": "Yes", "name": "twin" }, { "label": "No", "value": "No", "name": "twin" }]
    const sibling = [{ "label": "Yes", "value": "Yes", "name": "sibling" }, { "label": "No", "value": "No", "name": "sibling" }]
    const sex = [{ "label": "☕", "value": "☕", "name": "sex" }, { "label": "😎", "value": "😎", "name": "sex" }, { "label": "🙄", "value": "🙄", "name": "sex" }]
    const Marriage = [{ "label": "Married", "value": "Married", "name": "MarriageStatus" }, { "label": "Dharti Ka Bhoj", "value": "Dharti Ka Bhoj", "name": "MarriageStatus" }]

    return (
        <>
            {IsLoaded.IsRedirected && (<Navigate to='/healthcare/login' replace={true} />)}
            <div className="CreatePatientContainer">

                <div className="CreatePatient">
                    <h2>Create Patient Data</h2>
                    <div className="CreateContainer">
                        <form onSubmit={PostFetchDataForPBD} method="POST">
                            <label>First Name</label><br></br>
                            <input type="text" className="PDContainer" name="fname" placeholder="First Name" required onChange={OnChangeCPRData} /><br></br>


                            <label>Middle Name</label><br></br>
                            <input type="text" className="PDContainer" name="middlename" placeholder="Middle Name" onChange={OnChangeCPRData} /><br></br>

                            <label>Last Name</label><br></br>
                            <input type="text" className="PDContainer" name="lname" placeholder="Last Name" required onChange={OnChangeCPRData} /><br></br>

                            <label>Sex</label><br></br>
                            <Select className="Siblings PDC" options={sex} onChange={OnChangeSelectPDC} ></Select>

                            <label>DOB</label><br></br>
                            <input type="date" className="PDContainer" name="dob" placeholder="DOB" required onChange={OnChangeCPRData} /><br></br>

                            <label>Blood Group</label><br></br>
                            <input type="text" className="PDContainer" name="bloodgrp" placeholder="Blood Group" required onChange={OnChangeCPRData} /><br></br>

                            <label>BMI</label><br></br>
                            <input type="text" className="PDContainer" name="bmi" placeholder="BMI" required onChange={OnChangeCPRData} /><br></br>

                            <label>Marriage Status</label><br></br>
                            <Select className="Siblings PDC" options={Marriage} name="marriage_status" onChange={OnChangeSelectPDC} ></Select>

                            <label>Weight</label><br></br>
                            <input type="number" className="PDContainer" name="weight" placeholder="Weight" required onChange={OnChangeCPRData} /><br></br>

                            <label>Email</label><br></br>
                            <input type="email" className="PDContainer" name="email" placeholder="Email" required onChange={OnChangeCPRData} /><br></br>

                            <label>Mobile Number</label><br></br>
                            <input type="number" className="PDContainer" name="mobilenumber" placeholder="Mobile Number" required onChange={OnChangeCPRData} /><br></br>

                            <label>Aaddhar Number</label><br></br>
                            <input type="number" className="PDContainer" name="aadhar_number" placeholder="Aaddhar Number" required onChange={OnChangeCPRData} /><br></br>

                            <label>Primary From</label><br></br>
                            <input type="text" className="PDContainer" name="primary_location" placeholder="Primary From" required onChange={OnChangeCPRData} /><br></br>

                            <label>Siblings ?</label><br></br>
                            <Select className="Siblings PDC" options={sibling} name="sibling" onChange={OnChangeSelectPDC}></Select>

                            <label>Twin ?</label><br></br>
                            <Select className="Twin PDC" options={twin} name="twin" onChange={OnChangeSelectPDC}></Select>

                            <label>Father Name</label><br></br>
                            <input type="text" className="PDContainer" name="fathername" placeholder="पिता श्री" required onChange={OnChangeCPRData} /><br></br>

                            <label>Mother Name</label><br></br>
                            <input type="text" className="PDContainer" name="mothername" placeholder="माता श्री" required onChange={OnChangeCPRData} /><br></br>

                            <label>Emergency Contact Number</label><br></br>
                            <input type="text" className="PDContainer" name="emergencynumber" placeholder="Emergency Number" required onChange={OnChangeCPRData} /><br></br>
                            <input type="submit" id="SubmitBtnPDC" disabled={IsLoaded.IsLoaded} value={IsLoaded.IsLoaded ? "Validating.." : "Create"} />
                        </form>
                    </div>
                </div>

                <div className="CreatePatient_viewAfterSuccess DisplayFlexJustify Display_none">
                    <p style={{ color: "yellow" }}>{SituationContainer}</p>
                </div>
            </div>
        </>
    )
}