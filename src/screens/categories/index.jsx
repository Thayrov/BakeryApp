import { FlatList, SafeAreaView } from 'react-native';

import { CategoryItem } from '../../components';
import React from 'react';
import styles from './styles';
import { useSelector } from 'react-redux';

const Categories = ({ navigation }) => {
    const categories = useSelector((state) => state.category.categories);
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
                data={categories}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.contentContainerList}
            />
        </SafeAreaView>
    );
};
export default Categories;
