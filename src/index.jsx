import { ActivityIndicator, Text, View } from 'react-native';

import AppNavigator from './navigation/index';
import { THEME } from './constants/theme';
import styles from './styles';
import { useFonts } from 'expo-font';

const App = () => {
    const [loaded] = useFonts({
        'Caveat-variable': require('../assets/fonts/Caveat-VariableFont_wght.ttf'),
        'Rancho-Regular': require('../assets/fonts/Rancho-Regular.ttf'),
    });
    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={THEME.colors.SecondaryColor} />
            </View>
        );
    }
    return <AppNavigator />;
};
export default App;
