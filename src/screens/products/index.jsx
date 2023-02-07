import { FlatList } from 'react-native-gesture-handler';
import { PRODUCTS } from '../../constants/data';
import { ProductItem } from '../../components';
import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const Products = ({ navigation, route }) => {
    const { categoryId, title } = route.params;
    const onSelected = (item) => {
        navigation.navigate('Details', {
            productId: item.id,
            title: item.title,
        });
    };
    const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
    const keyExtractor = (item) => item.id.toString();
    const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.contentList}
                contentContainerStyle={styles.contentContainerList}
            />
        </SafeAreaView>
    );
};
export default Products;
