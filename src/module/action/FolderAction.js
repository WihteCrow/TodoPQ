/**
 * Created by crow on 2017/1/25.
 */

function addFolder(text) {
    return {
        type: 'ADD_FOLDER',
        text
    }
}

function editFolder(text) {
    return {
        type: 'EDIT_FOLDER',
        text
    }
}

function deleteFolder(index) {
    return {
        type: 'DELETE_FOLDER',
        index
    }
}

export {addFolder, editFolder, deleteFolder}