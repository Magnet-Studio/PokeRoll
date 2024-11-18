import React, { useEffect } from 'react';
import MainPanel from './components/panel';
import MainInfoButton from './components/mainInfo';
import './styles/App.css';

function App() {
  /*

  useEffect(() => {
    fetch(`http://${process.env.REACT_APP_BACKEND_URL}/users`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  */
  return (
    <>
      <MainPanel />
      <MainInfoButton />
    </>
  );
}

export default App;