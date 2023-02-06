import { Button, Text, View } from 'react-native';

import React from 'react';
import styles from './styles';
import { theme } from '../../constants/theme';

const Products = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BakeryProducts</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
                color={theme.colors.SecondaryColor}
            />
        </View>
    );
};
export default Products;
