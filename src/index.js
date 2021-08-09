import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

const myName='Designed by Viacheslav';
const myMessage='All rights reserved';


ReactDOM.render(
  <React.StrictMode>
    <App myName={myName} myMessage={myMessage}>
                   </App>
               
                                   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

