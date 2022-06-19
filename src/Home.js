import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import React, { useState } from 'react';

function Home (){

    const { instance } = useMsal();
    const [idToken, setIdToken] = useState("");

    const Login = async () => {
        try {
            let {idToken} = await instance.loginPopup();
            setIdToken(idToken);
        } catch (error) {
            console.error(error);
        }
    }

    const Logout = async () => {
        try {
            await instance.logoutPopup();
            setIdToken("")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Homepage</h1>
            <AuthenticatedTemplate>
                <button onClick={() => Logout()}>Logout</button>
                <div>
                    You're authenticated!
                </div>
                <div>
                    {idToken}
                </div>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <div>
                    Why you no authenticate?
                </div>
                <button onClick={() => Login()}>Login</button>
            </UnauthenticatedTemplate>
        </div>
    )
}

export default Home;