import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("<NotFound />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
  })

  it("has an image", () => {
    const notFoundImg = screen.getByAltText(/logo/i)
    expect(notFoundImg).toBeVisible()
  })

})