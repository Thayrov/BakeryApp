import { Dimensions, StatusBar, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.BGColor,
        marginTop: StatusBar.currentHeight,
    },
    title: {
        fontSize: ((height * width) / 1000) * 0.04,
        fontFamily: 'Rancho-Regular',
        color: THEME.colors.TextColor,
        padding: height * 0.01,
    },
    containerList: {
        flex: 1,
    },
});

export default styles;
