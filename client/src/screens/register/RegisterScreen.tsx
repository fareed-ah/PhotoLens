
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, TextInput, Title } from 'react-native-paper'
import { AuthNavProps } from '../../navigation/AuthParamList';
import { useMutation } from "urql";

const REGISTER_MUT = `
mutation Register($firstname: String!, $lastname: String!,$email: String!, $password: String!
){
    registerUser(
        password: $password,
        email: $email,
        first_name: $firstname,
        last_name: $lastname){
        errors{
            field
            message
        }
        user{
            id
            firstName
            lastName
            email
        }
    }
}
`

const RegisterScreen = ({ navigation }: AuthNavProps<'SignUp'>) => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [registerResponse, register] = useMutation(REGISTER_MUT);

    return (

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
                value={firstName}
                onChangeText={name => setFirstName(name)}
            />
            <TextInput
                style={styles.nameInput}
                mode="flat"
                label="Last Name"
                value={lastName}
                onChangeText={name => setLastName(name)}
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

            <Button
                style={styles.signUpButton}
                mode="contained"
                onPress={
                    () => {
                        console.log("Register")
                        return register(
                            {
                                firstname: firstName,
                                lastname: lastName,
                                email: email,
                                password: password
                            }).then(result => {
                                console.log(result.data.registerUser.errors)
                            })
                    }
                }>Sign Up</Button>

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
        marginTop: 75,
    },


})

export default RegisterScreen;
