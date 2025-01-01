import { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

 const [user, setUser] = useState(null)  
 const [loggedInUserData, setloggedInUserData] = useState(null)
 const [userData,setUserData] = useContext(AuthContext)
 

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
   
  if(loggedInUser){
  const userData = JSON.parse(loggedInUser)
  setUser(userData.role)
  setloggedInUserData(userData.data)
  }
},[])

 useEffect(() => {
  const localData = getLocalStorage(); 
  if (!localData.employees || !localData.admin) {    //used to call data here first we are using set then calling get
    setLocalStorage(); 
  }
}, []);  

 //console.log(authData)
 
 const handleLogin = (email, password) => {
  if (email === "admin@me.com" && password === "123") {
    setUser("admin")
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  } else if (userData) {
    const employee = userData.find((e)=>email == e.email && e.password == password)
    if(employee){
    setUser("employee")
    setloggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employees', data:employee}))
  } 
}
  else {
    alert("Invalid Credentials")
  }
  
}


  return (
    <>
     {!user ? <Login handleLogin={handleLogin} />: ''}
     {/* {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}  */}
     {/* {user === 'admin' && <AdminDashboard />}
     {user === 'employee' && <EmployeeDashboard data={loggedInUserData} /> : null}      */}
     {user == "admin" ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data ={loggedInUserData} /> : null)}
    </> 
  )
}

export default App
