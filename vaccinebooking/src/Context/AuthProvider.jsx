import { Children, createContext, useState } from "react"
const AuthContext = createContext();

const AuthProvider = () => {
    const [auth, setAuth] = useState();
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {Children}
    </AuthContext.Provider>
  )
}

export default AuthProvider