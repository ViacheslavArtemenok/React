import "./App.css";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showname } from "./store/profile";
export const NewProfile = {
  Icon: "",
  FirstName: "",
  SecondName: "",
  Age: "",
  Phone: "",
};
function AppWithHooks() {
  const profInfo = useSelector((state) => state);
  const dispatch = useDispatch();

  const [ProfInpIcon, setProfInpIcon] = useState("");
  const [ProfInpName, setProfInpName] = useState("");
  const [ProfInpSecondName, setProfInpSecondName] = useState("");
  const [ProfInpAge, setProfInpAge] = useState("");
  const [ProfInpPhone, setProfInpPhone] = useState("");
  const [ProfileStyle, setProfileStyle] = useState("ProfileBlockInputCoat");
  const [CheckClose, setCheckClose] = useState("ProfileHider");
  const [RegForm, setRegForm] = useState("Create account");
  const [AvaBlock, setAvaBlock] = useState("ProfileHider");
  const handleChangeAddIcon = (event) => {
    setProfInpIcon(event.target.value);
  };
  const handleChangeAddName = (event) => {
    setProfInpName(event.target.value);
  };
  const handleChangeAddSecondName = (event) => {
    setProfInpSecondName(event.target.value);
  };
  const handleChangeAddAge = (event) => {
    setProfInpAge(event.target.value);
  };
  const handleChangeAddPhone = (event) => {
    setProfInpPhone(event.target.value);
  };
  const reviewNewProfile = function () {
    if (
      ProfInpIcon !== "" &&
      ProfInpName !== "" &&
      ProfInpSecondName !== "" &&
      ProfInpAge !== "" &&
      ProfInpPhone !== ""
    ) {
      NewProfile.Icon = ProfInpIcon;
      NewProfile.FirstName = ProfInpName;
      NewProfile.SecondName = ProfInpSecondName;
      NewProfile.Age = ProfInpAge;
      NewProfile.Phone = ProfInpPhone;
      console.log(NewProfile);
      dispatch(showname());
      setProfileStyle("ProfileHider");
    }
  };
  const reducting = function () {
    setProfileStyle("ProfileBlockInputCoat");
    setRegForm("Edit account");
    setCheckClose("ProfileClose");
  };
  const closing = function () {
    setProfileStyle("ProfileHider");
  };
  const showAvaBlock = function (item) {
    if (item) {
      setProfInpIcon(item);
    }
    if (AvaBlock === "ProfileHider") {
      setAvaBlock("AvatarBlock");
    } else setAvaBlock("ProfileHider");
  };
  return (
    <div className="NamePanelBox">
      <div className={ProfileStyle}>
        <div className="ProfileBlockInput">
          <div className={CheckClose} onClick={closing}>
            <img
              className="ProfileCloseImg"
              src="http://cdn.onlinewebfonts.com/svg/download_229857.png"
              alt="close"
            ></img>
          </div>
          <p>{RegForm}</p>
          <div className="AddAvatar" onClick={showAvaBlock}>
            <span
              className={AvaBlock === "AvatarBlock" ? "AvaOpen" : "AvaClosed"}
            >
              Change Avatar
            </span>
          </div>
          <div className={AvaBlock}>
            <img
              className="AvatarImg"
              src="https://pbs.twimg.com/profile_images/1057002966840827904/466s7Vf4.jpg"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://pbs.twimg.com/profile_images/1057002966840827904/466s7Vf4.jpg"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://i12.fotocdn.net/s119/b6910803edf88b9c/user_xl/2706592857.jpg"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://i12.fotocdn.net/s119/b6910803edf88b9c/user_xl/2706592857.jpg"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://cdn1.flamp.ru/5047e1eda89c0946f3504a6ca466d478.jpg"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://cdn1.flamp.ru/5047e1eda89c0946f3504a6ca466d478.jpg"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://vraki.net/sites/default/files/inline/images/20_32.jpg"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://vraki.net/sites/default/files/inline/images/20_32.jpg"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://yt3.ggpht.com/a/AATXAJzGCEKKNJKESnI6pomOxhkkOU5YzRSRyt5swQ=s900-c-k-c0xffffffff-no-rj-mo"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://yt3.ggpht.com/a/AATXAJzGCEKKNJKESnI6pomOxhkkOU5YzRSRyt5swQ=s900-c-k-c0xffffffff-no-rj-mo"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://sun9-36.userapi.com/impf/c852032/v852032966/87fca/ujNeqUYrj3g.jpg?size=1080x1080&quality=96&proxy=1&sign=b07cf9acff6f84a0abd532f46ca7f193&c_uniq_tag=90wLRlvc68YmNSp1yyiwYErZV_Qoss_hLhy_p3n6oPo"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://sun9-36.userapi.com/impf/c852032/v852032966/87fca/ujNeqUYrj3g.jpg?size=1080x1080&quality=96&proxy=1&sign=b07cf9acff6f84a0abd532f46ca7f193&c_uniq_tag=90wLRlvc68YmNSp1yyiwYErZV_Qoss_hLhy_p3n6oPo"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://yt3.ggpht.com/a/AATXAJzTA4-Q8mYx0he8hSx1yUUV_LPuRWxpYCCI2DFrhA=s900-c-k-c0xffffffff-no-rj-mo"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://yt3.ggpht.com/a/AATXAJzTA4-Q8mYx0he8hSx1yUUV_LPuRWxpYCCI2DFrhA=s900-c-k-c0xffffffff-no-rj-mo"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://yt3.ggpht.com/a/AATXAJxYrseXh-AbT6lMMByRa1-tOE5ziwa5wtjTZylF=s900-c-k-c0xffffffff-no-rj-mo"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://yt3.ggpht.com/a/AATXAJxYrseXh-AbT6lMMByRa1-tOE5ziwa5wtjTZylF=s900-c-k-c0xffffffff-no-rj-mo"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://yt3.ggpht.com/a/AATXAJxBVh9ALq9tHYXxPcHAxWIROizjfJUW6A-e9oY=s900-c-k-c0xffffffff-no-rj-mo"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://yt3.ggpht.com/a/AATXAJxBVh9ALq9tHYXxPcHAxWIROizjfJUW6A-e9oY=s900-c-k-c0xffffffff-no-rj-mo"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://yt3.ggpht.com/ytc/AAUvwnhr7z45su2pMjmEBnRAKHvdgemYf1LUKcikHWVLuw=s900-c-k-c0x00ffffff-no-rj"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://yt3.ggpht.com/ytc/AAUvwnhr7z45su2pMjmEBnRAKHvdgemYf1LUKcikHWVLuw=s900-c-k-c0x00ffffff-no-rj"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://yt3.ggpht.com/a/AATXAJxHXBoiv-6cvENUU-wrXItQb8nZEEGqqGeCBQ=s900-c-k-c0xffffffff-no-rj-mo"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://yt3.ggpht.com/a/AATXAJxHXBoiv-6cvENUU-wrXItQb8nZEEGqqGeCBQ=s900-c-k-c0xffffffff-no-rj-mo"
                )
              }
            ></img>
            <img
              className="AvatarImg"
              src="https://yt3.ggpht.com/ytc/AAUvwngG0sDSiBCgXNbqQfof6uKiRHVFT9VVb53fh1tqyg=s900-c-k-c0x00ffffff-no-rj"
              alt="avatar"
              onClick={() =>
                showAvaBlock(
                  "https://yt3.ggpht.com/ytc/AAUvwngG0sDSiBCgXNbqQfof6uKiRHVFT9VVb53fh1tqyg=s900-c-k-c0x00ffffff-no-rj"
                )
              }
            ></img>
          </div>
          <input
            type="text"
            className="InputReg"
            onChange={handleChangeAddIcon}
            value={ProfInpIcon}
            placeholder="Фото (введите ссылку либо выберите аватар)"
          ></input>
          <input
            className="InputReg"
            type="name"
            onChange={handleChangeAddName}
            value={ProfInpName}
            placeholder="Имя"
          ></input>
          <input
            className="InputReg"
            type="name"
            onChange={handleChangeAddSecondName}
            value={ProfInpSecondName}
            placeholder="Фамилия"
          ></input>
          <input
            className="InputReg"
            type="text"
            onChange={handleChangeAddAge}
            value={ProfInpAge}
            placeholder="Возраст"
          ></input>
          <input
            className="InputReg"
            type="phone"
            onChange={handleChangeAddPhone}
            value={ProfInpPhone}
            placeholder="Телефон"
          ></input>
          <Button
            onClick={reviewNewProfile}
            className="ChatButtonInt"
            variant="outlined"
          >
            Сохранить
          </Button>
        </div>
      </div>
      <ul className="ProfileBlock" onClick={reducting}>
        <li className="ProfileBlockItem">
          <img className="ProfileImg" src={profInfo.Icon} alt="Icon"></img>
        </li>
        <li className="ProfileBlockItem">
          Name:{" "}
          <span className="ProfileBlockItemSpan">{profInfo.FirstName}</span>
        </li>
        <li className="ProfileBlockItem">
          Last name:{" "}
          <span className="ProfileBlockItemSpan">{profInfo.SecondName}</span>
        </li>
        <li className="ProfileBlockItem">
          Age: <span className="ProfileBlockItemSpan">{profInfo.Age}</span>
        </li>
        <li className="ProfileBlockItem">
          Phone: <span className="ProfileBlockItemSpan">{profInfo.Phone}</span>
        </li>
      </ul>
    </div>
  );
}

