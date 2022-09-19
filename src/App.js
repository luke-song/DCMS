import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Upload from './components/Upload/Upload';
import Who from './components/Who/Who';
import What from './components/What/What';
import Contact from './components/Contact/Contact';

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
      50: '#FF6467',
      100: '#FF6467',
      500: '#FF6467',
    },
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/who" element={<Who />} />
          <Route path="/what" element={<What />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
