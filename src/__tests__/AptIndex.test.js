import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import AptIndex from "../pages/AptIndex";
import mockApartments from "../mockProperties"

describe('<AptIndex />', () => {
  it('has an alt text for each image', () => {
    render(
      <BrowserRouter>
        <AptIndex apartments={mockApartments} />
      </BrowserRouter>
    )
    
    // screen.debug()
    const altTxt = screen.getAllByAltText(/profile picture for/i)
    // screen.debug(altTxt[0])
    expect(altTxt.length).toEqual(4)

    // query an image
    const oasisImage = screen.getByRole('img', { name: "profile picture for 21 Dreamy Meadows"})
    
    // assert
    expect(oasisImage).toHaveAttribute("src", "https://images.unsplash.com/photo-1603538966022-afcc0803652e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5mbGF0YWJsZXxlbnwwfHwwfHx8MA%3D%3D");
    expect(oasisImage).toHaveAttribute("alt", "profile picture for 21 Dreamy Meadows")
  })

  it('only displays properties that belong to the current user', () => {
    render(
      <BrowserRouter>
        <AptIndex apartments={mockApartments} />
      </BrowserRouter>
    )
    
    const images = screen.getAllByRole('img')
    expect(images.length).toEqual(4)
  })
})