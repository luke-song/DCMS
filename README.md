# DCMS

*Moralis Hackathon 2022 Filecoin Prize Winner* 

DCMS is a decentralized content management system (CMS) built on the blockchain. This repository contains the source code for the DCMS project.

## Installation

To install DCMS, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/luke-song/cms-on-chain.git
   ```

2. Change into the project directory:

   ```
   cd cms-on-chain
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

## Usage

To use DCMS, you need to configure and start the application. Follow these steps to get started:

1. Create a configuration file:

   ```
   cp config.example.js config.js
   ```

   Edit the `config.js` file and provide the necessary configuration parameters.

2. Start the CMS-on-Chain server:

   ```
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## Architecture

The DCMS project follows a client-server architecture. The server is built using Node.js and Express.js, while the client is built using React.js.

### Server

The server code is located in the `server` directory. It provides the API endpoints for interacting with the blockchain and managing the content.

The main files in the server directory are:

- `index.js`: The entry point of the server application. It sets up the server and starts listening for incoming requests.

- `config.js`: The configuration file for the server. It contains parameters such as the blockchain provider URL, contract address, and API key.

- `routes.js`: Defines the API routes for the server. It handles requests for creating and retrieving content.

- `controllers/`: Contains the logic for handling API requests. It interacts with the blockchain and manages the content.

### Client

The client code is located in the `client` directory. It is a single-page application built using React.js.

The main files in the client directory are:

- `src/index.js`: The entry point of the client application. It renders the root component and mounts it to the DOM.

- `src/App.js`: The main component of the client application. It handles the rendering of different pages and manages the state.

- `src/components/`: Contains reusable UI components used throughout the application.

- `src/pages/`: Contains the different pages of the application, such as
