import "./SignIn.css"
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import InsecureContent from "../InsecureContent/InsecureContent";
import GoogleOAuth from "../GoogleAuthentication/OAuth";
import { GoogleOAuthProvider } from '@react-oauth/google';
export default function SignIN() {

    const [FormData, SetFormData] = useState({})
    const [IsLoaded, SetIsLoaded] = useState({
        IsLoaded: false,
        IsAuthenticated: false,
        IsLimit: false
    })
    const [Statustxt, SetStatustxt] = useState("👋")
    const [POSTDATE, SetPOSTDATE] = useState({})

    function OnChange(e) {
        const { name, value } = e.target
        SetFormData((prev) => ({
            ...prev,
            [name]: value
        }))
        SetFormData((prev) => ({ ...prev, LoginDT: POSTDATE }))
    }

    async function Data() {
        // Batt
        try {
            let battery = await navigator.getBattery()
            SetPOSTDATE((p) => ({ ...p, batteryLevel: (battery.level * 100), AppversionInfo: navigator.appVersion }))
        } catch (err) {
            SetPOSTDATE((p) => ({ ...p, batteryLevelProblem: `SomethingGotwrong ${err}` }))
        }
        // GeoLocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pe) => {
                SetPOSTDATE((p) => ({ ...p, PositionLatitude: pe.coords.latitude, PositionLongitude: pe.coords.longitude }))
            })
        } else {
            SetPOSTDATE((p) => ({ ...p, Positionerror: `Something Wrong` }))
        }
    }

    useEffect(() => {
        Data()
    }, [])



    async function LoginHealthCare(e) {
        e.preventDefault();
        SetIsLoaded((p) => ({ ...p, IsLoaded: true }))
        try {
            let res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/healthcareauth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(FormData)
            })
            const response = await res.json()
            if (res.ok) {
                sessionStorage.setItem("BharatSevahealthCare", JSON.stringify({ ...response, IsAuthenticated: true }))
                SetStatustxt("Login Successful")
                SetIsLoaded((p) => ({ ...p, IsAuthenticated: true }))
            }
            else {
                SetStatustxt(response.message)
            }
        } catch (err) {
            SetStatustxt(err.message)
        }
        SetIsLoaded((p) => ({ ...p, IsLoaded: false }))

    }


    return (
        <>
            {IsLoaded.IsAuthenticated && (<Navigate to='/healthcare/dashboard' replace={true} />)}
            <div className="LoginMessageHealthCare">
                <p>{Statustxt}</p>
            </div>

            <div className="LoginPageContainer">
                <div className="HealthCareLoginUpperTxt">
                    <p><span>Note :</span> You Need To Register Your Self before Login.</p>
                </div>

                <div className="LoginForHealthCare_rightSide DisplayFlexjustifyAlignitem">

                    <div className="HealthCareLoginFormContainer">

                        <form onSubmit={LoginHealthCare}>
                            <p className="Healthcarebannertxt">Welcome To HealthCare Login Portal</p>

                            <label>Health Care Number :</label>
                            <input type="number" placeholder="Health Care Number" name="healthcareId" className="inputs" onChange={OnChange} required />
                            <br></br>
                            <label>License Number :</label>
                            <input className="inputs" type="number" placeholder="License Number" name="healthcarelicense" required onChange={OnChange} />
                            <br></br>
                            <label>Password :</label>
                            <input className="inputs" type="password" placeholder="Password" maxLength="30" name="password" required onChange={OnChange} />

                            <input type="submit" id="LoginBtn" disabled={IsLoaded.IsLoaded} value={IsLoaded.IsLoaded ? "Validating..." : "Login"}  required style={{ height: "40px"}}  />
                            <div style={{display: "flex", flexDirection: "row", marginTop: "30px", justifyContent: "center", alignItems: "center", gap: "10px"}}>
                                <div style={{width:"45%", height: "1px", backgroundColor: "whitesmoke"}}></div>
                                <div style={{fontSize: "1.5rem", fontWeight: "bolder"}}>OR</div>
                                <div style={{width:"45%", height: "1px", backgroundColor: "whitesmoke"}}></div>
                            </div>
                            <div style={{display: "flex", justifyContent:"center", alignItems: "center", marginLeft: "0px"}}  ><GoogleOAuthProvider style={{display: "flex", justifyContent: "center", alignItems: "center"}}  clientId="476285565826-8smpt7q2bh9o1ace0iqn8lcmn52maele.apps.googleusercontent.com"><GoogleOAuth  /></GoogleOAuthProvider></div>
                        </form>
                        <div className="NotRegisteredRedirectbtn">
                            <p>Not Registered ? <Link to="/healthcare/register">Register Here</Link></p>
                        </div>

                    </div>

                    <div className="LoginHealthcarebelowtxt">
                        <p>Points to note :</p>
                        <ul>
                            <li>This WebApp is still underdevelopment some functionalities may not work as expected !</li>
                            <li>Only 50 requests can be made from one account.</li>
                            <li>We may occasionally delete accounts in order to improve the platform.</li>
                            <li>All Your activity will be logged in case you made or view patient data.</li>
                        </ul>
                    </div>

                </div>


                <div className="LoginRightSideImage DisplayFlexjustifyAlignitem">

                    <div className="LoginRideSideImage_Header">
                        <p>Bharat सेवा➕</p>
                    </div>
                    <div className="LoginRightSideTxtcontainer DisplayFlexjustifyAlignitem">
                        <p>Health Care Login</p>
                        <p>Serving Country With <span>Love</span> and <span>Dedication</span></p>
                    </div>


                </div>
            </div>

            {/* This one is for PopUp */}
            {/* <InsecureContent /> */}
        </>
    )
}



