import {TestData} from '../../../events/data/TestData';
import * as actions from "./actionConst";

const initialState = {
    events: TestData,
    filteredMeals: null,
    favoriteMeals: []
}

const EventReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TOGGLE_FAVORITE:
            return state;
        default:
            return state;
    }
}

export default EventReducer;