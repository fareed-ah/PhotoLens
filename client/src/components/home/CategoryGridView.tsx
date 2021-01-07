
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import CategoryCard, { CategoryItem } from './CategoryCard';

const width = Dimensions.get('window').width

interface GridViewProps {
    columns: number
    gridData: Array<CategoryItem>
}

const CategoryGridView = ({ columns, gridData }: GridViewProps) => {

    function formatData(data: Array<CategoryItem>, col: number) {
        const rows = Math.ceil(data.length / col)
        while (data.length < rows * col) {
            data.push({ categoryName: "", visible: false })
        }
        return data
    }

    return (
        <FlatList
            contentContainerStyle={styles.grid}
            data={formatData(gridData, columns)}
            renderItem={({ item }) => (
                <CategoryCard category={item}></CategoryCard>
            )}
            numColumns={columns}
        />
    );
};

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'column',
    }
})

export default CategoryGridView;
