import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("<Home />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
  })

  it("has an image", () => {
    const homeImg = screen.getByAltText(/logo/i)
    expect(homeImg).toBeVisible()
  })

})