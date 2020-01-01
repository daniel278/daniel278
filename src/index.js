import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
const root = document.getElementById('root');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function render() {
  ReactDOM.render(<App />, root);
}
render()

if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}