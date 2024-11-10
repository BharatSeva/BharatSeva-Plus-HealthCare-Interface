import { useState } from "react" // Remove useEffect
import "./ViewPatientBioData.css"
import { FetchData } from "../../../LoadData"
import { Navigate } from "react-router-dom"

export default function ViewPatientBioData() {

    const [Pat_BioData, SetPat_BioData] = useState()
    const [Isloading, SetIsloading] = useState({
        IsFetched: false,
        IsRedirect: false
    })
    const [IsFetched, SetIsFetched] = useState()




    async function GetPatientBioData(HID) {
        SetIsloading((p) => ({ ...p, IsFetched: true }))
        try {
            const { data, res } = await FetchData(`/patientbiodata/get?healthID=${HID}`)
            SetPat_BioData(data)
            SetIsFetched(true)
            if (res.status === 405) { SetIsloading((p) => ({ ...p, IsRedirect: true })) }
        } catch (err) {
            console.log(err)
            alert("Could Not Connect to Server...")
        }
        SetIsloading((p) => ({ ...p, IsFetched: false }))
    }


    function CallPBD(e) {
        if (e.key === 'Enter') {
            FetchDataPBD();
        }
    }

    function FetchDataPBD() {
        // Use === instead of ==
        if (document.getElementById("HID_inputBIOData").value.toString().length <= 30) {
            GetPatientBioData(document.getElementById("HID_inputBIOData").value)
            return;
        }
        alert("Enter Correct HealthID")
    }

    let Patient_Biodata
    if (Pat_BioData) {
        if ((Pat_BioData)) {
            Patient_Biodata =
                (
                    <div className="ViewPatient_BiO PatientBioData">
                        <div className="ViewPatientDataContainer">

                            <div key={1}><p>HealthID:</p><p>{Pat_BioData.health_id}</p></div>
                            <div key={2}><p>Fname:</p><p>{Pat_BioData.fname}</p></div>
                            <div key={3}><p>Middle Name:</p><p>{Pat_BioData.middlename}</p></div>
                            <div key={4}><p>Lname:</p><p>{Pat_BioData.lname}</p></div>
                            <div key={5}><p>Sex:</p><p>{Pat_BioData.sex}</p></div>
                            <div key={6}><p>DOB:</p><p>{Pat_BioData.dob ? Pat_BioData.dob : "--/--"}</p></div>
                            <div key={7}><p>Blood Group:</p><p>{Pat_BioData.bloodgrp}</p></div>
                            <div key={8}><p>Siblings:</p><p>{Pat_BioData.sibling}</p></div>
                            <div key={9}><p>Weight:</p><p>{Pat_BioData.weight}</p></div>
                            <div key={10}><p>BMI:</p><p>{Pat_BioData.bmi}</p></div>
                            <div key={11}><p>Twin:</p><p>{Pat_BioData.twin}</p></div>
                            <div key={12}><p>Primary From :</p><p>{Pat_BioData.primary_location}</p></div>
                            <div key={14}><p>Aadhar Number:</p><p>{Pat_BioData.aadhar_number}</p></div>
                            <div key={15}><p>Marriage Status:</p><p>{Pat_BioData.marriage_status}</p></div>
                            <div key={16}><p>Mobile Number:</p><p>{Pat_BioData.mobilenumber}</p></div>
                            <div key={17}><p>Email:</p><p>{Pat_BioData.email}</p></div>
                            <div key={18}><p>Father Name:</p><p>{Pat_BioData.fathername}</p></div>
                            <div key={19}><p>Mother Name:</p><p>{Pat_BioData.mothername}</p></div>
                            <div key={20}><p>Emergency Number:</p><p>{Pat_BioData.emergencynumber}</p></div>
                            <div key={13}><p>Created At:</p><p>{Pat_BioData.created_at}</p></div>
                            <div key={13}><p>Last Updated At:</p><p>{Pat_BioData.updated_at}</p></div>
                            <div key={120}><p>HealthcareID:</p><p>{Pat_BioData.healthcare_id}</p></div>
                        </div>
                    </div>
                )

        }
    } else {
        Patient_Biodata = <p style={{ color: "yellow" }}>No One Found With Given HealthID</p>
    }


    return (
        <>
            {Isloading.IsRedirect && (<Navigate to='/healthcare/login' replace={true} />)}
            <div className="ViewPR">
                <h2>View Patient Bio Data</h2>

                <div className="ViewPR_inputHID">
                    <label>Enter Patient Health ID</label>
                    <input id="HID_inputBIOData" type="text" name="HID" placeholder="Enter Health ID" onKeyUp={CallPBD} />
                    <div className="SearchIcon" onClick={FetchDataPBD} ><i className="fa-solid fa-magnifying-glass"></i></div>

                </div>

                {Isloading.IsFetched ? "Loading..." :

                    IsFetched ? (<div>{Patient_Biodata}</div>) : "Records Will Show Up Here"

                }



            </div>
        </>
    )
}