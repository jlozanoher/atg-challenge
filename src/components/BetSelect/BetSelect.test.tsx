import React from "react";
import { render, screen, fireEvent } from "../../helpers/test-utils/test-utils";
import BetSelect from "./BetSelect";

test("Bet select has the expected options", async () => {
  const handleClick = jest.fn();

  render(<BetSelect options={[`V75`, `V86`, `GS75`]} onSelect={handleClick} />);

  fireEvent.change(screen.getByTestId("select"), { target: { value: "V86" } });

  expect(screen.getByTestId("select")).toHaveValue("V86");

  // click on Begin button
  expect(handleClick).toHaveBeenCalledTimes(1);
});
