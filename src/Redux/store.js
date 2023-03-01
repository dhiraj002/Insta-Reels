import { createStore } from "redux";
import authReducer from "./Reducers/authReducer";
import { applyMiddleware } from "redux";
import { reduxFirestore,getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
const reduxStore=createStore(authReducer,applyMiddleware(thunk({getFirebase,getFirestore})),reduxFirestore(firebase));

module.exports =reduxStore;