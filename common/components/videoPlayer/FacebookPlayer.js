import {WebView} from "react-native-webview";
import React, {useCallback, useEffect, useState} from "react";
import {StyleSheet} from "react-native";

const FacebookPlayer = props => {
    const { width, height, facebookLink} = props
    const [source, setSource] = useState(null);

    let result = 'https://www.facebook.com/plugins/video.php?href='
    let request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
            return;
        }

        if (request.status === 200) {
            let url = request.responseURL.split('/');
            // console.log(url)
            let newUrl = 'https://www.facebook.com/facebook/videos/' + url[4].replace('?v=', '') + '/'
            // console.log(newUrl)
            result = result +
                newUrl
                    .replace(':', '%3A')
                    .split('/').join('%2F') +
                    `&show_text=false&width=${width}&height=${height}`
            // console.log(result)
            setSource(result)
        } else {
            console.warn('error');
        }
    };

    useEffect(()=> {
        request.open('GET', facebookLink);
        request.send();
        // console.log('sent')
    },[])


    const styles = StyleSheet.create({
        video: {
            width: width,
            height: height,
        }
    })

    return (
        <WebView
            source={{uri: source}}
            style={styles.video}
        />
    )
}

export default FacebookPlayer;

