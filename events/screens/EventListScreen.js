import * as React from 'react';
import {FlatList,} from 'react-native';
import {TestData} from '../data/TestData'
import ListItemWithTime from "../../common/components/cards/lists/ListItemWithTime";
import {Colors} from "../../common/constants/Themes";

const EventListScreen = props => {
    const renderActivityItem = (itemData) => {
        return (
            <ListItemWithTime
                item={{
                    imageUri: itemData.item.publisher.avatar,
                    title: itemData.item.theme,
                    detail: itemData.item.description,
                    timeString: itemData.item.getDisplayDateTimeString(),
                    titleColor: Colors.color1,
                    imageText: itemData.item.publisher.user,
                }}
                onSelect={() => {
                        props.navigation.navigate(
                            'EventDetail',
                            {
                                eventId: itemData.item.id,
                                title: itemData.item.theme
                            }
                        )
                    }
                }
            />
        )
    }

    return (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={TestData}
            renderItem={renderActivityItem}
        />
    )
};

export default EventListScreen