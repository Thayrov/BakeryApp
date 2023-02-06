import { Button, Text, View } from 'react-native';

import React from 'react';
import { THEME } from '../../constants/theme';
import styles from './styles';

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BakeryCategories</Text>
            <Button
                title="Go to Products"
                onPress={() => navigation.navigate('Products')}
                color={THEME.colors.SecondaryColor}
            />
        </View>
    );
};
export default Categories;
