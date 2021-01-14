
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native'
import { Button, TextInput, Title } from 'react-native-paper'
import { AuthNavProps } from '../../navigation/AuthParamList';
import { AuthContext } from '../../navigation/AuthProvider';
import { Formik } from 'formik';
import { useLoginMutation } from '../../generated/graphql';

const LoginScreen = ({ navigation }: AuthNavProps<"SignIn">) => {
    const { login } = useContext(AuthContext);
    const [, loginRequest] = useLoginMutation();

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async (values, { setErrors }) => {
                console.log("Login")
                const response = await loginRequest(
                    {
                        email: values.email,
                        password: values.password
                    })
                if (response.data?.loginUser.errors) {
                    console.log(response.data?.loginUser.errors)
                } else if (response.data?.loginUser.user) {
                    login(response.data?.loginUser.user)
                    // Logged in successfully -> login and go to home page
                }
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <Title style={styles.title}>Welcome Back</Title>
                    <TextInput
                        style={styles.emailInput}
                        mode="flat"
                        label="Email"
                        value={values.email}
                        keyboardType='email-address'
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                    />
                    <TextInput
                        style={styles.passwordInput}
                        mode="flat"
                        label="Password"
                        value={values.password}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                    />
                    <Text style={styles.forgotPassword} onPress={() => { }}>Forgot your password?</Text>

                    <Button style={styles.signInButton} mode="contained" onPress={handleSubmit}>Sign In</Button>
                    <Text style={styles.signUp} onPress={() => { navigation.navigate("SignUp") }}>Don't have an account? Sign up!</Text>

                </View>
            )}
        </Formik>
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
