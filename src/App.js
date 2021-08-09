import "./App.css";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
export function App({ myName, myMessage }) {
  const [userName, setUserName] = useState("Имя пользователя");
  const [chats, setChats] = useState([
    { id: 1, name: "React@support", messages: [] },
    { id: 2, name: "Olga Petrenko", messages: [] },
    { id: 3, name: "Igor Orlov", messages: [] },
    { id: 4, name: "Alla Schulz", messages: [] },
    { id: 5, name: "Ivan Gareev", messages: [] },
  ]);
  const [count, setCount] = useState(1000);
  const [userData, setUserData] = useState("");
  const [userFriend, setUserFriend] = useState("Выберите собеседника React");
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueAddChat, setValueAddChat] = useState("");
  const [Chat, setChat] = useState(0);
  const Inpref = useRef(null);
  const Homeref = useRef(null);
  const BotText = useMemo(
    () => [
      { name: "Bot", text: "Привет! Как настроение?" },
      {
        name: "Bot",
        text: `Рад что ${userData.toLowerCase()}! Как тебя зовут?`,
      },
      { name: "Bot", text: `${userData}, напиши свой родной город?` },
      { name: "Bot", text: `${userData}, это далеко?` },
      { name: "Bot", text: `Кто жители этого города?` },
      { name: "Bot", text: `${userData} хорошие люди? Как думаешь?` },
      { name: "Bot", text: "Какого ты года рождения?" },
      {
        name: "Bot",
        text: `Значит тебе ${isNaN(userData) ? "много" : 2021 - userData} лет?`,
      },
      {
        name: "Bot",
        text: "Ты приятный собеседник! Держи промокод: #76jbl6 и удачи тебе!",
      },
    ],
    [userData]
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeName = (event) => {
    setValueName(event.target.value);
  };
  const handleChangeAddChat = (event) => {
    setValueAddChat(event.target.value);
  };
  const UserAnswer = function () {
    if (userFriend !== "Выберите собеседника React") {
      setMessages((messages) => [...messages, { name: userName, text: value }]);
      setUserData((userData) => (userData = value));
      setCount((prevCount) => prevCount + 1);
      Inpref.current.focus();
    }
    setValue("");
  };

  const Send = function (event) {
    if (event.key === "Enter") {
      UserAnswer();
    }
  };
  const SendName = function (event) {
    if (event.key === "Enter") {
      GetUserName();
    }
  };
  const GetUserName = function () {
    setUserName(valueName);
    setValueName("");
  };
  const SendAddChat = function (event) {
    if (event.key === "Enter") {
      GetAddChat();
    }
  };
  const GetAddChat = function () {
    setChats((chats) => [
      ...chats,
      { id: chats.length + 1, name: valueAddChat, messages: [] },
    ]);
    setValueAddChat("");
  };
  const DeleteChat = function (item) {
    if (item.id !== 1) {
      setChats(chats.filter((el) => el !== item));
    }
  };
  const ChangeFriend = function (friend, indFriend) {
    setUserFriend((userFriend) => (userFriend = friend));
    setChat(indFriend);
    setCount(-1);
    Inpref.current.focus();
    setMessages(chats[indFriend].messages);
  };

  useEffect(() => {
    if (BotText[count]) {
      setTimeout(
        () => setMessages((messages) => [...messages, BotText[count]]),
        1500
      );
    }
  }, [BotText, count]);

  useEffect(() => {
    chats[Chat].messages = messages;
  }, [chats, Chat, messages]);

  const Home = () => <h3>Welcome!</h3>;
  const GoHome = function () {
    setUserFriend("Выберите собеседника React");
  };

  useEffect(() => {
    const ListenExistChat = ({ code }) => {
      if (code === "Escape") {
        Homeref.current.click();
      }
    };
    document.addEventListener("keydown", ListenExistChat);
    return () => {
      document.removeEventListener("keydown", ListenExistChat);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {console.log(chats)}
        <header className="App-header">
          <h3>My First React App</h3>
          <h1 className="App-name">{myName}</h1>
          <div className="ChatWrapper">
            <div className="EdgeMenu">
              <div className="EdgeMenuList">
                {chats.map((item) => (
                  <div
                    className="LinkBlock"
                    key={(chats.indexOf(item) + 1) * 2}
                  >
                    <Link
                      to={`/chats/${item.id}`}
                      className="EdgeMenuItem"
                      key={chats.indexOf(item)}
                      onClick={() =>
                        ChangeFriend(item.name, chats.indexOf(item))
                      }
                    >
                      {item.name}
                    </Link>
                    <button
                      key={(chats.indexOf(item) + 1) * 3}
                      onClick={() => DeleteChat(item)}
                      className="ChatButtonLink"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="ChatBox">
              <Link
                ref={Homeref}
                className="ChatTittle TittleLink"
                to="/"
                onClick={GoHome}
              >
                Home
              </Link>
              <p className="ChatTittle">{userFriend}</p>
              <div className="ChatCoat">
                <div className="ChatHider"></div>
                <div className="Chat">
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    {chats.map((item) => (
                      <Route
                        path={`/chats/${item.id}`}
                        key={chats.indexOf(item)}
                      >
                        {messages.map((message) => (
                          <div
                            key={messages.indexOf(message)}
                            className={
                              message.name === "Bot"
                                ? "ChatMessageLeft"
                                : "ChatMessageRight"
                            }
                          >
                            {message.text}
                          </div>
                        ))}
                      </Route>
                    ))}
                    <Route path="*">
                      <div>
                        <p>Chat is not found</p>
                        <h1>404</h1>
                      </div>
                    </Route>
                  </Switch>
                </div>
              </div>
              <div className="ChatPannel">
                <input
                  ref={Inpref}
                  className="ChatInput"
                  type="text"
                  value={value}
                  onChange={handleChange}
                  onKeyDown={Send}
                  autoFocus={true}
                />
                <Button
                  onClick={UserAnswer}
                  className="ChatButtonInt"
                  variant="outlined"
                >
                  Отправить
                </Button>
              </div>
            </div>
            <div className="NamePanelBox">
              <div className="NamePanel">
                <p className="ChatTittleName">{userName}</p>
                <input
                  className="ChatInputName"
                  type="text"
                  value={valueName}
                  onChange={handleChangeName}
                  onKeyDown={SendName}
                />
                <Button
                  onClick={GetUserName}
                  className="ChatButtonInt"
                  variant="outlined"
                >
                  OK
                </Button>
              </div>
              <div className="NamePanel">
                <p className="ChatTittleName">Добавить чат</p>
                <input
                  className="ChatInputName"
                  type="text"
                  value={valueAddChat}
                  onChange={handleChangeAddChat}
                  onKeyDown={SendAddChat}
                />
                <Button
                  onClick={GetAddChat}
                  className="ChatButtonInt"
                  variant="outlined"
                >
                  OK
                </Button>
              </div>
            </div>
          </div>
        </header>
        <footer className="App-footer">{myMessage}</footer>
      </BrowserRouter>
    </div>
  );
}
