import { Platform } from "react-native";

export const Colors = {
    primary: '#fc9208',
    accent: "#4a148c",
    color0: '#f5428d',
    color1: '#f54242',
    color2: '#f5a442',
    color3: '#f5d142',
    color4: '#368dff',
    color5: '#41d95d',
    color6: '#9eecff',
    color7: '#b9ffb0',
    color8: '#ffc7ff',
    color9: '#47fced',
}

export default {
    mainBackgroundColor: '#fff',
    foreColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    backColor: Platform.OS === 'android' ? Colors.primary : 'white',
}

