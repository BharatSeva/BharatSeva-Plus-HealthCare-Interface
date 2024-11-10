import "./Setting.css"
import { useEffect, useState } from 'react'
import { Navigate } from "react-router-dom";
import { FetchData } from "../../../LoadData"; //PostData is removed

export default function Setting() {
    const HealthCare = JSON.parse(sessionStorage.getItem("BharatSevahealthCare"))
    const [Fetched, SetFetched] = useState({
        IsGood: true,
        IsLimit: false
    })
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)

    // Remove onChangeData(e)
    // async function OnchangeData(e) {
    //     const { name, value } = e.target;
    //     SetFetched((p) => ({ ...p, IsFetched: false }))
    //     try {
    //         let { data, res } = await PostData('/api/v1/healthcaredetails/healthcare/changepreferance', { [name]: value })
    //         if (res.ok) {
    //             alert("Preference Successfully Changed")
    //         }
    //     } catch (err) {
    //         alert("Could Not Connect To server... :(")
    //     }
    //     SetFetched((p) => ({ ...p, IsFetched: true }))
    // }

    useEffect(() => {
        GetData();
    })

    async function GetData() {
        try {
            const { data, res } = await FetchData('/preferance/get?cache=true')
            if (res.ok) {
                CheckForRadioButton(data.preferance)
            }
            else if (res.status === 405) {
                alert("Request Limit Reached")
                SetFetched((p) => ({ ...p, IsLimit: true }))
            }
        } catch (err) {
            console.log(err)
            alert("Could Not Connect to Server... :(")
            SetFetched((p) => ({ ...p, IsGood: false }))
        }
    }

    function CheckForRadioButton(Dataas) {
        // ... (rest of the function remains the same)
    }

    async function DeleteMyAccount() {
        setShowConfirmDialog(true)
    }

    async function confirmDeleteAccount() {
        try {
            let response = await fetch(`${process.env.REACT_APP_API_URL}/delete/account`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    'Authorization': `Bearer ${HealthCare.token}`
                }
            })
            // let Response = await response.json() Remove the Response variable
            if (response.ok) {
                alert("Account Scheduled For Deletion!")
                document.querySelector(".AccountDeleteBtn").classList.add("AccountDeleted")
                document.querySelector(".AccountDeleteBtn").textContent = "Account Deletion Scheduled"
            }
        } catch (err) {
            alert("Could Not Connect To Server")
        }
        setShowConfirmDialog(false)
    }

    return (
        <>
            {Fetched.IsLimit && (<Navigate to="/healthcare/login" replace={true} />)}
            <div className="settcontain">
                {(Fetched.IsGood ? (
                    <>
                        <div className="SettingContainer">
                            {/* ... (rest of the JSX remains the same) */}
                            <div className="SettingAccountDeleting">
                                <h3 className="textDecoration">Danger Zone</h3>
                                <div className="DeleteAccountContainer">
                                    <p>Be Aware, this action cannot be Undone !</p>
                                    <div onClick={DeleteMyAccount} className="AccountDeleteBtn">Request To Delete My Account</div>
                                </div>
                            </div>
                        </div>

                        <div className="Settingarticle">
                            <article><strong><i className="fa-solid fa-triangle-exclamation"></i>  - </strong>Viewing and making any Patient Records, Your activity will be recorded.
                            </article>
                        </div>

                        {showConfirmDialog && (
                            <div className="confirm-dialog">
                                <p>Are you sure you want to delete your account?</p>
                                <button onClick={confirmDeleteAccount}>Yes, delete my account</button>
                                <button onClick={() => setShowConfirmDialog(false)}>Cancel</button>
                            </div>
                        )}
                    </>
                ) : <p className="CouldnotConnect">Could Not Connect To Server...🙄</p>)}
            </div>
        </>
    )
}