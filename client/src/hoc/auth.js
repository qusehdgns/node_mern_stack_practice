import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';


export default function (SpecificComponent, option, adminRoute = null) {

    // option : null, true, false
    // null : everyone
    // true : login user
    // false : not login user

    function AuthenticationCheck(props) {

        let user = useSelector(state => state.user)
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(res => {

                // 권한 분기 처리( 로그인 유무 )
                if(!res.payload.isAuth) {
                    if(option) {
                        props.history.push('/login');
                    }
                } else {
                    // 어드민 권한없는 유저
                    if(adminRoute && !res.payload.isAdmin) {
                        props.history.push('/');
                    } else {
                        if(!option){
                            props.history.push('/')
                        }
                    }
                }



            });

        }, [])

        return (
            <SpecificComponent {...props} user={user}/>
        )
    }


    return AuthenticationCheck
}