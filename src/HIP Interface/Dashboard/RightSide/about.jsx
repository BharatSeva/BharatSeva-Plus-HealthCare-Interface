import "./about.css";

export default function About() {
    const UserData = JSON.parse(sessionStorage.getItem("BharatSevahealthCare"));
    return (
        <>
            <div className="Aboutcontainer">
                <h4>Hello, {UserData.healthcare_name} 👋</h4>
                <p>Welcome to the Bharat Seva+ Healthcare Dashboard! We’re thrilled to have you explore our platform. Use the side panel to navigate through the available features and tools.</p>
                <p>
                    Our primary focus is on developing a highly scalable and fast backend that drives the platform with advanced features. While the frontend offers a user-friendly interface, the backend powers the system with robust and efficient functionality to meet your needs.
                </p>
                <p>
                    We’re also working on integrating a cutting-edge deep learning model to revolutionize how healthcare data is processed and insights are delivered. This feature is still under development and promises to bring innovative enhancements to the platform.
                </p>
                <p>
                    Your feedback is invaluable to us. As an early user, your insights will help us refine the platform further. If you’d like to contribute to the project, feel free to reach out or explore our repositories to get involved!
                </p>
                <p className="vaibhavyadavmaintained">
                    This project is passionately created and maintained by
                    <span className="Myname"> Vaibhav Yadav</span>. <br />Stay connected and share your thoughts or contributions with me on
                    <a href="https://www.linkedin.com/in/vaibhav-yadav-4397351b9" target="_blank" rel="noopener noreferrer" className="LinkedInLink">
                        LinkedIn
                    </a>.
                </p>
            </div>




        </>
    );
}
