import './App.css';

import { InstUISettingsProvider, canvas } from '@instructure/ui';


import React from 'react';
import Nomogram from './components/Nomogram';
//import './App.css';

function App() {
  return (
    <InstUISettingsProvider theme={canvas}>
      <div className="App">
        <header className="App-header">
          <Nomogram/>
        </header>
      </div>
    </InstUISettingsProvider>
  );
}

export default App;
