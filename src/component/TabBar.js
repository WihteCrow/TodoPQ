/**
 * Created by crow on 2017/1/26.
 */


import React, {Component} from 'react'
import {StyleSheet} from 'react-native'

import {Tabs, Tab, Icon} from 'react-native-elements'

const styles = StyleSheet.create({

});


export default class TabBar extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'profile',
        };
    }

    changeTab (selectedTab) {
        this.setState({selectedTab})
    }

    render() {
        const { selectedTab } = this.state
        return (
            <Tabs>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'feed'}
                    title={selectedTab === 'feed' ? 'FEED' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
                    onPress={() => this.changeTab('feed')}>
                    <Feed />
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'profile'}
                    title={selectedTab === 'profile' ? 'PROFILE' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
                    onPress={() => this.changeTab('profile')}>
                    <Profile />
                </Tab>
                /* ... more tabs here */
            </Tabs>
        );
    }
}