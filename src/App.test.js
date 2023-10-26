import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe("<App />", () => {
  it("renders a greeting to the Flow Master space", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    // debugging tools
    // screen.debug() // displays the html in the console for that component
    screen.logTestingPlaygroundURL() //displays a URL to open in the browser

    // act, utilizing a method to test what the user should be experiencing, a query
    const propLink = screen.getByRole('link', {
      name: /my properties/i
    })
    expect(propLink).toBeInTheDocument()
  })

  // verifying react routes through user action
  it("has navigation links", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // console.log(location.pathname)
    expect(location.pathname).toEqual("/")

    const protectLink = screen.getByText(/my prop/i);
    // screen.debug(protectLink)
    // console.log(location.pathname)
    await userEvent.click(protectLink)
    expect(location.pathname).toEqual("/protectedindex")
    
    const signUpLink = screen.getByText(/join/i);
    // screen.debug(signUpLink)
    // console.log(location.pathname)
    await userEvent.click(signUpLink)
    expect(location.pathname).toEqual("/signup")

  })
})