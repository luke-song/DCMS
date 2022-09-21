import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Navbar from './components/Navbar/navbar'
import Upload from './components/Upload/upload'
import Who from './components/Who/who'
import What from './components/What/what'
import Contact from './components/Contact/contact'

const theme = extendTheme({
  fonts: {
    heading: `Work Sans, sans-serif`,
    body: `Work Sans, sans-serif`,
  },
  breakpoints: {
    sm: '48em',
    md: '62em',
    lg: '80em',
    xl: '102em',
  },
  colors: {
    brand: {
      50: '#FF6467',
      100: '#FF6467',
      500: '#FF6467',
    },
  },
})

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
  )
}
