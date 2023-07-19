import {ADD_TASK, DELETE_TASK, EDIT_TASK} from "../../action-types";

const initialState = {
    tasks: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        }
        case DELETE_TASK: {
            const deletedFromTasks = state.tasks.filter(el => el.id !== action.payload);
            return {
                ...state,
                tasks: deletedFromTasks
            }
        }
        case EDIT_TASK: {
            const deletedFromTasks = state.tasks.filter(el => el.id !== action.payload.id);
            const renewed = [...deletedFromTasks, action.payload].sort((a, b) => a.id - b.id);
            return {
                ...state,
                tasks: renewed
            }
        }
        default: {
            return state
        }
    }
}