// Core
import { Routes, Route } from 'react-router-dom';

// Components
import { Navbar, Clock, Timer, Weather } from './view/components';

// Styles
import { AppContainer } from './styles';

const App = () => {
  return (
    <AppContainer className='AppContainer'>
      <Routes>
        <Route
          path='*'
          element={<Clock />} 
        />
        <Route
          path='/timer'
          element={<Timer />} 
        />
        <Route
          path='/weather'
          element={<Weather />} 
        />
      </Routes>
      <Navbar />
    </AppContainer>
  );
}

export default App;
