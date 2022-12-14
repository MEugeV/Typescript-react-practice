import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App'
import {Provider} from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App title="Typescript practice"/>
  </Provider>
);

// ReactDOM.render( //not supported in React 18
//   <Provider store={store}>
//    <App title="Typescript practice"/>
//   </Provider>,
//   document.querySelector('#root')
//  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
