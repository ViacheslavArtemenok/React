import { SHOWNAME } from "./types";
import { REFRESHCHATS } from "./types";
import { SENDMESSAGE } from "./types";
export const showname = () => ({ type: SHOWNAME });
export const refreshChats = () => ({ type: REFRESHCHATS });
export const sendMessage = (NewProfile) => ({ type: SENDMESSAGE });
export const sendMessageWithThunk = (NewProfile) => (dispatch, getState) => {
  if (NewProfile.BotAnswer) {
    setTimeout(
      () => [...NewProfile.ChatsList[NewProfile.NewChat], NewProfile.BotAnswer],
      1500
    );
  }
};
