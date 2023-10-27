import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import SignIn from '../pages/SignIn'

describe("<SignIn />", () => {
  beforeEach( () => {
    const login = jest.fn()
    render(
      <BrowserRouter>
        <SignIn login={login} />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
  })
  
  it("renders a submit button", () => {
    screen.logTestingPlaygroundURL()
    const logButton = screen.getByRole('button', {
      name: /login/i
    })
    expect(logButton).toBeInTheDocument()
  })

})