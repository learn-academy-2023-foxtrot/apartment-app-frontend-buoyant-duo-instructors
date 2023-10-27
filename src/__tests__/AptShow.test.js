import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import AptShow from '../pages/AptShow';
import mockApts from "../mockProperties"

describe('<AptShow />', () => {
  it('renders a button', () => {
    render(
      <MemoryRouter initialEntries={["/aptshow/1"]}>
        <Routes>
          <Route path="/aptshow/:id" element={<AptShow apartments={mockApts} />} />
        </Routes>
      </MemoryRouter>
    )
    // screen.logTestingPlaygroundURL()
    const resButton = screen.getByRole('button', {
      name: /reserve today/i
    })

    expect(resButton).toHaveTextContent("Reserve Today")
  })
})