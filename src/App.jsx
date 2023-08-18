import { React } from 'react';
import './resources/styles.css';

import Header      from './components/layouts/Header';
import Featured    from './components/featured/Index';
import VenueNfo    from './components/venueNfo/Index';
import HightLights from './components/highlights/Index';
import Footer      from './components/layouts/Footer';

const App = () => {
  return(
    <div className='App'>
      <Header />

      <>  
        <Featured/>
        <VenueNfo/>
        <HightLights/>
      </>

      <div style={{backgroundColor: 'red', height: '800px'}}></div>
      <div style={{backgroundColor: 'blue', height: '800px'}}></div>
      <div style={{backgroundColor: 'green', height: '800px'}}></div>
      <div style={{backgroundColor: 'yellow', height: '800px'}}></div>

      <Footer />
    </div>
  )
}

export default App;