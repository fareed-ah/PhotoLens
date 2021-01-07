
import React from 'react';
import { Image, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper'
import { HomeStackProps } from '../../navigation/HomeStackParamList';
import { BottomNavProps } from '../../navigation/NavBarParamList';

export type CategoryItem = {
    categoryName: string
    visible: boolean
}

interface CategoryCardProps {
    category: CategoryItem
}

const CategoryCard = ({ category }: CategoryCardProps, { navigation }: HomeStackProps<'Home'>) => {
    if (category.visible) {
        return (
            <View style={[styles.container,]}>
                <TouchableOpacity onPress={() => { navigation.navigate('Category') }}>

                    <Image style={[styles.categoryImage,]} source={require("../../assets/img/tech_image.png")} />
                    <Title style={styles.title}>{category.categoryName}</Title>

                </TouchableOpacity>
            </View >
        )
    } else {
        return <View style={styles.invisible} />
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f0f0f"
    },
    invisible: {
        flex: 1,
        backgroundColor: "transparent",
    },

    categoryImage: {
        flex: 1,
        alignSelf: "center",
    },

    title: {
        alignSelf: "center",
        color: "#868686",
        fontSize: 12,
    },
})

export default CategoryCard;
