// Core
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { Navbar, Clock, Timer, Weather } from './view/components';

const AppContainer = styled.div`
font-size: 25px;
position: relative;
width: 100vw;
height: 100vh;
background: linear-gradient(to top, rgb(60, 60, 60) 0%,  rgb(30, 30, 30) 50%,  rgb(60, 60, 60) 100%);
`;

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
          path='/weather/*'
          element={<Weather />} 
        />
      </Routes>
      <Navbar />
    </AppContainer>
  );
}

export default App;
