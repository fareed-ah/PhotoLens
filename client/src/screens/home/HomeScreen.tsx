
import React from 'react';
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar, Title } from 'react-native-paper'
import { CategoryItem } from '../../components/home/CategoryCard';
import CategoryGridView from '../../components/home/CategoryGridView';
import PhotoGridView from '../../components/home/PhotoGridView';

const HomeScreen = () => {
    const categoryData: Array<CategoryItem> = [{ categoryName: "Technology", visible: true }, { categoryName: "Cars", visible: true }, { categoryName: "Nature", visible: true }, { categoryName: "Food", visible: true }, { categoryName: "Travel", visible: true }]

    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <ScrollView nestedScrollEnabled={false}>
            <View style={styles.container}>

                <Searchbar
                    style={styles.searchBar}
                    placeholder="Search photos"
                    onChangeText={query => setSearchQuery(query)}
                    value={searchQuery}
                />

                <Title style={styles.title}>Trending Categories</Title>

                <View style={styles.trendingCategoriesList}>
                    <CategoryGridView columns={3} gridData={categoryData}></CategoryGridView>
                </View>

                <Title style={styles.title}>Popular Photos</Title>
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

    searchBar: {
        margin: 8,
        borderRadius: 30,
        backgroundColor: "#F6F6F8",
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

export default HomeScreen;
