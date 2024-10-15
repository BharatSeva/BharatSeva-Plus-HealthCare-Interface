import './OAuth.css';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import download from "./download.png"
import { Navigate } from "react-router-dom"
import { useState } from "react"


function GoogleOAuth() {
    const [IsStatus, SetIsStatus] = useState({
        Authenticated: false,
        Message: false,
        statustxt: "",
        showtxt: false
    })


    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: 'Bearer ' + tokenResponse.access_token } },
            ).catch((err) => alert(err))
            try {
                SetIsStatus((p) => ({ ...p, statustxt: "Sign In Successful, Verifying You" }))
                const postdata = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/healthcareauth/guestlogin`, {
                    method: "POST",
                    headers: { 'content-type': "application/json" },
                    body: JSON.stringify(userInfo.data)
                })
                const Postresponse = await postdata.json()
                if (postdata.ok) {
                    sessionStorage.setItem("BharatSevahealthCare", JSON.stringify({ ...Postresponse, IsAuthenticated: true }))
                    SetIsStatus((p) => ({ ...p, Authenticated: true }))
                } else { SetIsStatus((p) => ({ ...p, statustxt: Postresponse.message })) }
            } catch (err) { SetIsStatus((p) => ({ ...p, statustxt: "Could Not Connect to server..." })) }

        },
        onError: () => console.log("Something Went Wrong")
    },

    );


    return (
        <>
            {IsStatus.Authenticated && (<Navigate to='/healthcare/dashboard' replace={true} />)}
            <div id='GoogleDesign' className={`statustxt`}>
                <p style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", width: "100%"}} onClick={() => { login(); SetIsStatus((p) => ({ ...p, showtxt: true, statustxt: "Authorization Flow Started !" })) }}>Sign In With <img alt='googlelogo' src={download} /></p>
            </div>

            <div className={`${IsStatus.showtxt ? "OAuthstatustxt" : "DisplayNone"}`}>
                <p>{IsStatus.statustxt}</p>
            </div>
        </>
    );
}

export default GoogleOAuth;
