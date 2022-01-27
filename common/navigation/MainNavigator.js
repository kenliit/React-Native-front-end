import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Themes from "../constants/Themes";
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import EventNavigator from "../../events/navigation/EventNavigator";
import SettingsNavigator from "../../settings/navigation/SettingsNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = props => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={"FavoritesTabs"}
                tabBarOptions={{
                    activeTintColor: Themes.foreColor,
                    inactiveTintColor: '#999999',
                    activeBackgroundColor: Themes.backColor,
                    inactiveBackgroundColor: Themes.backColor,
                    labelStyle: {
                        fontFamily: 'open-sans-bold',
                        fontSize: 12,
                        paddingBottom: 4,
                    }
                }}

            >
                <Tab.Screen
                    name={"Events"}
                    component={EventNavigator}
                    options={{
                        tabBarLabel: 'Events',
                        tabBarIcon: ({color, size}) => (
                            <MaterialIcons name={'event-available'} color={color} size={size}/>
                        )
                    }}
                />
                <Tab.Screen
                    name={'Favorites'}
                    component={EventNavigator}
                    options={{
                        tabBarLabel: 'Favorites',
                        tabBarIcon: ({color, size}) => (
                            <MaterialIcons name={'favorite-border'} color={color} size={size}/>
                        )
                    }}
                />
                <Tab.Screen
                    name={'Settings'}
                    component={SettingsNavigator}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name={'settings-outline'} color={color} size={size}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator