import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import "./Home.css"
import { FetchData } from "../../../LoadData"

export default function Home() {
    const uuid = require('uuid-random')
    const [hip, setHip] = useState(null)
    // const [stats, setStats] = useState(null)
    const [isLimit, setLimit] = useState(false)

    // const fetchDetails_Stats = async () => {
    //     try {
    //         const { data, res } = await FetchData(`/api/v1/healthcaredetails/stats`)
    //         if (res.ok) {
    //             setStats(data.stats)
    //         } else if (res.status === 405) {
    //             setLimit(true)
    //         } else {
    //             console.log(data)
    //         }
    //     } catch (err) {
    //         alert("Could Not Connect To Server!")
    //     }
    // }

    const fetchDetails = async () => {
        try {
            const { data, res } = await FetchData(`/details?cache=true`)
            if (res.ok) {
                setHip(data?.info || data?.preferance)
            } else if (res.status === 405) {
                setLimit(true)
            }
        } catch (err) {
            alert("Could Not Connect To Server!")
        }
    }

    useEffect(() => {
        // fetchDetails_Stats()
        fetchDetails()
    }, [])

    const renderHipArray = () => (
        <ul key={uuid()} className="HomeContainer_UL Home_ContainerUL">
            <li><p>HealthCare ID: </p>{hip.healthcare_id} (Unique ID to Identity You on this Platform)</li>
            <li><p>HealthCare License: </p>{hip.healthcare_license}</li>
            <li><p>Name: </p>{hip.name}</li>
            <li><p>Landmark: </p>{hip.address.landmark}</li>
            <li><p>City: </p>{hip.address.city}</li>
            <li><p>State: </p>{hip.address.state}</li>
            <li><p>Country: </p>{hip.address.country}</li>
            <li><p>Availability: </p>{hip.availability}</li>
            <li><p>Total Facilities: </p>{hip.total_facilities}</li>
            <li><p>Total MBBS Doc. :</p>{hip.total_mbbs_doc}</li>
            <li><p>Total Workers: </p>{hip.total_worker}</li>
            <li><p>Date Of Registration: </p>{hip.date_of_registration}</li>
            <li><p>No. of Beds: </p>{hip.no_of_beds}</li>
            {/* <li><p>Ambulance Facilities: </p>Yes</li> */}
        </ul>
    )

    // const renderHipTotalRecords = () => (
    //     <ul key={uuid()} className="HomeContainer_UL Health_ServicesRecords_UL">
    //         <li><p>Records Created: </p>{stats.RecordsCreated}</li>
    //         <li><p>Bio Data Created: </p>{stats.HealthID_Created}</li>
    //         <li><p>Records Viewed: </p>{stats.RecordsViewed}</li>
    //         <li><p>BioData Viewed: </p>{stats.Biodata_Viewed}</li>
    //         <li><p>Request Remaining: </p>{stats.Total_request} <span className="GoToSitePage">Your Remaining Request Quota</span></li>
    //     </ul>
    // )

    if (isLimit) {
        return <Navigate to="/healthcare/login" replace={true} />
    }

    if (!hip) {
        return <h3>Loading....</h3>
    }
    // if (!hip || !stats) {
    //     return <h3>Loading....</h3>
    // }

    return (
        <div className="HomeContainer">
            <div>
                <h2>About Me 🏥</h2>
                <hr />
                <div className="AboutMe">
                    {renderHipArray()}
                </div>

                {/* <div className="Health_Services">
                    <h2>Total Records</h2>
                    <hr />
                    <div className="Health_ServicesRecords Healthcontainerbox">
                        {renderHipTotalRecords()}
                    </div>
                </div> */}
            </div>
        </div>
    )
}