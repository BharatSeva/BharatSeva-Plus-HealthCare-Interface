import "./IndexPage.css";
import { NavLink } from "react-router-dom";
import BharatSevaLogo1 from "../ImagesAssests/BharatSevaLogo1.png";

export default function IndexPage() {
    return (
        <div className="IndexPageContainer DisplayFlexX">
            <h2>Welcome to</h2>
            <div className="IndexNameContainer DisplayFlexX">
                <img src={BharatSevaLogo1} alt="Bharat Seva" />
            </div>

            <div className="IndexAboutContainer">
                <p>Welcome to Bharat Sevaplus, a web app that maintains patient health records, manages appointments, and supports communication between patients and healthcare professionals via video and text messages.</p>
                <p><span className="SpecialTaglineIndex">Effortlessly Log Records:</span> Say goodbye to paper-based medical records. Bharat Seva+ allows you to log, store, and access all health data in one secure place with cloud storage, ensuring accessibility and safety.</p>
                <p>Bharat Seva+ functions as your digital health diary, maintaining records like lab results, vaccination data, and imaging reports. You can access your health history anytime and share it with healthcare professionals for seamless care.</p>
                <p><span className="SpecialTaglineIndex">Personalized Health Insights:</span> Bharat Seva+ goes beyond record-keeping by analyzing your health data to provide insights, trends, and recommendations. Make informed decisions and proactively manage your health.</p>

                <p>Embrace the future of healthcare with Bharat Seva+. Visit our website today and take control of your health journey. <br />Bharat Seva+ - Your well-being, simplified.</p>
            </div>

            <div className="projectinfo width80vw">
                <h2>About My Project</h2>

                <div className="IndexPageAboutApp">
                    <p>This project consists of two web apps:</p>
                    <ul>
                        <a href="https://github.com/BharatSeva/HealthCare-Interface" target="_blank" rel="noreferrer">
                            <li>HealthCare Interface <span className="GoToSitePage">Go to Site</span></li>
                        </a>
                        <a href="https://github.com/BharatSeva/Client-Server" target="_blank" rel="noreferrer">
                            <li>Client Interface <span className="GoToSitePage">Go to Site</span></li>
                        </a>
                    </ul>
                    <p>The <i>BharatSeva HealthCare Interface</i> is a healthcare platform that serves HIPs and HIUs, generating health logs such as bio-data and medical records. <br />
                        The <i>BharatSeva User Interface</i> provides services to end users—patients whose data gets generated and logged.</p>
                </div>

                <div className="projectdetails">
                    <p>Additional Details:</p>
                    <ul>
                        <li>For more info, check the project: <a href="https://github.com/BharatSeva" target="_blank" rel="noreferrer">Click Here <span className="GoToSitePage">Go to Page</span></a> or see the demo: <a href="https://youtube.com/playlist?list=PLXRQ5AMta2AI_jZlGr0A5owICnGkDpElO" target="_blank" rel="noreferrer">Click Here <span className="GoToSitePage">Open Playlist</span></a></li>
                        <li>This is a MERN + Firebase stack project, developed by <a href="https://www.linkedin.com/in/vaibhav-yadav-4397351b9/" target="_blank" rel="noreferrer">Vaibhav Yadav <span className="GoToSitePage">Link</span></a>.</li>
                        <li>The project took around 3 months to complete.</li>
                        <li>Main goal: To test and enhance my Backend Development skills.</li>
                        <li>Hosted on <a href="https://nginx.org/" target="_blank" rel="noreferrer">Nginx <span className="GoToSitePage">Open</span></a></li>
                        <li>REST API hosted on <a href="https://www.docker.com/" target="_blank" rel="noreferrer">AzureVM <span className="GoToSitePage">Open</span></a></li>
                        <li>Future updates include: Video-text messages, mobile view, etc.</li>
                        <li>If you have any questions or feedback, feel free to <a href="mailto:21vaibhav11@gmail.com"><span className="GoToSitePageMailMe">Email Me</span></a>.</li>
                    </ul>
                    <h3>Thank you for your interest 💗</h3>
                </div>
            </div>

            <p className="infomessage">*Upcoming in future updates</p>

            <NavLink to="/healthcare/login">
                <div className="gotologinpageIndex">
                    <p>Proceed to HealthCare Login Page</p>
                </div>
            </NavLink>
        </div>
    );
}
