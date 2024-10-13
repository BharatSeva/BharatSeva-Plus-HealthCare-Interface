import LefSideBar from "./LeftSide/LeftSideBar"
import RightSide from "./RightSide/RightSide"
import NavBar from "./NavBar/NavBar"


export default function DashComponents() {

    function toggleSideBar() {
        document.querySelector(".LeftSideBarContainer").classList.toggle("ToggleTo0");
        document.querySelector(".RightSideBar").classList.toggle("ToggleTo100");
    }
    return (
        <>
            <div className="HomePageContainer">
                <NavBar toggleSideBar={toggleSideBar} />
                <div className="SideBarContainer">
                    <LefSideBar />
                    <RightSide />
                </div>
            </div>
        </>
    )
}