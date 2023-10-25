import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
  })

  it("has a copyright", () => {
    const indexLink = screen.getByText(/2023 | Lagoon/i)
    expect(indexLink).toBeInTheDocument()
  })

})