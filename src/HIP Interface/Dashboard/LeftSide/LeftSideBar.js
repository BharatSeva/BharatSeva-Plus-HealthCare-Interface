import "./LeftSideBar.css"
import React from "react"
import { NavLink } from "react-router-dom" //Link is removed
export default function LefSideBar() {


    function SettingToggle() {
        document.querySelector(".Settingpopups").classList.toggle("DisplayToggleSetting")
    }
    return (
        <>
            <div className="LeftSideBarContainer ToggleTo0">
                <div className="LeftSide_textContainer">
                    <ul>
                        <NavLink className={({ isActive }) => isActive ? "IsActive" : ""} to='/healthcare/dashboard/home' end> <li><i className="fa-solid fa-house"></i>Home</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? "IsActive" : ""} to='createpatientbiodata'>  <li><i className="fa-brands fa-creative-commons-by"></i>Generate Client Profile</li>   </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "IsActive" : ""} to='viewpatientbiodata'> <li><i className="fa-solid fa-hospital-user"></i>View Client Profile</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? "IsActive" : ""} to='createrecords'>  <li><i className="fa-solid fa-newspaper"></i>Generate Record</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? "IsActive" : ""} to='viewrecords'>  <li><i className="fa-regular fa-paste"></i>View Records</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? "IsActive" : ""} to='appointment'>  <li><i className="fa-regular fa-calendar"></i>View Appointments</li>   </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "IsActive" : ""} to='setting'>  <li ><i className="fa-solid fa-gear"></i><div className="SettingNavbar"><span className="settinghealthcaredown">Setting</span> <i className="fa-solid fa-chevron-down settinghealthcaredown" onClick={SettingToggle}></i></div></li>   </NavLink>

                        <div className="SettingDropDownMenu">
                            <ul className="Settingpopups DisplayToggleSetting">
                                <li>Change Preferances</li>
                                <li>Change Mail Preferances</li>
                                <li>Delete My Account</li>
                            </ul>
                        </div>

                    </ul>
                    <div className="TextContainerDownSide">
                        <p>About Us</p>
                        {/* <p>Data Centre</p> */}
                        {/* <p>Security</p> */}
                        {/* <p>Contribute</p> */}
                        {/* <p>Contact Me</p> */}
                    </div>


                </div>
            </div>

        </>
    )
}