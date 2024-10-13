import "./NotFound.css"
import { Link } from "react-router-dom"
export default function NotFound() {


    return (
        <>
            <div className="NotFound">
                <h2>Page You Are Looking For Does Not Exists 🙄</h2>
                <Link to='/healthcare/dashboard'>Go To Dashboard</Link>
            </div>
        </>
    )
}