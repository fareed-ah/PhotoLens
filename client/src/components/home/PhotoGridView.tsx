
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import CategoryCard, { CategoryItem } from './CategoryCard';

const width = Dimensions.get('window').width

interface PhotoGridViewProps {
    columns: number
    gridData: Array<CategoryItem>
}

const PhotoGridView = ({ columns, gridData }: PhotoGridViewProps) => {

    function formatData(data: Array<CategoryItem>, col: number) {
        const rows = Math.ceil(data.length / col)
        while (data.length < rows * col) {
            data.push({ categoryName: "", visible: false })
        }
        return data
    }

    return (
        <FlatList
            style={styles.grid}
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

export default PhotoGridView;
