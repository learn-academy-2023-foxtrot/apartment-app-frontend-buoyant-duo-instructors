import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp'

describe("<SignUp />", () => {
  beforeEach( () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
  })

  it("renders a submit button", () => {
    screen.logTestingPlaygroundURL()
    const submitButton = screen.getByRole('button', {
      name: /submit/i
    })
    expect(submitButton).toBeInTheDocument()
  })

  it("allows a user to input an email", () => {
    const emailField = screen.getByPlaceholderText(/email/i)
    fireEvent.change(emailField, {target: {value: "test@email.com"}})
    console.log(emailField.value)
    expect(emailField.value).toBe("test@email.com")
  })
})