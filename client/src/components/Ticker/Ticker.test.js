import { render, screen } from "@testing-library/react";
import Ticker from "./Ticker";

describe("<Ticker /> component", () => {
  it("renders main Ticker component with correct title when trigger is 'main'", () => {
    const data = [{ ticker: "AAPL", price: "150" }];
    const trigger = "main";
    const handleTrackTicker = jest.fn();
    const companies = { AAPL: "Apple Inc." };
    const titleItems = <th>Mock Title</th>;
    const trackedTickers = [];

    render(
      <Ticker
        data={data}
        trigger={trigger}
        handleTrackTicker={handleTrackTicker}
        companies={companies}
        titleItems={titleItems}
        trackedTickers={trackedTickers}
      />
    );

    expect(screen.getByText("Stock Exchange")).toBeInTheDocument();
  });

  it("renders User Tracked Ticker component with correct title when trigger is 'user'", () => {
    const data = [{ ticker: "AAPL", price: "150" }];
    const trigger = "user";
    const handleTrackTicker = jest.fn();
    const companies = { AAPL: "Apple Inc." };
    const titleItems = <th>Mock Title</th>;
    const trackedTickers = [];

    render(
      <Ticker
        data={data}
        trigger={trigger}
        handleTrackTicker={handleTrackTicker}
        companies={companies}
        titleItems={titleItems}
        trackedTickers={trackedTickers}
      />
    );

    expect(screen.getByText("User Tracked Ticker")).toBeInTheDocument();
  });
});
