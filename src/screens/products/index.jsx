import { Button, Text, View } from 'react-native';

import React from 'react';
import { THEME } from '../../constants/theme';
import styles from './styles';

const Products = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BakeryProducts</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
                color={THEME.colors.SecondaryColor}
            />
        </View>
    );
};
export default Products;
