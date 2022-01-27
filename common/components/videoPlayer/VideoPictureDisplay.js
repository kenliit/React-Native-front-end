import React from "react";
import {View, StyleSheet, Image} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import FacebookPlayer from "./FacebookPlayer";

{/*
    props: object{
        type: 'YouTube'/'Facebook'/'Picture'
        uri: 'https://...'
    },
    width: int,
    height: int,

    return function to show object in the container
*/
}

const VideoPictureDisplay = props => {
    const {videoOrPicture, width, height} = props;

    const styles = StyleSheet.create({
        image: {
            width: width,
            height: height
        }
    })

    let result;
    switch (videoOrPicture.type) {
        case 'YouTube':
            let uri = videoOrPicture.uri.split('/').pop()
            result = <YoutubePlayer
                        height={height}
                        videoId={uri}
                        play={true}
                    />
            break;
        case 'Facebook':
            result = <FacebookPlayer
                facebookLink={videoOrPicture.uri}
                width={width}
                height={height}
            />
            break;
        case 'Picture':
            result = <Image style={styles.image} source={{uri: videoOrPicture.uri}} />
    }

    return result;
};

export default VideoPictureDisplay;