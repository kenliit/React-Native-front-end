import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

{/*
props - "item" contains below item properties:
1. imageUri - the uri to the source
2. title - the title for the topic
3. detail - the details of the body
4. onSelect - handler to handle onPress event.

props format:
1. item
{
    imageUri: '',
    title: '',
    detail: '',
    borderColor: '', //default: 'orange'
    titleColor: '',  //default: 'black'
    detailColor: '', //default: '#666'
}

2. onSelect: func
*/
}

const ListItemWithTime = props => {
    const {item, onSelect} = props;
    const styles = StyleSheet.create({
        placeItem: {
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingVertical: 15,
            paddingHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
        },
        imageArea: {
            width: 70,
            height: 100,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#ccc',
            borderColor: item.borderColor ? item.borderColor : 'orange',
            borderWidth: 1,
        },
        imageText: {
            fontFamily: 'open-sans',
            fontSize: 10,
            paddingTop: 5,
        },
        infoContainer: {
            marginLeft: 25,
            width: 250,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        title: {
            color: item.titleColor ? item.titleColor : 'black',
            fontSize: 16,
            marginBottom: 5,
        },
        detail: {
            color: item.detailColor ? item.detailColor : '#666',
            fontSize: 12,
            marginBottom: 3,
        },
        time: {
            color: item.titleColor ? item.titleColor : 'black',
            fontSize: 12,
        }
    });

    return (
        <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
            <View style={styles.imageArea}>
                <Image
                    style={styles.image}
                    source={{uri: item.imageUri}}
                />
                <Text style={styles.imageText} numberOfLines={1}>
                    {item.imageText}
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.detail} numberOfLines={3}>{item.detail}</Text>
                {item.timeString && <Text style={styles.time}>{item.timeString}</Text>}
            </View>
        </TouchableOpacity>
    )
}


export default ListItemWithTime;