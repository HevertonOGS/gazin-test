import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Developers from './pages/Developers';

const App: React.FC = () => (
  <Router>
    <Developers />

    <GlobalStyle />
  </Router>
);

export default App;
