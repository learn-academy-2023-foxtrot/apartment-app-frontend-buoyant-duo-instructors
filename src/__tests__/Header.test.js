import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("<Header />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
  })

  it("has a navigation link to index page", () => {
    const indexLink = screen.getByText(/Available Oasis/i)
    expect(indexLink).toHaveAttribute("href", "/aptindex" )
  })

  it("has a navigation link to new page", () => {
    const indexLink = screen.getAllByText(/Oasis/i)
    expect(indexLink[1]).toHaveAttribute("href", "/aptnew" )
  })
})