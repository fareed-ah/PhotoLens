
import React from 'react';
import { Image, StyleSheet, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, TextInput, Title } from 'react-native-paper'
import { AuthNavProps } from '../../navigation/AuthParamList';
import { useRegisterMutation } from '../../generated/graphql';
import { toErrorMap } from '../../utils/toErrorMap';
import { Formik } from 'formik';

const RegisterScreen = ({ navigation }: AuthNavProps<'SignUp'>) => {
    const [, register] = useRegisterMutation();

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
            onSubmit={async (values, { setErrors }) => {
                console.log("Register")
                const response = await register(
                    {
                        firstname: values.firstName,
                        lastname: values.lastName,
                        email: values.email,
                        password: values.password
                    })
                if (response.data?.registerUser.errors) {
                    console.log(response.data.registerUser.errors)
                    setErrors(toErrorMap(response.data.registerUser.errors));
                } else if (response.data?.registerUser.user) {
                    // Registered successfully -> login and go to home page
                }
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { navigation.navigate("SignIn") }}>
                        <Image style={styles.backButton}
                            source={require("../../assets/img/back_icon.png")} />
                    </TouchableOpacity>
                    <Title style={styles.title}>Getting Started</Title>
                    <TextInput
                        style={styles.nameInput}
                        mode="flat"
                        label="First Name"
                        value={values.firstName}
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                    />
                    <TextInput
                        style={styles.nameInput}
                        mode="flat"
                        label="Last Name"
                        value={values.lastName}
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                    />
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

                    <Button
                        style={styles.signUpButton}
                        mode="contained"
                        onPress={handleSubmit}>Sign Up</Button>
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

    backButton: {

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
        marginTop: 50,
    },


})

export default RegisterScreen;
