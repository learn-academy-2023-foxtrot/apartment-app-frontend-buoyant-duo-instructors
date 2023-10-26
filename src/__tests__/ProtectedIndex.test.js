import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import ProtectedIndex from "../pages/ProtectedIndex";
import mockApartments from "../mockProperties"
import mockUsers from "../mockUsers";

describe('<ProtectedIndex />', () => {
  it('has an image on each card', () => {
    render(
      <BrowserRouter>
        <ProtectedIndex user={mockUsers[1]} apartments={mockApartments} />
      </BrowserRouter>
    )
    
    // screen.debug()
    const altTxt = screen.getAllByAltText(/profile picture for/i)
    // screen.debug(altTxt[0])
    expect(altTxt[0]).toBeInTheDocument()

    // query an image
    const oasisImage = screen.getByRole('img', { name: /21 Candy Cove/i })
    
    // assert
    expect(oasisImage).toHaveAttribute("src", "https://images.unsplash.com/photo-1632765471084-9f2ab98365bf?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5mbGF0YWJsZXxlbnwwfHwwfHx8MA%3D%3D");
    expect(oasisImage).toHaveAttribute("alt", "profile picture for 21 Candy Cove")
  })

  it('only displays properties that belong to the current user', () => {
    render(
      <BrowserRouter>
        <ProtectedIndex user={mockUsers[1]} apartments={mockApartments} />
      </BrowserRouter>
    )
    
    const images = screen.getAllByRole('img')
    expect(images.length).toEqual(2)
  })
})