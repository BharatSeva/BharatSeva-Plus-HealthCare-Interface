import "./SignIn.css";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import GoogleOAuth from "../GoogleAuthentication/OAuth";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function SignIN() {
  const [FormData, SetFormData] = useState({
    healthcare_id: "",
    healthcare_license: "",
    password: ""
  });
  const [IsLoaded, SetIsLoaded] = useState({
    IsLoaded: false,
    IsAuthenticated: false,
    IsLimit: false,
  });
  const [Statustxt, SetStatustxt] = useState("👋");
  const [POSTDATE, SetPOSTDATE] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Parse URL query parameters and populate form fields if they exist
    const params = new URLSearchParams(window.location.search);
    const healthcare_id = params.get("healthcare_id");
    const password = params.get("pass");
    const license = params.get("license");

    if (healthcare_id || password) {
      SetFormData((prev) => ({
        ...prev,
        healthcare_id: healthcare_id || prev.healthcare_id,
        password: password || prev.password,
        healthcare_license: license || prev.healthcare_license
      }));
    }

    // Additional data collection for POSTDATE
    Data();
  }, []);

  async function Data() {
    try {
      let battery = await navigator.getBattery();
      SetPOSTDATE((p) => ({
        ...p,
        batteryLevel: battery.level * 100,
        AppversionInfo: navigator.appVersion,
      }));
    } catch (err) {
      SetPOSTDATE((p) => ({
        ...p,
        batteryLevelProblem: `Something went wrong ${err}`,
      }));
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pe) => {
        SetPOSTDATE((p) => ({
          ...p,
          PositionLatitude: pe.coords.latitude,
          PositionLongitude: pe.coords.longitude,
        }));
      });
    } else {
      SetPOSTDATE((p) => ({ ...p, Positionerror: `Something went wrong` }));
    }
  }

  function OnChange(e) {
    const { name, value } = e.target;
    SetFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    SetFormData((prev) => ({ ...prev, LoginDT: POSTDATE }));
  }

  async function LoginHealthCare(e) {
    e.preventDefault();
    SetIsLoaded((p) => ({ ...p, IsLoaded: true }));
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(FormData),
        }
      );
      const response = await res.json();
      if (res.ok) {
        sessionStorage.setItem(
          "BharatSevahealthCare",
          JSON.stringify({ ...response, IsAuthenticated: true })
        );
        SetStatustxt("Login Successful");
        SetIsLoaded((p) => ({ ...p, IsAuthenticated: true }));
      } else {
        SetStatustxt(response.message);
      }
    } catch (err) {
      SetStatustxt(err.message);
    }
    SetIsLoaded((p) => ({ ...p, IsLoaded: false }));
  }

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <>
      {IsLoaded.IsAuthenticated && (
        <Navigate to="/healthcare/dashboard" replace={true} />
      )}
      <div className="LoginMessageHealthCare">
        <p>{Statustxt}</p>
      </div>

      <div className="LoginPageContainer">
        <div className="LoginForHealthCare_rightSide DisplayFlexjustifyAlignitem">
          <div
            className="HealthCareLoginFormContainer"
            style={{ width: "80%", margin: "0px auto" }}
          >
            <form onSubmit={LoginHealthCare} style={{ margin: "0px auto" }}>
              <p className="Healthcarebannertxt">
                Welcome To HealthCare Login Portal
              </p>

              <label>Health Care Number :</label>
              <input
                type="text"
                placeholder="Health Care Number"
                name="healthcare_id"
                className="inputs"
                value={FormData.healthcare_id}
                onChange={OnChange}
                required
              />
              <br></br>
              <label>License Number :</label>
              <input
                className="inputs"
                type="text"
                placeholder="License Number"
                name="healthcare_license"
                value={FormData.healthcare_license}
                onChange={OnChange}
                required
              />
              <br></br>
              <label>Password :</label>
              <input
                className="inputs"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                maxLength="30"
                name="password"
                value={FormData.password}
                onChange={OnChange}
                required
              />
              <div style={{ width: "90%", textAlign: "right" }}>
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? "Hide Password" : "Show Password"}
                </button>
              </div>
              <input
                type="submit"
                id="LoginBtn"
                disabled={IsLoaded.IsLoaded}
                value={IsLoaded.IsLoaded ? "Validating..." : "Login"}
                style={{ height: "40px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "30px",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "40%",
                    height: "1px",
                    backgroundColor: "whitesmoke",
                  }}
                ></div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
                  OR
                </div>
                <div
                  style={{
                    width: "40%",
                    height: "1px",
                    backgroundColor: "whitesmoke",
                  }}
                ></div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "-70px",
                }}
              >
                <GoogleOAuthProvider clientId="your-client-id">
                  <GoogleOAuth />
                </GoogleOAuthProvider>
              </div>
            </form>
            <div className="NotRegisteredRedirectbtn">
              <p>
                Not Registered ?{" "}
                <Link to="/healthcare/register">Register Here</Link>
              </p>
            </div>
          </div>

          <div className="LoginHealthcarebelowtxt">
            <p>Points to note :</p>
            <ul>
              <li>
                This WebApp is still under development. Some functionalities may
                not work as expected.
              </li>
              <li>
                We may occasionally delete accounts to improve the platform.
              </li>
              <li>
                All activity will be logged if you make or view patient data.
              </li>
            </ul>
          </div>
        </div>

        <div className="LoginRightSideImage DisplayFlexjustifyAlignitem">
          <div className="LoginRideSideImage_Header">
            <p>Bharat सेवा➕</p>
          </div>
          <div className="LoginRightSideTxtcontainer DisplayFlexjustifyAlignitem">
            <p>Health Care Login</p>
            <p>
              Serving Country With <span>Love</span> and <span>Dedication</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
