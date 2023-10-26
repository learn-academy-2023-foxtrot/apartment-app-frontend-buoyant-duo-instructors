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

    // debugging tools: removed before asking for pull request
    // screen.debug() // displays the html in the console for that component
    // screen.logTestingPlaygroundURL() //displays a URL to open in the browser

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
    // starts on home page
    expect(location.pathname).toEqual("/")

    // navigates to protected index
    const protectLink = screen.getByText(/my prop/i)
    await userEvent.click(protectLink)
    expect(location.pathname).toEqual("/protectedindex")

    // delete button is on protected index page
    const deleteButton = screen.getAllByText(/delete/i)
    expect(deleteButton[0]).toBeInTheDocument()
    expect(deleteButton[1]).toHaveTextContent("Delete this property")
  })
})