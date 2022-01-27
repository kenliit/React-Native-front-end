import React from "react";
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import Themes from "../../constants/Themes";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const IoniconsHeaderButton = props => {
    return <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Themes.foreColor}
    />;
}

export const MaterialIconHeaderButton = props => {
    return <HeaderButton
        {...props}
        IconComponent={MaterialIcons}
        iconSize={23}
        color={Themes.foreColor}
    />;
}

export const TextHeaderButton = props => {
    const {onPress, text} = props;
    return (
        <TouchableOpacity style={styles.headerButton} onPress={onPress}>
            <Text style={styles.headerButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    headerButton: {
        marginHorizontal: 20,
    },
    headerButtonText: {
        fontSize: 16,
        color: Themes.foreColor,
    }
})

