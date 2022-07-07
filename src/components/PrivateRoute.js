import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function PrivateRoute({children, ...props}) {
    const isAuthincated = !!localStorage.getItem('token');

    

    return (
        <Route {...props}>{isAuthincated ? children : <Redirect to={'/cars'} />}</Route>
    )
}