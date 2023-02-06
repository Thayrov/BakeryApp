import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.BGColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Rancho-Regular',
        color: THEME.colors.TextColor,
        padding: 10,
    },
});

export default styles;
