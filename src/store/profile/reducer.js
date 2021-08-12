import { SHOWNAME } from "./types";
import { NewProfile } from "../../App";
const initialState = {
  Icon: "https://www.pngitem.com/pimgs/m/80-804438_community-people-avatar-people-icon-white-png-transparent.png",
  FirstName: "Name",
  SecondName: "Last name",
  Age: "99",
  Phone: "+7(999)000-00-00",
};

export const profInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOWNAME:
      return {
        ...state,
        Icon: NewProfile.Icon,
        FirstName: NewProfile.FirstName,
        SecondName: NewProfile.SecondName,
        Age: NewProfile.Age,
        Phone: NewProfile.Phone,
      };
    default:
      return state;
  }
};
