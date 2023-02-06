import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.BGColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Rancho-Regular',
        color: theme.colors.TextColor,
        padding: 10,
    },
});

export default styles;
