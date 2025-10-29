import React, {createContext, useState, useEffect, useContext} from 'react'
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(null);
    const [error, setError] = useState("")
   
    
    useEffect(() => {
     const session = JSON.parse(localStorage.getItem("isLoggedUser"))
     if (session) {
        setLoggedUser(session)
     }
      }, [])
     const signup = (username, email, password)=>{
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        if (users.some((u)=> u.email === email)) {
            setError("Account with this email already exist")
            return false;
        } 
        const newUser = {id: Date.now(), username, email, password}
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        alert("Signup successfull! Pleae login");
        return true
     }
     const login = (email, password)=>{
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const user = users.find((u)=> u.email === email);
        if (!user) {
            setError("No account with this email")
            return false;
        }
        if (user.password !== password) {
            setError("Incorrect password")
            return false;
        }
        const session = {
            id: user.id,
            username: user.username,
            email: user.email,
        }
        localStorage.setItem("isLoggedUser", JSON.stringify(session))
        setLoggedUser(session)
        alert(`Welcome back, ${user.username}!`);
        return true;
        
     }
const logout = ()=>{
    localStorage.removeItem("isLoggedUser")
    setLoggedUser(null);
}
   
  return (
    <AuthContext.Provider value={{loggedUser, error, login, signup, logout}}>
        {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider
export const useAuth = ()=> useContext(AuthContext);