
import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native'
import { Button, TextInput, Title } from 'react-native-paper'

const LoginScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    return (
        <View style={styles.container}>
            <Title style={styles.title}>Welcome Back</Title>
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
            <Text style={styles.forgotPassword} onPress={() => { }}>Forgot your password?</Text>

            <Button style={styles.signInButton} mode="contained" onPress={() => { }}>Sign In</Button>
            <Text style={styles.signUp} onPress={() => { }}>Don't have an account? Sign up!</Text>

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
    emailInput: {
        backgroundColor: "#FFF"
    },
    passwordInput: {
        backgroundColor: "#FFF"
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        color: '#797979',
        margin: 6,
    },

    signInButton: {
        backgroundColor: '#428E7C',
        borderRadius: 25,
        marginTop: 75,
    },
    signUp: {
        alignSelf: 'center',
        color: '#797979',
        margin: 6,
    },

})

export default LoginScreen;
