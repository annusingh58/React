import { useNavigate } from "react-router-dom";
import "../Style/Register.css";

function Login(){
    const router =useNavigate();
    return(
        <div className="body">
            <h1>Login</h1>
            <button onClick={()=>router('/home')}>Home Page</button>
        </div>
    )
}
export default Login;