import React, { useState } from "react";
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

  const [user, setUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockProperties)

  console.log(user, apartments)

  return(
    <>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
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