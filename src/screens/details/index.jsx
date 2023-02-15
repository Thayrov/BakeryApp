import { Text, View } from 'react-native';

import { PRODUCTS } from '../../constants/data';
import React from 'react';
import styles from './styles';
import { useSelector } from 'react-redux';

const Details = ({ navigation }) => {
    const product = useSelector((state) => state.products.selected);

    //NOTE - const product = PRODUCTS.find((product) => product.id === productId);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.title}>{product.description}</Text>
            <Text style={styles.title}>{product.weight}</Text>
            <Text style={styles.title}>${product.price}</Text>
        </View>
    );
};
export default Details;
