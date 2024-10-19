import { useState } from "react" //Remove useEffect
import { Navigate } from "react-router-dom"
import "./ViewRecord.css"
import Select from "react-select"
import { FetchData } from "../../../LoadData"

export default function ViewRecord() {
    const uuid = require('uuid-random');

    const [patientData, setPatientData] = useState([])
    const [filter, setFilter] = useState([])
    const [fetched, setFetched] = useState({
        isFetched: false,
        isGood: true,
        isAvailable: false,
        filtered: false,
        isRedirect: false
    })

    function DisplayRecords(data) {
        return (
            <ul key={uuid()} className="ViewPatient_Re">
                <li><p>Issue:</p><p>{data.p_problem}</p></li>
                <li><p>Description:</p><p>{data.description}</p></li>
                <li><p>Date:</p><p className="PatientRecordDate">{data.Created_At}</p></li>
                <li><p>HealthCare:</p><p>{data.healthcareName}</p></li>
                <li><p>Medical Severity:</p><p className={data.medical_severity === "Dangerous" ? `redLabel` : ""}>{data.medical_severity}</p></li>
            </ul>
        )
    }

    async function GetPatientData(HID) {
        setFetched(prev => ({ ...prev, isFetched: true }))
        try {
            const { data, res } = await FetchData(`/api/v1/healthcare/getpatientrecords?healthId=${HID}`)
            if (res.ok) {
                setPatientData(data.HealthUser)
                setFetched(prev => ({ ...prev, isAvailable: true }))
            } else if (res.status === 405) {
                setFetched(prev => ({ ...prev, isRedirect: true }))
            } else {
                setFetched(prev => ({ ...prev, isAvailable: false, isGood: false }))
            }
        } catch (err) {
            alert(err)
        }
        setFetched(prev => ({ ...prev, isFetched: false }))
    }

    function FilterMedicalS(e) {
        const { label } = e
        if (fetched.isAvailable) {
            const value = patientData.filter((data) => label === data.medical_severity)
            setFilter(value.map((data) => DisplayRecords(data)))
            setFetched(prev => ({ ...prev, filtered: true }))
        }
    }

    function CallVR(e) {
        if (e.key === 'Enter') {
            GetData()
        }
    }

    function GetData() {
        const hidInput = document.getElementById("HID_input")
        if (hidInput && hidInput.value.toString().length === 10) {
            GetPatientData(hidInput.value)
            return
        }
        alert("Enter Correct Health ID To Fetch")
    }

    const FilterOption = [
        { "label": "Dangerous" },
        { "label": "High" },
        { "label": "Semi-mid" },
        { "label": "Low" }
    ]

    let patientRecords = fetched.isAvailable 
        ? patientData.map((data) => DisplayRecords(data)) 
        : (<p>Patient Records Will Show Here...</p>)

    return (
        <>
            {fetched.isRedirect && (<Navigate to='/healthcare/login' replace={true} />)}
            <div className="ViewPR">
                <h2>View Patient Record</h2>

                <div className="ViewPR_inputHID">
                    <label htmlFor="HID_input">Enter Patient Health ID</label>
                    <input id="HID_input" type="number" name="HID" placeholder="Enter Health ID" onKeyUp={CallVR} />
                    <div className="SearchIcon" onClick={GetData}><i className="fa-solid fa-magnifying-glass"></i></div>

                    <div className="flex items-center mt-4"> {/* Flex container for layout */}
                        <span className="mr-2 text-white">Medical Severity:</span> {/* Text on the left side */}
                        <Select id="FilterPatientRecords" options={FilterOption} onChange={FilterMedicalS} />
                        <div 
                        className={fetched.filtered ? "bgblue SearchIcon" : "SearchIcon"} 
                        onClick={() => setFetched(prev => ({ ...prev, filtered: false }))}
                        >
                            Clear Filter
                        </div>
                    </div>
                </div>

                <div className="FetchedPatientRecords">
                    {fetched.isFetched ? (
                        <p>Loading...</p>
                    ) : fetched.isAvailable ? (
                        fetched.filtered ? (
                            filter.length ? filter : (<p className="redLabel">No Result Found!</p>)
                        ) : patientRecords
                    ) : fetched.isGood ? (
                        patientRecords
                    ) : (
                        <p>No Result Found....</p>
                    )}
                </div>
            </div>
        </>
    )
}