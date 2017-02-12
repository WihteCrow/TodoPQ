/**
 * Created by crow on 2017/1/25.
 */

import React, {Component} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ListCategory from '../pageUI/ListCategory'
import category from '../module/reducer/CategoryReducer';

let store = createStore(category);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

export default class Category extends Component {
    render() {
        return (
            <Provider store={store}>
                <ListCategory/>
            </Provider>
        );
    }
}