import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";
import { fireEvent, render, screen } from "./helpers/test-utils/test-utils";
import { testUrl } from "./helpers/test-utils/testUrl";

export const handlers = [
  rest.get(testUrl("/products/V75"), (req, res, ctx) => {
    console.log("asdasd");
    return res(
      ctx.json({
        betType: "V75",
        results: [
          {
            id: "V75_2022-05-15_55_6",
            tracks: [
              {
                id: 55,
                name: "Charlottenlund",
              },
            ],
            totalToWin: 1215369700,
            startTime: "2022-05-15T15:01:06",
            addOns: ["boost"],
          },
          {
            id: "V75_2022-04-23_18_5",
            tracks: [
              {
                id: 18,
                name: "Halmstad",
              },
            ],
            totalToWin: 9563099800,
            startTime: "2022-04-23T16:20:18",
            addOns: ["boost"],
          },
        ],
      }),
      ctx.delay(150)
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("renders app, tests loader and fetch bets", async () => {
  render(<App />);

  expect(await screen.findByText(/V86/i)).toBeInTheDocument();

  fireEvent.change(screen.getByTestId("select"), { target: { value: "V75" } });

  // should show the skeleton when loading
  expect(screen.getByTestId("loader")).toBeInTheDocument();

  // It renders the first bet
  expect(
    await screen.findByText(/Charlottenlund - 15:01/i)
  ).toBeInTheDocument();
});
