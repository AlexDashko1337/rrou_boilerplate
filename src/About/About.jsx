import "./About.css"
import {useNavigate} from "react-router-dom"

const About = () => {
    const navigate = useNavigate();
    const toHome = () => {
        navigate("/home")
    };

    const toUsers = () => {
        navigate("/users")
    };

    return (
        <div>
            <h2>This is About page</h2>
            <div onClick={toHome}>I want to check Home page</div>
            <div onClick={toUsers}>I want to check Users page</div>
        </div>
    )

}

export default About