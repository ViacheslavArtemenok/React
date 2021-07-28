import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Message} from './App';

const myName='Designed by Viacheslav';
const myMessage='my dear friends!!!!!!';
const handleClick = function(){
  console.log('Click');
 };
ReactDOM.render(
  <React.StrictMode>
    <App myName={myName} handleClick={handleClick} myMessage={myMessage}>
           <Message myMessage={myMessage} />
           <h2>Children element</h2>
    </App>
    <Message myMessage={myMessage} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

