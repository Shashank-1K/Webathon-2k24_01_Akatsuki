import { Navigate } from 'react-router-dom'
function Protected({children}) {
    if(window.localStorage.getItem("token"))
        return children;
    return <Navigate to='/'></Navigate>
}
export default Protected