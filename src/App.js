import './App.css';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Button from '@material-ui/core/Button';
export function App({myName, myMessage}) {
  
  const chats = [
    {id: 1, name: "Alexandr Ivanov"},
    {id: 2, name: "Olga Petrenko"},
    {id: 3, name: "Igor Orlov"},
    {id: 4, name: "Alla Schulz"},
    {id: 5, name: "Ivan Gareev"}
  ];
  const [count, setCount] = useState(1000);
  const [userData, setUserData] = useState('');
  const [userFriend, setUserFriend] = useState('Выберите собеседника React');
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const Inpref= useRef(null)   
  const BotText = useMemo(()=> [
    {name: "Bot", text: "Привет! Как настроение?"}, 
    {name: "Bot", text: `Рад что ${userData.toLowerCase()}! Как тебя зовут?`}, 
    {name: "Bot", text: `${userData}, напиши свой родной город?`}, 
    {name: "Bot", text: `${userData}, это далеко?`}, 
    {name: "Bot", text: `Кто жители этого города?`}, 
    {name: "Bot", text: `${userData} хорошие люди? Как думаешь?`}, 
    {name: "Bot", text: "Какого ты года рождения?"}, 
    {name: "Bot", text: `Значит тебе ${isNaN(userData) ? "много" : (2021-userData)} лет?`}, 
    {name: "Bot", text: "Ты приятный собеседник! Держи промокод: #76jbl6 и удачи тебе!"}
  ], [userData]);
  
  const handleChange = (event) => {
  setValue(event.target.value);
   }
  const UserAnswer= function(){
    if(userFriend !== 'Выберите собеседника React'){  
      setMessages((messages)=> [...messages, {name: "User", text: value}]);
      setUserData((userData)=> userData = value);
      setCount((prevCount) => prevCount + 1);
      Inpref.current.focus(); 
    } setValue("");
  }
  
  const Send= function(event){
    if(event.key ==="Enter"){
      UserAnswer();}
  }
  const ChageFriend= function(friend){
    setUserFriend((userFriend)=> userFriend= friend);
    setCount(() => -1);
    setMessages(()=>[]);
    Inpref.current.focus(); 
  }  
    
  useEffect(() => {
    if(BotText[count]){
      setTimeout(()=> setMessages((messages)=> [...messages, BotText[count]]), 1500)
    }
      }, [BotText, count]);
         
  return (
    <div className="App">
     <header className="App-header">
       <h3>My First React App</h3>
       <h1 className="App-name">{myName}</h1>
       <div className="ChatWrapper">
    <div className="EdgeMenu">
      <div className="EdgeMenuHider"></div>
      <ul className="EdgeMenuList">
          {chats.map((item)=> <li className="EdgeMenuItem" key={chats.indexOf(item)} onClick={()=> ChageFriend(item.name)}>{item.name}</li>)}
      </ul>
    </div>
    <div className="ChatBox">
    <p className="ChatTittle">{userFriend}</p>
    <div className="ChatCoat">
      <div className="ChatHider"></div>
      <div className="Chat">{messages.map((message) => <div key={messages.indexOf(message)} className={message.name ==="Bot" ? "ChatMessageLeft" : "ChatMessageRight"}>{message.text}</div>)}
      </div>
    </div>
    <div className="ChatPannel">
    <input ref={Inpref} className="ChatInput" type="text" value={value} onChange={handleChange} onKeyDown={Send} autoFocus={true}/>
    <Button onClick={UserAnswer} className="ChatButtonInt" variant="outlined">Отправить</Button>
    </div>
    </div>
  </div>
        <p>2021 &copy; {myMessage}</p>
  
        </header>
                </div>

  );
}


 


 
 

