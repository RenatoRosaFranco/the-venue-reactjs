import { React } from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';

import Header      from './components/layouts/Header';
import Featured    from './components/featured/Index';
import VenueNfo    from './components/venueNfo/Index';
import HightLights from './components/highlights/Index';
import Pricing     from './components/pricing/Index';
import Location    from './components/location/Index';
import Footer      from './components/layouts/Footer';

const App = () => {
  return(
    <div className='App'>
      <Header />

      <Element name='featured'>  
        <Featured />
      </Element>

      <Element name='venuenfo'>
        <VenueNfo />
      </Element>

      <Element name='highlights'>
        <HightLights />
      </Element>

      <Element name='pricing'>
        <Pricing />
      </Element>

      <Element name='location'>
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;