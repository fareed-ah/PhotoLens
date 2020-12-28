
import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native'
import { Button, TextInput, Title } from 'react-native-paper'

const RegisterScreen = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container}>
            <Title style={styles.title}>Welcome Back</Title>
            <TextInput
                style={styles.nameInput}
                mode="flat"
                label="Name"
                value={name}
                onChangeText={name => setName(name)}
            />
            <TextInput
                style={styles.emailInput}
                mode="flat"
                label="Email"
                value={email}
                keyboardType='email-address'
                onChangeText={newEmail => setEmail(newEmail)}
            />
            <TextInput
                style={styles.passwordInput}
                mode="flat"
                label="Password"
                value={password}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={password => setPassword(password)}
            />

            <Button style={styles.signUpButton} mode="contained" onPress={() => { }}>Sign Up</Button>

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
    nameInput: {
        backgroundColor: "#FFF"
    },
    emailInput: {
        backgroundColor: "#FFF"
    },
    passwordInput: {
        backgroundColor: "#FFF"
    },

    signUpButton: {
        backgroundColor: '#428E7C',
        borderRadius: 25,
        marginTop: 75,
    },


})

export default RegisterScreen;
