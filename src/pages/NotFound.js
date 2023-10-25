import React from "react";
import notFoundImg from "../assets/notFound.png"

const NotFound = () => {

  return(
    <>
      <h2>Whoops! Looks like there was an error.</h2>
      <img
        className="center-image"
        alt="logo"
        src={notFoundImg}
        style={{
          height: 400,
          width: 800
        }}
      />
    </>
  )
}

export default NotFound