import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar/navbar';

const theme = extendTheme({
  fonts: {
    heading: `Work Sans, sans-serif`,
    body: `Work Sans, sans-serif`,
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
  },
  colors: {
    brand: {
      100: '#FF6467',
    },
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        {/* <Routes>
            <Route path="/" element={<How />} />
            <Route path="/who" element={<Who />} />
            <Route path="/what" element={<What />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
      </Router>
    </ChakraProvider>
  );
}
