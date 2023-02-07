import { FlatList, SafeAreaView } from 'react-native';

import { CATEGORIES } from '../../constants/data/index';
import { CategoryItem } from '../../components';
import React from 'react';
import styles from './styles';

const Categories = ({ navigation }) => {
    const onSelected = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
            title: item.title,
        });
    };

    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
    const keyExtractor = (item) => item.id.toString();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.containerList}
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.contentContainerList}
            />
        </SafeAreaView>
    );
};
export default Categories;
