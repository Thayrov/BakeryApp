import { Button, Text, View } from 'react-native';

import React from 'react';
import styles from './styles';

const Products = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>BakeryProducts</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
                color={'#000'}
            />
        </View>
    );
};
export default Products;
