import {useWindowDimensions} from "react-native";
import Themes from "../../common/constants/Themes";
import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import EventListScreen from "../screens/EventListScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {IoniconsHeaderButton} from "../../common/components/buttons/HeaderButtons";
import EventDetailScreen from "../screens/EventDetailScreen";

const EventDrawer = createDrawerNavigator();
const EventStack = createStackNavigator();

const EventNavigator = (props) => {
    return (
        <EventStack.Navigator
            initialRouteName={"Events"}
            screenOptions={{
                headerTintColor: Themes.foreColor,
                headerStyle: {
                    backgroundColor: Themes.backColor,
                }
            }}
        >
            <EventStack.Screen
                name={"lists"}
                component={EventListScreen}
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
            <EventStack.Screen
                name={"EventDetail"}
                component={EventDetailScreen}
                options={(route) => ({
                    title: route.route.params.title,
                })}
            />
        </EventStack.Navigator>
    )
}

const EventDrawerNavigator = props => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

    return (
        <EventDrawer.Navigator
            drawerStyle={isLargeScreen ? null : {width: '90%'}}
            drawerContentOptions={{
                activeTintColor: Themes.backColor,
                labelStyle: {
                    fontFamily: 'open-sans-bold',
                    fontSize: 12,
                }
            }}
            overlayColor="transparent"
        >
            <EventDrawer.Screen
                name={'Main'}
                component={EventNavigator}
                options={{
                    drawerLabel: "Test"
                }}
            />
            <EventDrawer.Screen
                name={'Another'}
                component={EventNavigator}
                options={{
                    drawerLabel: "test2"
                }}
            />
        </EventDrawer.Navigator>
    )
};

export default EventDrawerNavigator;