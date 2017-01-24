/**
 * Created by crow on 2017/1/23.
 */

import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";

import Button from "../component/Button";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: 'red',
    }
});

export default class Launch extends React.Component {
    render(){
        return (
            <View {...this.props}  style={styles.container}>
                <Text>Launch page</Text>
                <Button onPress={()=>Actions.login({data:"Custom data", title:"Custom title" })} text="登录" />
                <Button onPress={Actions.register} text="注册" />
                <Button onPress={()=>Actions.error("Error message")} text="Popup error" />
                <Button onPress={Actions.tabbar} text="Go to TabBar page"/>
                <Button onPress={Actions.switcher} text="Go to switcher page" />
                <Button onPress={Actions.pop} text="back" />
            </View>
        );
    }
}