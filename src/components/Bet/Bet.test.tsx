import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, fireEvent } from "../../helpers/test-utils/test-utils";
import { testUrl } from "../../helpers/test-utils/testUrl";
import Bet from "./Bet";

const bet = {
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
};

export const handlers = [
  rest.get(testUrl("/games/V75_2022-05-15_55_6"), (req, res, ctx) => {
    return res(
      ctx.json({
        "@type": ".Game",
        id: "V75_2022-05-15_55_6",
        status: "results",
        races: [
          {
            id: "2022-05-15_55_6",
            name: "Charlottenlund Open",
            date: "2022-05-15",
            number: 6,
            startTime: "2022-05-15T15:01:06",
            starts: [
              {
                number: 1,
                horse: {
                  name: "Marcello Wibb",
                  age: 7,
                  sex: "gelding",
                  trainer: {
                    firstName: "Vincent",
                    lastName: "Martens",
                    shortName: "Mar Vi",
                  },
                  owner: {
                    name: "Ecurie Black och White",
                  },

                  pedigree: {
                    father: {
                      name: "Raja Mirchi",
                    },
                  },
                },
                driver: {
                  id: 0,
                  firstName: "Christophe",
                  lastName: "Martens",
                  shortName: "Mar Ch",
                  license: "Okänd",
                  silks: "Hvid/sort",
                },
              },
              {
                number: 2,
                horse: {
                  name: "Baxo Epice",
                  sex: "gelding",
                  trainer: {
                    firstName: "Gitte",
                    lastName: "Madsen",
                    shortName: "Mad Gi",
                    license: "Okänd",
                  },
                  owner: {
                    name: "Thomas Baastrup",
                  },
                  pedigree: {
                    father: {
                      name: "Trophy Catch",
                    },
                  },
                },
                driver: {
                  id: 0,
                  firstName: "Birger",
                  lastName: "Jørgensen",
                },
              },
            ],
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

test("Renders a Bet and fetch game data", async () => {
  render(<Bet bet={bet} />);

  // should show the skeleton when loading
  expect(screen.getByTestId("skeleton")).toBeInTheDocument();

  // It renders the game and races
  expect(
    await screen.findByText(/Charlottenlund - 15:01/i)
  ).toBeInTheDocument();

  // It renders the game header
  expect(
    await screen.findByText(/6 - Charlottenlund Open - 15:01/i)
  ).toBeInTheDocument();

  // It renders the first horse
  expect(
    await screen.findByText(/1 Marcello Wibb - Christophe Martens/i)
  ).toBeInTheDocument();

  // The horse details is closed
  expect(
    screen.getByText(/1 Marcello Wibb - Christophe Martens/i)
  ).not.toHaveProperty("open");

  // Opening a details info by clicking
  fireEvent.click(screen.getByText(/1 Marcello Wibb - Christophe Martens/i));

  // Checking details is opened
  expect(
    (await screen.findByText(/1 Marcello Wibb - Christophe Martens/i)).closest(
      "details"
    )
  ).toHaveProperty("open");
});
