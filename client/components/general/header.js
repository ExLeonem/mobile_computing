import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {DrawerIcon, AddIcon, RemoveIcon, BackIcon} from './icons';
import {header} from '../fonts';
import MainNavigation from '../navigation/navigator';

import {snow} from '../colors';

const headStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        maxHeight: 70,
        minHeight: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    drawerIconStyle: {
        padding: 10, 
        borderRadius: 50
    },
    title: {
        fontSize: header,
    }
});


export default class Header extends React.Component {

    renderIcon(icon, iconColor) {
        if(icon == "remove") {
            return <RemoveIcon color={iconColor != undefined? iconColor : snow.hex()}/>;
        } else if(icon == "back") {
            return <BackIcon color={iconColor != undefined? iconColor : snow.hex()}/>
        }
        return <DrawerIcon scaleBy={5}/>;
    }

    render() {
        return (
            <View style={headStyle.container}>
                <TouchableHighlight 
                    style={headStyle.drawerIconStyle} 
                    onPress={() => this.props.onPress()} 
                    underlayColor={this.props.underlayColor != undefined? this.props.underlayColor : snow.hex()}
                >
                    {this.renderIcon(this.props.icon, this.props.iconColor)}
                </TouchableHighlight>
                <Text style={headStyle.title}>{this.props.children}</Text>
                <View>
                    {this.props.subTask}
                </View>
            </View>
        );
    }
}