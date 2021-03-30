import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function NavBar(props) {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutUser()).then(res => {
            if (res.payload.success){
                props.history.push("/login");
            } else {
                alert("Log Out Failed");
            }
        })
    }

    return (
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
            <div>
                <button onClick={logoutHandler}>Logout</button>
            </div>
        </nav>
    )
}

export default withRouter(NavBar)
