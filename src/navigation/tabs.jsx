import CartNavigator from './cart';
import { Dimensions } from 'react-native';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import { THEME } from '../constants/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { width, height } = Dimensions.get('screen');

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Rancho-Regular',
                    fontSize: ((height * width) / 1000) * 0.08,
                    color: THEME.colors.TextColor,
                },
                tabBarActiveTintColor: THEME.colors.SecondaryColor,
                tabBarInactiveTintColor: THEME.colors.NeutralColor,
            }}>
            <BottomTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{ title: 'Shop' }}
            />
            <BottomTab.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={{ title: 'Orders' }}
            />
            <BottomTab.Screen
                name="CartTab"
                component={CartNavigator}
                options={{ title: 'Cart' }}
            />
        </BottomTab.Navigator>
    );
};

export default TabsNavigator;
