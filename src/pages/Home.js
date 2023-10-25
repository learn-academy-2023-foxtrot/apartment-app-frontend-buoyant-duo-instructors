import React from "react";
import homeBrand from "../assets/home.png"
const Home = () => {

  return(
    <>
      <img
        className="center-image"
        alt="logo"
        src={homeBrand}
        style={{
          height: 400,
          width: 400
        }}
      />
    </>
  )
}

export default Home