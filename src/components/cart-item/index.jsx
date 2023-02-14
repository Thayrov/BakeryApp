import { Text, TouchableOpacity, View } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { THEME } from '../../constants/theme';
import styles from './styles';

const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.quantity}>x{item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={24}
                    color={THEME.colors.WarningColor}
                />
            </TouchableOpacity>
        </View>
    );
};
export default CartItem;
