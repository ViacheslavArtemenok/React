import { createStore } from "redux";
import { profInfoReducer } from "./profile";
export const store = createStore(profInfoReducer);
