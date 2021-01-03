
import React from 'react';
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper'
import { CategoryItem } from '../../components/home/CategoryCard';
import PhotoGridView from '../../components/home/PhotoGridView';

const CategoryViewScreen = () => {
    const categoryData: Array<CategoryItem> = [{ categoryName: "Technology", visible: true }, { categoryName: "Cars", visible: true }, { categoryName: "Nature", visible: true }, { categoryName: "Food", visible: true }, { categoryName: "Travel", visible: true }]
    return (
        <ScrollView nestedScrollEnabled={false}>
            <View style={styles.container}>
                <Title style={styles.title}>Category Name</Title>
                <View style={styles.trendingCategoriesList}>
                    <PhotoGridView columns={2} gridData={categoryData}></PhotoGridView>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFF",
    },
    title: {
        fontFamily: "Poppins",
        color: "#424141",
        fontSize: 18,
        fontWeight: 'bold',
    },

    trendingCategoriesList: {
    }
})

export default CategoryViewScreen;
