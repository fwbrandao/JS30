import { screen, render } from "@testing-library/react"
import App from "../App"

test("it renders", () => {
  render(<App/>);

  const title = screen.getByText("JavaScrypt 30 Dashboard");

  expect(title).toBeDefined();
})