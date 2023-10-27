import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AptIndex from "./pages/AptIndex";
import AptShow from "./pages/AptShow";
import AptNew from "./pages/AptNew";
import AptEdit from "./pages/AptEdit";
import ProtectedIndex from "./pages/ProtectedIndex";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import mockUsers from "./mockUsers.js"
import mockProperties from "./mockProperties.js"
import "./App.css"

const App = () => {

  const [user, setUser] = useState(null)
  const [apartments, setApartments] = useState([])

  console.log("user: ", user)
  // console.log("apartments: ", apartments)
  
  const url = "http://localhost:3000"
  // console.log(user, apartments)

  const readApartments = () => {
    fetch(`${url}/apartments`)
      .then(response => response.json())
      .then(payload => setApartments(payload))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem("currentUser")
    if(loggedIn) {
      setUser(JSON.parse(loggedIn))
    }
    readApartments()
  }, [])

  // authentication methods
const login = (userInfo) => {
  fetch(`${url}/login`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST"
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    // store the token
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
  })
  .then(payload => {
    localStorage.setItem("currentUser", JSON.stringify(payload))
    setUser(payload)
  })
  .catch(error => console.log("login errors: ", error))
}

const signup = (userInfo) => {
  console.log("userInfo: ", userInfo)
  fetch(`${url}/signup`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST"
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    // store the token
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
  })
  .then(payload => {
    localStorage.setItem("currentUser", JSON.stringify(payload))
    setUser(payload)
  })
  .catch(error => console.log("login errors: ", error))
}

const logout = () => {
  fetch(`${url}/logout`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token") //retrieve the token
    },
    method: "DELETE"
  })
  .then(payload => {
    localStorage.removeItem("token")  // remove the token
    localStorage.removeItem("currentUser")  // remove the currentUser
    setUser(null)
  })
  .catch(error => console.log("log out errors: ", error))
}

  return(
    <>
      <Header user={user} logout={logout} login={login}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn login={login} />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/aptindex" element={<AptIndex apartments={apartments} />} />
        <Route path="/aptshow/:id" element={<AptShow apartments={apartments} />} />
        <Route path="/aptnew" element={<AptNew />} />
        <Route path="/aptedit" element={<AptEdit />} />
        {user && (
          <>
            <Route 
              path="/protectedindex" 
              element={<ProtectedIndex user={user} apartments={apartments} />} 
            />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer user={user}/>
    </>
  )
}

export default App