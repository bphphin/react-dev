import { combineReducers, createStore } from "redux";
import counterReduce from "./CounterRedux";


// combineReducers la 1 ham cung cap boi redux
//giup chung ta ket hop nhieu reducers
const reducers = combineReducers({
    //key: value
    counter: counterReduce
});
const store = createStore(reducers);

export default store;