export function App({ myName, myMessage }) {
  const [chats, setChats] = useState([
    { id: 1, name: "React@support", messages: [] },
    { id: 2, name: "Olga Petrenko", messages: [] },
    { id: 3, name: "Igor Orlov", messages: [] },
    { id: 4, name: "Alla Schulz", messages: [] },
    { id: 5, name: "Ivan Gareev", messages: [] },
  ]);
  const [countForIndex, setcountForIndex] = useState(1000);
  const [userData, setUserData] = useState("");
  const [userFriend, setUserFriend] = useState("Выберите собеседника React");
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [valueAddChat, setValueAddChat] = useState("");
  const [Chat, setChat] = useState(0);
  const Inpref = useRef(null);
  const Homeref = useRef(null);
  const InprefChat = useRef(null);
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
    Inpref.current.focus();
  };

  const handleChangeAddChat = (event) => {
    setValueAddChat(event.target.value);
    InprefChat.current.focus();
  };
  const UserAnswer = function () {
    if (userFriend !== "Выберите собеседника React" && value !== "") {
      setMessages((messages) => [
        ...messages,
        { name: NewProfile.FirstName, text: value },
      ]);
      setUserData(value);
      setcountForIndex((prevcountForIndex) => prevcountForIndex + 1);
      Inpref.current.focus();
    }
    setValue("");
  };

  const Send = function (event) {
    if (event.key === "Enter") {
      UserAnswer();
    }
  };

  const SendAddChat = function (event) {
    if (event.key === "Enter") {
      GetAddChat();
    }
  };
  const GetAddChat = function () {
    if (valueAddChat !== "") {
      setChats((chats) => [
        ...chats,
        { id: chats.length + 1, name: valueAddChat, messages: [] },
      ]);
      setValueAddChat("");
    }
  };
  const DeleteChat = function (item) {
    if (item.id !== 1) {
      setChats(chats.filter((el) => el !== item));
    }
  };
  const ChangeFriend = function (friend, indFriend) {
    setUserFriend((userFriend) => (userFriend = friend));
    setChat(indFriend);
    setcountForIndex(-1);
    Inpref.current.focus();
    setMessages(chats[indFriend].messages);
  };

  useEffect(() => {
    if (BotText[countForIndex]) {
      setTimeout(
        () => setMessages((messages) => [...messages, BotText[countForIndex]]),
        1500
      );
    }
  }, [BotText, countForIndex]);

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

  const HeaderBlock = () => {
    return (
      <header className="App-header">
        <h3>My First React App</h3>
        <h1 className="App-name">{myName}</h1>
      </header>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        {console.log(NewProfile)}
        <HeaderBlock />
        <main className="App-body">
          <div className="ChatWrapper">
            <div className="EdgeMenu">
              <div className="EdgeMenuList">
                <div className="LinkBlock">
                  <input
                    className="EdgeMenuItem"
                    type="text"
                    ref={InprefChat}
                    value={valueAddChat}
                    onChange={handleChangeAddChat}
                    onKeyDown={SendAddChat}
                  />
                  <button
                    onClick={GetAddChat}
                    className="ChatButtonLink"
                    variant="outlined"
                  >
                    OK
                  </button>
                </div>
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
            <AppWithHooks />
          </div>
        </main>
        <footer className="App-footer">{myMessage}</footer>
      </BrowserRouter>
    </div>
  );
}
