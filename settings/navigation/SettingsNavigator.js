import {createStackNavigator} from "@react-navigation/stack";
import Themes from "../../common/constants/Themes";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {IoniconsHeaderButton} from "../../common/components/buttons/HeaderButtons";
import React from "react";
import SettingsScreen from "../screens/SettingsScreen";

const SettingsStack = createStackNavigator();

const SettingsNavigator = (props) => {
    return (
        <SettingsStack.Navigator
            initialRouteName={"Settings"}
            screenOptions={{
                headerTintColor: Themes.foreColor,
                headerStyle: {
                    backgroundColor: Themes.backColor,
                }
            }}
        >
            <SettingsStack.Screen
                name={"Settings"}
                component={SettingsScreen}
                options={(route) => ({
                    title: 'Events',
                    headerLeft: () => {
                        return (
                            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                                <Item
                                    title={'Menu'}
                                    iconName={'ios-menu'}
                                    onPress={() => {
                                        route.navigation.toggleDrawer();
                                    }}/>
                            </HeaderButtons>
                        )
                    }
                })}
            />
        </SettingsStack.Navigator>
    )
}

export default SettingsNavigator;