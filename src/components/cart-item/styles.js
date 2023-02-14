import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: ((height * width) / 1000) * 0.04,
        height: ((height * width) / 1000) * 0.7,

        backgroundColor: THEME.colors.SecondaryColor,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: THEME.colors.PrimaryColor,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingVertical: ((height * width) / 1000) * 0.02,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: THEME.colors.ComplementaryColor2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingHorizontal: ((height * width) / 1000) * 0.3,
    },

    title: {
        fontSize: ((height * width) / 1000) * 0.1,
        fontFamily: 'Caveat-variable',
        color: THEME.colors.TextColor,
        padding: height * 0.01,
    },

    quantity: {
        fontSize: ((height * width) / 1000) * 0.1,
        fontFamily: 'Caveat-variable',
        color: THEME.colors.TextColor,
    },
    price: {
        fontSize: ((height * width) / 1000) * 0.1,
        fontFamily: 'Caveat-variable',
        color: THEME.colors.TextColor,
    },
});

export default styles;
