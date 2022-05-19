import React from "react";
import App from "./App";
import { render, screen } from "./helpers/test-utils/test-utils";

test("renders app, with bet selector", async () => {
  render(<App />);

  expect(await screen.findByText(/V86/i)).toBeInTheDocument();
});
