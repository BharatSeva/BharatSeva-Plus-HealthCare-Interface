import React, { useState } from "react" // removed useEffect
import "./Cr_PatientRecord.css"
import Select from 'react-select'
import { PostData } from "../../../LoadData"
import { Navigate } from "react-router-dom"



export default function CreatePatientRecord() {

    const DisplayText = document.querySelector(".PatientProblemRecord_view")

    const [PRCreator, SetPRCreator] = useState({})
    const [IsLoading, SetIsLoading] = useState();
    const [IsLoaded, SetIsLoaded] = useState({
        IsLoaded: false,
        Issuetxtlimit: 20,
        Descriptiontxtlimit: 50,
        IsRedirected: false
    });

    function OnHandleChange(e) {
        const { name, value } = e.target
        SetPRCreator(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handlechange(selectedOptions) {
        SetPRCreator(prev => ({
            ...prev,
            "medical_severity": selectedOptions.value
        }))
    }
    
    async function Putdata(e) {
        e.preventDefault();
        DisplayText.classList.add("Display_none")

        SetIsLoaded((p) => ({ ...p, IsLoaded: true }))
        try {
            const { data, res } = await PostData(`/records/create`, PRCreator)
            SetIsLoading(data.message)
            if (res.status === 405) { SetIsLoaded((p) => ({ ...p, IsRedirected: true })) }
            SetIsLoaded((p) => ({ ...p, IsLoaded: false }))
            DisplayText.classList.remove("Display_none")
        } catch (err) {
            SetIsLoading(err.message)
        }
        SetIsLoaded((p) => ({ ...p, IsLoaded: false }))
        DisplayText.classList.remove("Display_none")
    }

    const options = [
        { label: "Normal - 3/2", value: "Normal" },
        { label: "Low - 1/0", value: "Low" },
        { label: "High - 7/6", value: "High" },
        { label: "Severe - 9/8", value: "Severe" },
    ]

    const Issuetxt = document.getElementsByName("p_problem")
    const Descripttxt = document.getElementsByName("description")

    function DescriptiontextLimit(e) {
        if ((Descripttxt[0].value.toString().length) <= 20) {
            SetIsLoaded((p) => ({ ...p, Descriptiontxtlimit: (50 - (Descripttxt[0].value.length)) }))
        }
    }
    function IssuetextLimit(e) {
        if ((Issuetxt[0].value.toString().length) <= 20) {
            SetIsLoaded((p) => ({ ...p, Issuetxtlimit: (20 - (Issuetxt[0].value.length)) }))
        }
    }

    return (
        <>
            {IsLoaded.IsRedirected && (<Navigate to='/healthcare/login' replace={true} />)}
            <div className="PatientProblemRecord">
                <div className="PatientProblemRecordCreator">
                    <h2>Create Patient Record</h2>

                    <form onSubmit={Putdata}>

                        <label>Health ID</label>
                        <input type="text" name="health_id" onChange={OnHandleChange} required></input><br></br>

                        <label>Medical Severity</label>
                        <Select className="SelectOptions" options={options} name="medical_severity" onChange={handlechange} required></Select>

                        <label>Issue</label>
                        <textarea onChange={OnHandleChange} name="p_problem" onKeyUp={IssuetextLimit} maxLength={20} required></textarea>
                        <p className="CreateRecordsTxtlimit">Length of Issue Should Not Be More Than {IsLoaded.Issuetxtlimit}</p>
                        <br></br>


                        <label>Description</label>
                        <textarea onChange={OnHandleChange} onKeyUp={DescriptiontextLimit} name="description" maxLength={50} required></textarea>
                        <p className="CreateRecordsTxtlimit">Length of Description Should Not Be More Than {IsLoaded.Descriptiontxtlimit}</p>
                        <br></br>

                        <button id="CreateRecordBtn" disabled={IsLoaded.IsLoaded} >{IsLoaded.IsLoaded ? "Validating...." : "Create"}</button>
                    </form>

                    <p className="WarningCr_patient"><strong>Note : </strong> Limited Number of Records Can Be Created !</p>
                </div>
            </div>

            <div className="PatientProblemRecord_view">
                <p>{IsLoading}</p>
            </div>
        </>
    )
}