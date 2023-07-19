import {combineReducers} from "redux";
import tasks from "./task/taskReducer";

export const reducers = combineReducers({
    tasks: tasks,
})

