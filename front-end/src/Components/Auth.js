import React, { useContext, useState } from 'react'
const auth = React.createContext()
export const Auth = (props) => {
    const [userName, setUserName] = useState("")
    const [userId,setuserId]=useState('')

    const login = (name,id) => {
        setUserName(name)
        setuserId(id)
    }

    return (
        <div>
            <auth.Provider value={{login,userName,userId}}>
                {props.children}
            </auth.Provider>
        </div>
    )
}

export function Authuse() {
    return useContext(auth)
}