import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Button, useWindowDimensions} from 'react-native';
import DefaultText from "../../common/components/text/DefaultText";
import {useDispatch, useSelector} from "react-redux";
import VideoPictureDisplay from "../../common/components/videoPlayer/VideoPictureDisplay";

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const EventDetailScreen = props => {
    const dimensions = useWindowDimensions();
    const {eventId} = props.route.params;

    const events = useSelector(state => state.events.events);
    const selectedEvent = events.find(eve => eve.id === eventId);

    return (
        <ScrollView>
            <VideoPictureDisplay
                width={Math.ceil(dimensions.width)}
                height={250}
                videoOrPicture = {selectedEvent.picture}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
    },
});

export default EventDetailScreen
