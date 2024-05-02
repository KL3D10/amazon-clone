import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import VectorIcon from '../utils/VectorIcon'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const RegisterScreen = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    
    const handleRegister = () => {
        const user = {
          name: name,
          email: email,
          password: password,
        };
    
        // send a POST request to the backend API to register the user
        axios
          .post("http://localhost:8000/register", user)
          .then((response) => {
            console.log(response);
            Alert.alert(
              "Registration successful",
              "You have been registered Successfully"
            );
            setName("");
            setEmail("");
            setPassword("");
          })
          .catch((error) => {
            Alert.alert(
              "Registration Error",
              "An error occurred while registering"
            );
            console.log("registration failed", error);
          });
      };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', alignItems:"center"}}>
      <View>
        <Image 
            style={{ width: 150, height: 100 }}
            source={{
                uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
            }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.headerText}>Register To your Account</Text>
        </View>

        <View style={{marginTop: 70}}>
            <View style={styles.textInputContainer}>
                <VectorIcon style={styles.textInputIcon} type='Ionicons' name="person" size={24} color="gray" />

                <TextInput style={[styles.textInputFont, {fontSize: name? 16 : 16}]} placeholder="enter your name" value={name} autoCapitalize='none' onChangeText={(text) => setName(text)} />
            </View>
            <View style={styles.textInputContainer}>
                <VectorIcon style={styles.textInputIcon} type='MaterialIcons' name="email" size={24} color="gray" />

                <TextInput style={[styles.textInputFont, {fontSize: email? 16 : 16}]} placeholder="enter your email"  value={email} onChangeText={(text) => setEmail(text)} />
            </View>
            <View style={styles.textInputContainer}>
                <VectorIcon style={styles.textInputIcon} type='AntDesign' name="lock1" size={24} color="gray" />

                <TextInput style={[styles.textInputFont, {fontSize: password? 16 : 16}]} placeholder="enter your password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
            </View>
        </View>


        <View style={styles.bottomRow}>
            <Text>Keep me logged in</Text>
            <Text style={{color: '#007FFF', fontWeight: 500}}>Forgot Password</Text>
        </View>

        <View style={{marginTop: 50}}>
            <Pressable style={styles.loginButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>

            <Pressable style={{marginTop: 15}} onPress={() => navigation.navigate("Login")}>
                <Text style={{textAlign: 'center', color: "gray", fontSize: 16}}>Already have an account? Sign In</Text>
            </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    headerText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 12,
        color: '#041E42'
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: '#D0D0D0',
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 30
    },
    textInputFont: {
        color: 'gray',
        marginVertical: 10,
        width: 300
    },
    textInputIcon: {
        marginLeft: 8
    },
    bottomRow: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loginButton: {
        width: 200,
        backgroundColor: "#FEBE10",
        borderRadius: 6,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    }
})