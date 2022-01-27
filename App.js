import React from 'react';
import {enableScreens} from "react-native-screens";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";
import MainNavigator from "./common/navigation/MainNavigator";
import EventReducer from "./common/store/events/EventReducer"
import ReduxThunk from 'redux-thunk';

enableScreens();

const rootReducer = combineReducers({
    events: EventReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
    let [fontsLoaded] = useFonts({
        'open-sans': require('./common/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./common/fonts/OpenSans-Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <Provider store={store}>
            <MainNavigator/>
        </Provider>
    );
}
