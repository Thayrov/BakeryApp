import { Categories, Details, Products } from '../screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
    );
};
export default ShopNavigator;
