# React Test Task

### Description

The project is a web application built using React, serving as the frontend for a financial application. It provides a user interface for interacting with financial data, including information about stocks, companies, and tracking capabilities.

The program is connected to a locally hosted service that provides access to financial data. The application displays real-time price changes for selected tickers. Additionally, it compares previous and current percentage change values and displays positive or negative trends in prices in the user interface in real-time.

The application also features functionality allowing users to track selected companies. They can add or remove companies from their watchlist to receive up-to-date information about their financial status.

Furthermore, the application has an adaptive web design, meaning it adjusts to different screen sizes and devices to ensure a comfortable user experience regardless of the device being used.

## Technologies Used

- React (with hooks)
- Redux (with Redux-Toolkit)
- prop-types
- react-icons
- sass
- socket.io-client

## Note: Node.js version should be 16.9.0 or below!!!

## Running the local service

1. Open a new bash shell
2. `cd server`
3. `npm install` or `yarn install`
4. `npm run start` or `yarn start`
5. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

## Run your application

1. Open a new bash shell
2. `cd client`
3. `npm install` or `yarn install`
4. `npm run start` or `yarn start`

## Run the tests

1. Open a new bash shell
2. `cd client`
3. `npm run test` or `yarn test`

# Price Service Usage

URL:
`http://localhost:4000`

Price tickers are real-time via web-sockets.
