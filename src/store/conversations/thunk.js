import { db } from "../../api/firebase"
import { GET_CONVERSATIONS } from "./types"
export const getConversationsFB = () => (dispatch) => {
  db.ref("conversations")
    .get()
    .then((snapshot) => {
      const conversations = []
      snapshot.forEach((snap) => {
        conversations.push(snap.val())
      })
      dispatch({ type: GET_CONVERSATIONS, payload: conversations })
    })
}
