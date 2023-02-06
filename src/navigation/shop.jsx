import { Categories, Details, Products } from '../screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../constants/theme';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    title: 'Categories',
                    headerTintColor: theme.colors.SecondaryColor,
                    headerTitleStyle: {
                        fontFamily: 'Caveat-variable',
                        color: theme.colors.TextColor,
                    },
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    title: 'Details',
                    headerTintColor: theme.colors.SecondaryColor,
                    headerTitleStyle: {
                        fontFamily: 'Caveat-variable',
                        color: theme.colors.TextColor,
                    },
                }}
            />
            <Stack.Screen
                name="Products"
                component={Products}
                options={{
                    title: 'Products',
                    headerTintColor: theme.colors.SecondaryColor,
                    headerTitleStyle: {
                        fontFamily: 'Caveat-variable',
                        color: theme.colors.TextColor,
                    },
                }}
            />
        </Stack.Navigator>
    );
};
export default ShopNavigator;
