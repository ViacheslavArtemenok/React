import { SHOWNAME, REFRESHCHATS, SENDMESSAGE } from "./types";
import { NewProfile } from "../../App";
const initialState = {
  Icon: "https://www.pngitem.com/pimgs/m/80-804438_community-people-avatar-people-icon-white-png-transparent.png",
  FirstName: "Name",
  Email: "Email",
  Age: "99",
  Phone: "+7(999)000-00-00",
  ChatsList: [],
  NewChat: "",
  BotAnswer: "",
};

export const profInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOWNAME:
      return {
        ...state,
        Icon: NewProfile.Icon,
        FirstName: NewProfile.FirstName,
        Email: NewProfile.Email,
        Age: NewProfile.Age,
        Phone: NewProfile.Phone,
        ChatsList: NewProfile.ChatsList,
      };
    case REFRESHCHATS:
      return {
        ...state,
        ChatsList: NewProfile.ChatsList,
        NewChat: NewProfile.NewChat,
      };
    case SENDMESSAGE:
      return {
        ...state,
        ChatsList: NewProfile.ChatsList,
        NewChat: NewProfile.NewChat,
        BotAnswer: NewProfile.BotAnswer,
      };
    default:
      return state;
  }
};
