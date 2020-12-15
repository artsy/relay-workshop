import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.addEventListener('DOMContentLoaded', () => {
  console.log(App);
  ReactDOM.render(<App />, document.getElementById('root'));
});
