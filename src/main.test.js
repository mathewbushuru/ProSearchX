import { render, screen } from "@testing-library/react";

import { DesktopNavbar } from "components/Navbar";

test("Random test", () => {
  const HelloWorld = () => <h1>Hello World</h1>;
  render(<HelloWorld />);

  const element = screen.getByText(/Hello/i);
  expect(element).toBeInTheDocument();
});
