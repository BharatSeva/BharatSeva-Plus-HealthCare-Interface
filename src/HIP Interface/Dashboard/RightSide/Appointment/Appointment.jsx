import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"; //redirect is removed
import "./Appointment.css"
import { FetchData } from "../../../LoadData";



export default function Appointment() {
    var uuid = require('uuid-random');
    const [Fetched, SetFetched] = useState([])
    const [IsFetched, SetIsFetched] = useState({
        IsFetched: true,
        IsGood: true,
        Directed: false
    })

    async function fetchdata() {
        SetIsFetched((p) => ({ ...p, IsFetched: false }))
        try {
            let { data, res } = await FetchData(`/appointments/get?limit=15`)
            if (res.ok) {
                SetFetched(data.appointments)
                SetIsFetched((p) => ({ ...p, IsFetched: true }))
            } else if (res.status === 405) {
                alert("Request Limit Reached!")
                SetIsFetched((p) => ({ ...p, Directed: true }))
                return
            }
        } catch (err) {
            console.log(err)
            alert("Could Not Connect To Server")
            SetIsFetched((p) => ({ ...p, IsGood: false, IsFetched: true }))
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    let Appoinments, i = 0
    if (Fetched) {
        Appoinments = Fetched.length ? Fetched.map((data) => (
            <div key={uuid()} className="AppointContainer">
                <p key={i++}><span>Status :</span>{data.status}</p>
                <p key={i++}><span>Patient Name :</span>{data.fullname}</p>
                <p key={i++}><span>Health ID :</span>{data.health_id}</p>
                <p key={i++}><span>Appointment Date :</span>{data.appointment_date}</p>
                <p key={i++}><span>Appointment Time :</span>{data.appointment_time}</p>
                <p key={i++}><span>Department :</span>{data.department}</p>
                <p key={i++}><span>User Note :</span><span id="UsernnoteAppointment">{data.note}</span></p>
            </div>
        )) : (<p className="UpcomingApp">No Appointments Till Now</p>)
    }




    return (<>
        {IsFetched.Directed && <Navigate to="/healthcare/login" replace={true} />}
        <div className="appointmentSectionOutercontainer">
            <div className="BharatSevaHealthCareAppointmentContainer">
                <h2>Appointment Section</h2>
                <p>This Section List Your Appointment With Your Patient</p>
                <hr></hr>

                <div className="AppointmentSection">
                    {IsFetched.IsFetched ? (IsFetched.IsGood ? Appoinments : (<p className="NotConnected">Could Not Connect To Server...🙄</p>)) : (<p className="CompletedApp">Loading...</p>)}
                </div>
            </div>
        </div>
    </>)
}