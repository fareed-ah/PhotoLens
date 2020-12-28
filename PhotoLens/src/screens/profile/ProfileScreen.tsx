
import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native'
import { Button, TextInput, Title } from 'react-native-paper'

const ProfileScreen = () => {


    return (
        <View style={styles.container}>
            <Title style={styles.title}>Profile</Title>
        </View>
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
        marginVertical: 75,
        alignSelf: 'center',
        color: "#000",
        fontSize: 32,
        fontWeight: 'bold',
    },
})

export default ProfileScreen;
