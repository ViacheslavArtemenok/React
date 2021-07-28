import './App.css';

export function App(props) {
  return (
    <div className="App">
     <header className="App-header" onClick={props.handleClick}>
       My First React App
       <h1 className="App-name">{props.myName}</h1>
       <p>For {props.myMessage}</p>
       </header>
       <div className="Children-header">{props.children}</div>
   </div>

  );
}
export function Message(props) {
  return (
    <div className="Message">
     <main className="Message-header">
       <h2 className="Message-name">Lorem</h2>
       <p>Hello, {props.myMessage}</p>
     </main>
   </div>

  );
}


