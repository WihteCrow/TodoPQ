/**
 * Created by crow on 2017/1/23.
 */


import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Scene, Reducer, Router, Switch, Modal, Actions, ActionConst} from 'react-native-router-flux'

import Login from './page/Login'
import Register from './page/Register'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBarStyle: {
        backgroundColor: '#eee'
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd'
    },
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

// define this based on the styles/dimensions you use
const getSceneStyle = (props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar="true">
                    <Scene key="loginModal" direction="vertical" component={Login} title="登录" initial="true"/>
                    <Scene key="register" renderBackButton>
                        <Scene key="registerModal" direction="vertical" component={Register} title="注册"/>
                    </Scene>
                </Scene>
                <Scene key="error" component={Error}/>
            </Router>
        );
    }
}