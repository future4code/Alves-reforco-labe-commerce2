import React from 'react'

function GlobalStateContext() {
    const UserContext = React.createContext()
    
    return UserContext
}

export default GlobalStateContext