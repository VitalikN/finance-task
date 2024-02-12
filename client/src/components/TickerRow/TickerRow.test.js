import { render, screen } from "@testing-library/react";
import TickerRow from "./TickerRow";

describe("<TickerRow /> component", () => {
  const mockData = {
    ticker: "AAPL",
    price: "150",
    change: "+2",
    change_percent: "+1.5",
    dividend: "1.25",
    income: "200",
    time: new Date(),
  };

  const mockCompanies = {
    AAPL: "Apple Inc.",
  };

  const mockOnTrackTicker = jest.fn();
  const mockTracked = false;

  it("renders ticker row with provided data", () => {
    render(
      <table>
        <tbody>
          <TickerRow
            data={mockData}
            companies={mockCompanies}
            onTrackTicker={mockOnTrackTicker}
            tracked={mockTracked}
          />
        </tbody>
      </table>
    );

    expect(screen.getByText("Apple Inc.")).toBeInTheDocument();
    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
    expect(screen.getByText("+1.5 %")).toBeInTheDocument();
    expect(screen.getByText("1.25")).toBeInTheDocument();
  });

  it("calls onTrackTicker function when clicked", () => {
    render(
      <table>
        <tbody>
          <TickerRow
            data={mockData}
            companies={mockCompanies}
            onTrackTicker={mockOnTrackTicker}
            tracked={mockTracked}
          />
        </tbody>
      </table>
    );
  });
});
