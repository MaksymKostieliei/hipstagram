import Wrapper from '../../components/Wrapper';
import React from "react";
import './style.css';

const Auth = ({children}) => {
    return (
        <div style={{backgroundImage: 'url("assets/background_auth.png")', backgroundRepeat: 'no-repeat'}}>
            <Wrapper>
                <div className='auth_container'>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{width: '50px', height: 50}} src="assets/logo.png" alt="hipstagram logo"/>
                        <h1>Hipstagram</h1>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Auth;