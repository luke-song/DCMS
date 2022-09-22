import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoralisProvider } from "react-moralis"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId="h7EmyAoYpXKne041AKchI7LrY392A05w7lQzoCmt"
      serverUrl="https://mwwwzqdsadyj.usemoralis.com:2053/server"
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
