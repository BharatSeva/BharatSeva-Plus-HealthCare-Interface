import "./NotFound.css"
import { Link } from "react-router-dom"
export default function ErrorElements() {

    // const error = useRouteError()
    return (
        <>
            <div className="NotFound">
                <h2>Something Got Wrong With Your Session. <Link to="/healthcare/login">Login</Link> Again, If Problem Persist Mail <a href="mailto:21vaibhav11@gmail.com">Me</a></h2>
                {/* <pre>{error.status} - {error.statusText}</pre> */}
            </div>
        </>
    )
}