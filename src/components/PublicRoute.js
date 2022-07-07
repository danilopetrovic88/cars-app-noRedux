import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function PublicRoute({children, ...props}) {
    const isAuthincated = !!localStorage.getItem('token');

    return (
        <Route {...props}>{isAuthincated ? <Redirect to={'/cars'} /> : children}</Route>
    )
}