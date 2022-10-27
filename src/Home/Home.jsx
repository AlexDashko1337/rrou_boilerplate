import "./Home.css"
import {useNavigate} from "react-router-dom"
const Home = () => {
    const navigate = useNavigate();
    const toUsers = () => {
        navigate("/users")
    };

    const toAbout = () => {
        navigate("/about")
    };

    return (
        <div>
            <h2>This is Home page</h2>
            <div onClick={toUsers}>I want to check Users page</div>
            <div onClick={toAbout}>I want to check About page</div>
        </div>
    )

}

export default Home