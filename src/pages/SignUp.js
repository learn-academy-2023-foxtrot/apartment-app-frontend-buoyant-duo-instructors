import React, {useRef} from "react";
import { useNavigate } from "react-router-dom";
const SignUp = ({signup}) => {

  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    // preventDefault stops the default behavior of the form which will allow us to send the data with fetch
    e.preventDefault()
    // store the form entries in a variable
    const formData = new FormData(formRef.current)
    // create an object from the entries
    const data = Object.fromEntries(formData)
    // store user's info in format that can be used with JWT
    const userInfo = {
      "user":{ email: data.email, password: data.password }
    }
    signup(userInfo)
    navigate("/")
    e.target.reset()
  }

  return(
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" />
        <br/>
        Password: <input type="password" name="password" placeholder="password" />
        <br/>
        Confirm Password: <input type="password" name="password_confirmation" placeholder="confirm password" />
        <br/>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>Already registered, <a href="/signin">Login</a> here.</div>
    </div>
  )
}

export default SignUp