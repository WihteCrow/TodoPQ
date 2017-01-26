/**
 * Created by crow on 2017/1/25.
 */

import {combineReducers} from 'redux'

import {removeArrayByIndex} from '../Utils'
import {ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from '../action/TodoAction'

const {SHOW_ALL} = VisibilityFilters;


function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}


function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case EDIT_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        text: action.text
                    })
                }
                return todo;
            });
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            });
        case DELETE_TODO:
            return removeArrayByIndex(state, index);
        default:
            return state;
    }
}


export default todo = combineReducers({
    visibilityFilter,
    todos
})