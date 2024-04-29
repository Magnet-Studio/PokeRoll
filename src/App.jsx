import React from 'react';
import MainPanel from './components/panel';
import HelpButton from './components/helpButton';
import './styles/App.css';

function App() {
  return (
    <div id='background'>
      <MainPanel/>
      <HelpButton/>
    </div>
  );
}

export default App;
