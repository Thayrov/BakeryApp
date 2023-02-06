import { StyleSheet } from 'react-native';
import { theme } from './constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.BGColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
