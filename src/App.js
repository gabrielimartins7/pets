import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './@styles/styles';

import Routes from './routes'



function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Routes/>
   
   
    </BrowserRouter>
  );
}

export default App;
