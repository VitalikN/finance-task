import { useTickerLogic } from "../hooks";

jest.mock("../hooks");

describe("<Home /> component", () => {
  it("renders main Ticker component when actualTickers are provided", () => {
    const actualTickers = [{ ticker: "AAPL", price: "150" }];
    const companies = { AAPL: "Apple Inc." };
    const titleItems = <th>Mock Title</th>;
    useTickerLogic.mockReturnValueOnce({
      actualTickers,
      companies,
      titleItems,
    });
  });
});
