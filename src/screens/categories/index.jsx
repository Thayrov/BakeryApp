import { Button, Text, View } from 'react-native';

import React from 'react';
import styles from './styles';
import { theme } from '../../constants/theme';

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BakeryCategories</Text>
            <Button
                title="Go to Products"
                onPress={() => navigation.navigate('Products')}
                color={theme.colors.SecondaryColor}
            />
        </View>
    );
};
export default Categories;
