import "./Users.css"
import {useNavigate} from "react-router-dom"

const Users = () => {
    const navigate = useNavigate();
    const toHome = () => {
        navigate("/home")
    };

    const toAbout = () => {
        navigate("/about")
    };

    const SomeUsers = () => {
        return(
            <div>
                <li>User1</li>
                <li>User2</li>
                <li>User3</li>
            </div>
            
        )
    }

    return (
        <div>
            <h2>This is Users page</h2>
            <div onClick={toHome}>I want to check Home page</div>
            <div onClick={toAbout}>I want to check About page</div>
            <ul><SomeUsers/></ul>
        </div>
    )

}

export default Users