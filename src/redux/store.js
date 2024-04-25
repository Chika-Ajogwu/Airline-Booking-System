import { createStore } from "redux";
import bookingReducer from "./bookingReducer";


//Pass a Reducer function here
const store = createStore(bookingReducer);


export default store;