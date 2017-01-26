/**
 * Created by crow on 2017/1/25.
 */


import {combineReducers} from 'redux'

import {removeArrayByIndex} from '../Utils'
import {ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY} from '../action/CategoryAction'


function categories(state = [], action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return [
                ...state,
                {
                    name: action.name,
                    leftIconName: action.leftIconName,
                    leftIconType: action.leftIconType,
                    rightIconName: action.rightIconName,
                    rightIconType: action.rightIconType,
                    count: 0,
                    completed: false
                }
            ];
        case DELETE_CATEGORY:
            return removeArrayByIndex(state, index);
        case EDIT_CATEGORY:
            return state.map((category, index) => {
                if (index === action.index) {
                    return Object.assign({}, category, {
                        completed: !category.completed
                    })
                }
                return category;
            });
        default:
            return state;
    }
}


export default CategoryReducer = combineReducers({
    categories
})