import { useState } from "react"
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const Homepage: React.FC = () => {
    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(false)

    const switchForm = () => {
        setLogin(!login);
        setRegister(!register);
    }

    return (
        <div>
            {login && <LoginForm switchForm={switchForm} />}
            {register && <RegisterForm switchForm={switchForm} />}

        </div>
    )
}
export default Homepage