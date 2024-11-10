import { useState } from "react";
import "./Register.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  let PasswordStatus = document.querySelector("#RegisterPasswordStatus");
  const [showPassword, setShowPassword] = useState(false);
  const [Status, SetStatus] = useState("Validating...");
  const [Fetched, SetIsFetched] = useState({
    IsFetched: false,
    IsGood: false,
    IsRedirect: false,
  });

  const [FormData, SetFormData] = useState({
    name: "",
    email: "",
    appointment_fee: "",
    availability: "",
    total_facilities: "",
    total_mbbs_doc: "",
    total_worker: "",
    no_of_beds: "",
    about: "",
    password: "",
    address: {
      country: "",
      landmark: "",
      city: "",
      state: ""
    }
  });

  function OnclickChange(e) {
    const { name, value } = e.target;
    if (["country", "landmark", "city", "state"].includes(name)) {
      SetFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value }
      }));
    } else {
      SetFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  }

  async function RegisterAPIGOESHere(e) {
    e.preventDefault();
    if (
      document.querySelector("#Registration_Password").value !==
      document.querySelector("#Registration_CheckPassword").value
    ) {
      PasswordStatus.textContent = "Passwords Do Not Match :(";
      PasswordStatus.classList.remove("DiplayNone");
      PasswordStatus.style.color = "red";
      return;
    }
    PasswordStatus.classList.add("DiplayNone");

    SetIsFetched((p) => ({ ...p, IsFetched: true }));
    SetStatus("Loading...");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(FormData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        SetStatus("Registration Successful! Please Login :)");
        SetIsFetched((p) => ({ ...p, IsRedirect: true }));
      } else if (response.status === 400) {
        SetStatus(
          "Another user has already registered with the provided email or Healthcare ID :("
        ); 
      } else {
        SetStatus(data.message);
      }
      SetIsFetched((p) => ({ ...p, IsGood: true }));
      console.log(data)
    } catch (err) {
      alert("Could Not Connect to Server...🙄");
    }
  }

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <>
      <div className="RegisterOuterContainerHealthCare">
        <div
          className={`HIP_RegisterContainer DisplayFlexjustifyAlignitem ${Fetched.IsFetched ? "DisplayOpacity" : ""
            }`}
        >
          <div className="RegisterLable">
            <p>HealthCare Registration 🩺</p>
            <p>
              <span>
                <strong>Note</strong>
              </span>{" "}
              : After Successful Registration, <br></br> Please Login for
              Dashboard access.
            </p>

            <ul className="RegisterPagetxt">
              <li>All fields have limits. Try to adhere to them.</li>
              <li>
                For feedback, suggestions, or to report errors, start a discussion on our{" "}
                <a href="https://github.com/orgs/BharatSeva/discussions">GitHub</a>.
              </li>
            </ul>
          </div>
          <div className="RegisterBox">
            <p className="WelcomeGreetings">
              Welcome to the Registration Portal
            </p>

            <form onSubmit={RegisterAPIGOESHere}>
              <label>Health Care Name :</label>
              <input
                type="text"
                placeholder="Enter Health Care Name"
                name="name"
                onChange={OnclickChange}
                required
              />
              
              <label>Country</label>
              <input
                type="text"
                placeholder="Enter Country"
                name="country"
                onChange={OnclickChange}
                required
              />
              
              <label>State :</label>
              <input
                type="text"
                placeholder="Enter State"
                name="state"
                onChange={OnclickChange}
                required
              />

              <label>City</label>
              <input
                type="text"
                placeholder="Enter City"
                name="city"
                onChange={OnclickChange}
                required
              />

              <label>Landmark</label>
              <input
                type="text"
                placeholder="Enter Landmark"
                name="landmark"
                onChange={OnclickChange}
                required
              />

              <label>Email :</label>
              <input
                type="email"
                placeholder="Email Must Be Unique"
                name="email"
                onChange={OnclickChange}
                required
              />

              <label>Appointment Fee :</label>
              <input
                type="number"
                placeholder="Enter Appointment Fee"
                name="appointment_fee"
                onChange={OnclickChange}
                required
              />

              <label>Availability :</label>
              <input
                type="text"
                placeholder="Enter Availability"
                name="availability"
                onChange={OnclickChange}
                required
              />

              <label>Total Facilities :</label>
              <input
                type="number"
                placeholder="Enter Total Facilities"
                name="total_facilities"
                onChange={OnclickChange}
                required
              />

              <label>Total MBBS Doctors :</label>
              <input
                type="number"
                placeholder="Enter Total MBBS Doctors"
                name="total_mbbs_doc"
                onChange={OnclickChange}
                required
              />

              <label>Total Workers :</label>
              <input
                type="number"
                placeholder="Enter Total Workers"
                name="total_worker"
                onChange={OnclickChange}
                required
              />

              <label>No. Of Beds :</label>
              <input
                type="number"
                placeholder="Enter No. Of Beds"
                name="no_of_beds"
                onChange={OnclickChange}
                required
              />

              <div
                className="registerHealthCaretextareaContainer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "-16px",
                }}
              >
                <label className="registerHealthCaretextarea">
                  About Your Hospital :
                </label>
                <textarea
                  style={{ width: "60%" }}
                  className="registerHealthCaretextarea"
                  type="text"
                  placeholder="Enter About Your Hospital"
                  name="about"
                  onChange={OnclickChange}
                  required
                  rows="5"
                  cols="39"
                ></textarea>
              </div>

              <label>Password :</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                id="Registration_Password"
                name="password"
                onChange={OnclickChange}
                required
              />

              <label>Password Again :</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password Again"
                id="Registration_CheckPassword"
                required
              />
              <p id="RegisterPasswordStatus" className="DiplayNone"></p>
              <div style={{ width: "97.5%", textAlign: "right" }}>
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? "Hide Password" : "Show Password"}
                </button>
              </div>
              <div
                className="Registerbtn DisplayFlexjustifyAlignitem"
                style={{ width: "90%", margin: "0px auto" }}
              >
                <button style={{ width: "100%" }}>Register*</button>
              </div>
            </form>

            <p className="LoginbtnRedirect">
              Already Registered! <Link to="/healthcare/login">Login</Link>
            </p>

            <p
              style={{ textAlign: "center", marginTop: "20px" }}
              className="TermsandConditions"
            >
              *By Clicking On Register You Agree To Our Terms and Conditions!
            </p>
          </div>
        </div>
      </div>

      {/* This One For PopBox In register */}
      {Fetched.IsFetched && (
        <div className="Popoverdropbox displayFlexWithR">
          <div className="PopOvercontainerBoxregisterpage displayFlexWithR">
            <div className="dropboxwithregpage">
              <h1>{Status}</h1>
              <div className="DisplayFlexjustifyAlignitem">
                <Link
                  className="NavLinkregister"
                  to={Fetched.IsRedirect ? "/healthcare/login" : "#"}
                >
                  {Fetched.IsRedirect ? "Please Login" : "Cancel"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
