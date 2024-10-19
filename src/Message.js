import "./Message.css"


export default function Message({ message }) {

    return (
        <div className="AllMessageBharatSeva MessageDisplayNone container">Message us Here
        <form>
           <h1>Message us</h1>
            <input type="text" id="firstName" placeholder="First Name" required/>
            <input type="text" id="lastName" placeholder="Last Name" required/>
            <input type="email" id="email" placeholder="Email" required/>
            <input type="text" id="mobile" placeholder="Mobile" required/>

            <h4>Type Your Message Here</h4>
            <textarea></textarea>
            <input type="submit" value="Send" id="button"/>
        </form>
    </div>
    )
}