import './App.css';
import React, { useState, useEffect } from 'react';

export function App({myName, myMessage}) {
  return (
    <div className="App">
     <header className="App-header">
       My First React App
       <h1 className="App-name">{myName}</h1>
       <MessagesList></MessagesList>
       <p>2021 &copy; {myMessage}</p>
        </header>
                </div>

  );
}
export function MessagesList() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const getAge= function (){
    if(isNaN(value)){
      return "много";
    } else {
      return (2021-value);
    }
  }
  const BotText = [
    {name: "Bot", text: "Привет, странник! Я бот React! Как настроение?"}, 
    {name: "Bot", text: `Рад что ${value.toLowerCase()}! Как тебя зовут?`}, 
    {name: "Bot", text: `${value}, напиши свой родной город?`}, 
    {name: "Bot", text: `${value}, это далеко?`}, 
    {name: "Bot", text: `Кто жители этого города?`}, 
    {name: "Bot", text: `${value} хорошие люди? Как думаешь?`}, 
    {name: "Bot", text: "Какого ты года рождения?"}, 
    {name: "Bot", text: `Значит тебе ${getAge()} лет?`}, 
    {name: "Bot", text: "Ты приятный собеседник! Держи промокод: #76jbl6 и удачи тебе!"}
  ];
  
  const handleChange = (event) => {
  setValue(event.target.value);
   }
  const UserAnswer= function(){
      setMessages([...messages, {name: "User", text: value}]);
   }
  
  const BotAnswer= function(){
    setMessages([...messages, {name: "User", text: value}, BotText[count]]);
    setCount((prevCount) => prevCount + 1);
    document.getElementById("FieldInput").value="";
      }
   const AddInArr= function (){
      if(BotText[count]){setTimeout(BotAnswer, 1500);}
  }
    
  const UserAnswerEnter = function(event){
    if(event.key === 'Enter'){
      UserAnswer();
    }
  }
  const AddInArrEnter = function(event){
    if(event.key === 'Enter'){
      AddInArr();
  }
  }  
  const ArrList = function(){
    return messages.map((message) => {
    if(message.name ==="Bot"){
    return (<div className="ChatMessageLeft">{message.text}</div>);
  } else {
    return (<div className="ChatMessageRight">{message.text}</div>);
  }
  });
  }
  useEffect(() => {
    document.getElementById("FieldInput").value="";
      }, [messages]);
      
       
  return (
  <div className="ChatWrapper">
    <div className="ChatBox">
    <p className="ChatTittle">Чтобы начать общение, напишите в чате "Начать"</p>
    <div className="Chat">{ArrList()}
    </div>
    <div className="ChatPannel" onKeyDown={UserAnswerEnter}>
     <input id="FieldInput" className="ChatInput" type="text" value={value} onChange={handleChange} onKeyDown={AddInArrEnter}/>
    <div className="ChatButton" onClick={UserAnswer}><button className="ChatButtonInt" onClick={AddInArr}>Отправить</button></div>
    </div>
    </div>
  </div>
  )
  }
 

 


 
 

