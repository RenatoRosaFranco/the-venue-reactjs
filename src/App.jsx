import { React } from 'react';
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

      <>  
        <Featured />
        <VenueNfo />
        <HightLights />
        <Pricing />
        <Location />
      </>

      <Footer />
    </div>
  )
}

export default App;