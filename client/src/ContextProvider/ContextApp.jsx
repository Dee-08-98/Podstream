
import React, { useState } from 'react';
import { createContext } from 'react';

export const Holder = createContext("")


function ContextApp({ children }) {
    
const [loginData, setLoginData] = useState(null)

    return (
        <>

            <Holder.Provider value={{loginData, setLoginData}}>
                {children}
            </Holder.Provider>


        </>
    );
}

export default ContextApp;