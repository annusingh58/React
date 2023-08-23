import { useNavigate } from "react-router-dom";
import "../Style/Register.css";

function Register(){
    const router=useNavigate();
    return(
        <div className="screen">
            <h1>Register</h1>
            <button onClick={()=>router('/login')}>Login here</button>

        </div>
    )
}
export default Register;