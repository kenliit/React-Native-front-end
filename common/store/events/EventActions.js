import * as actions from "./actionConst";

export const toggleFavorite = (id) => {
    return {
        type: actions.TOGGLE_FAVORITE,
        activityId: id
    };
};

export const setFilters = (filterSettings) => {
    return {
        type: actions.SET_FILTERS,
        filters: filterSettings
    };
}
