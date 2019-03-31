import React, { Component } from 'react'
import {Element} from 'react-scroll'
import Header from './components/header_footer/Header'
import Featured from './components/featured/index'
import VenueNfo from './components/vunueNfo/index'
import HighLights from './components/HighLights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'

import './resources/styles.css'
class App extends Component {
  render() {
    return (
      <div className="App" style={{
        minHeight:"1500px"}}
      >
        
        <Header />

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="vunuenfo">
          <VenueNfo />
        </Element>

        <Element name="highlights">
          <HighLights />
        </Element>
        
        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;
