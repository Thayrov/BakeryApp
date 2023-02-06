import { Categories, Details, Products } from '../screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{ headerShown: false, title: 'Categories' }}
            />
            <Stack.Screen name="Details" component={Details} options={{ title: 'Details' }} />
            <Stack.Screen name="Products" component={Products} options={{ title: 'Products' }} />
        </Stack.Navigator>
    );
};
export default ShopNavigator;
