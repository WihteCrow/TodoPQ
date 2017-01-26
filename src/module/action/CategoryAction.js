/**
 * Created by crow on 2017/1/25.
 */


export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export function addCategory(name, config) {
    return Object.assign({}, {
        type: ADD_CATEGORY,
        name
    }, config)
}

export function editCategory(text) {
    return {
        type: EDIT_CATEGORY,
        text
    }
}

export function deleteCategory(index) {
    return {
        type: DELETE_CATEGORY,
        index
    }
}