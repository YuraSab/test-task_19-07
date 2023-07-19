import {ADD_TASK, DELETE_TASK, EDIT_TASK} from "../../action-types";

export const onAddTask = (task) => ({
    type: ADD_TASK,
    payload: task
});

export const onDeleteTask = (task) => ({
    type: DELETE_TASK,
    payload: task
});

export const onEditTask = (task) => ({
    type: EDIT_TASK,
    payload: task
});