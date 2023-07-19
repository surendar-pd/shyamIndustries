// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "../components/About"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Process from "../components/Process"
import Products from "../components/Products"
import Terms from './terms-condition';
import Privacy from './privacy-policy';
import Quality from '../components/Quality';
import Footer from '../components/Footer';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={
            <>
              <Header/>
              <Landing/>
              <About/>
              <Products/>
              <Process/>
              <Quality/>
              <Footer/>
            </>
          }/>
          <Route path="/terms-and-conditions" index element={<><Header/><Terms /></>}/>
          <Route path="/privacy-policy" index element={<><Header/><Privacy /></>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
