import { Categories, Details, Products } from '../screens';

import { THEME } from '../constants/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    title: 'Categories',
                    headerTintColor: THEME.colors.SecondaryColor,
                    headerTitleStyle: {
                        fontFamily: 'Caveat-variable',
                        color: THEME.colors.TextColor,
                    },
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    title: 'Details',
                    headerTintColor: THEME.colors.SecondaryColor,
                    headerTitleStyle: {
                        fontFamily: 'Caveat-variable',
                        color: THEME.colors.TextColor,
                    },
                }}
            />
            <Stack.Screen
                name="Products"
                component={Products}
                options={{
                    title: 'Products',
                    headerTintColor: THEME.colors.SecondaryColor,
                    headerTitleStyle: {
                        fontFamily: 'Caveat-variable',
                        color: THEME.colors.TextColor,
                    },
                }}
            />
        </Stack.Navigator>
    );
};
export default ShopNavigator;
