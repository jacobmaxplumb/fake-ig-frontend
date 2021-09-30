import { useEffect, useState } from 'react';
import { Route, Redirect, withRouter, useHistory } from 'react-router-dom';
import { auth } from '../services/firebase.service';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useState(auth.currentUser);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            if (auth.currentUser) {
                setUser(auth.currentUser);
                setIsLoading(false);
            } else {
                history.push('/');
            }
        }, 1000);
    }, [])
    return(<>
        {isLoading ? 
        (<div>Loading...</div>) : 
        (<Route
            {...rest}
            render={props =>
                user !== null ? (
                    <Component user={user} setUser={setUser} {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />)
        }
    </>)
}

export default withRouter(PrivateRoute);