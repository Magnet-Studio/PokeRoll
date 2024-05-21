import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// StrictMode ayuda a encontrar mejor bugs, hay que quitarlo una vez acabemos de desarrollar

root.render(
      <App />
);