import React from "react"
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity , ImageBackground } from "react-native"
function Login() {
    return <>
        <View style={styles.container}>
        <View style={{ flexDirection:"row" , justifyContent:"center"}}>
        <Image style={{ width: 300, height: 300 }} source={{ uri: 'https://thumbs.dreamstime.com/b/login-icon-button-vector-illustration-isolated-white-background-127000355.jpg' }} />
        </View>
        <Text style={styles.heading}>Hello Again!</Text>
        <Text style={styles.subheading}>Welcome Back You've been missed!</Text>
            <TextInput style={styles.inp} placeholder="User Name" />
            <TextInput style={styles.inp} placeholder="Password" />
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:"white" , fontSize: 20 ,   textAlign:"center"}}>Login</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row" , justifyContent:"center"}}>
                <Text style={styles.subheading}>Don't have an account yet? </Text>
                <Text style={styles.account}>SignUp</Text>
                </View>
               
        </View>
    </>
}
export default Login


const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: "102%",
        backgroundColor: "white",
    },
    subheading:{
        color:"black" ,
        fontSize:16 ,
        textAlign:"center",
      },
    heading: {
        color: "black",
        fontSize: 40,
        textAlign: "center",
        margin: 20

    },
    account:{
        color:"blue" ,
        textAlign:"center",
        fontSize:16 ,
        textDecorationLine: 'underline'
      },
    button: {
        borderRadius: 5,
        margin: 30,
        padding: 10,
        backgroundColor: "grey",
        textAlign:"center"

    },
    inp: {
        borderColor: "white",
        backgroundColor:"black",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        color: "black",
        margin: 10

    },
})