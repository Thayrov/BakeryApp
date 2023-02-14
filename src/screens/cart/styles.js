import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.BGColor,
        margin: ((height * width) / 1000) * 0.04,
    },
    title: {
        fontSize: ((height * width) / 1000) * 0.1,
        fontFamily: 'Rancho-Regular',
        color: THEME.colors.TextColor,
        padding: ((height * width) / 1000) * 0.02,
    },
    listContainer: {
        flex: 1,
        backgroundColor: THEME.colors.ComplementaryColor1,
    },
    footer: {
        margin: ((height * width) / 1000) * 0.04,
        padding: ((height * width) / 1000) * 0.04,
        backgroundColor: THEME.colors.ComplementaryColor2,
        borderTopColor: THEME.colors.PrimaryColor,
        borderTopWidth: 1,
        paddingVertical: 10,
    },
    confirm: {
        backgroundColor: THEME.colors.WarningColor,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    confirmText: {
        fontFamily: 'Caveat-variable',
        color: THEME.colors.TextColor,
        fontSize: ((height * width) / 1000) * 0.08,
    },
    totalContainer: {
        flexDirection: 'row',
        paddingEnd: ((height * width) / 1000) * 0.02,
    },
    totalText: {
        fontFamily: 'Caveat-variable',
        color: THEME.colors.TextColor,
        fontSize: ((height * width) / 1000) * 0.08,
    },
    totalPrice: {
        fontFamily: 'Caveat-variable',
        color: THEME.colors.TextColor,
        fontSize: ((height * width) / 1000) * 0.08,
    },
});

export default styles;
