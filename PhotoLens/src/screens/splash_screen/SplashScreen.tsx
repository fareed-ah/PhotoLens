/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/img/logo.png')} />
            <Title style={styles.title}>PhotoLens</Title>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#428E7C",
    },
    logo: {
        alignSelf: 'center',
    },
    title: {
        alignSelf: 'center',
        color: "#FFF"
    },
})

export default SplashScreen;
