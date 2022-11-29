import React from "react"
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from "react-native"
function Login() {
    return <>
        <View style={styles.container}>
        <View style={{ flexDirection:"row" , justifyContent:"center"}}>
    <Image style={{ width: 350, height: 200 }} source={{ uri: 'https://static8.depositphotos.com/1001941/1025/v/600/depositphotos_10250380-stock-illustration-login-screen-with-3d-user.jpg' }} />
    </View>
            <Text style={styles.heading}>Login to your Account</Text>
            <TextInput placeholderTextColor={'grey'} style={styles.inp} placeholder="User Name" />
            <TextInput placeholderTextColor={'grey'} style={styles.inp} placeholder="Password" />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row" , justifyContent:"center"}}>
      <Text style={styles.subheading}>Not have an Account?</Text>
      <Text style={styles.account}> Sign Up Here</Text>
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
        justifyContent: "center"

    },
    heading: {
        color: "black",
        fontSize: 30,
        textAlign: "center",
        margin: 20

    },
    subheading:{
        color:"black" ,
        fontSize:16 ,
        textAlign:"center",
        marginStart: 10 
      },
      account:{
        color:"purple" ,
        textAlign:"center",
        fontSize:16 ,
        textDecorationLine: 'underline'
      },
    button: {
        borderRadius: 5,
        margin: 10,
        padding: 10,
        color: "white",
        backgroundColor: "grey",
        flexDirection: "row",
        width: "17%",
    },
    inp: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        color: "black",
        margin: 10

    },
})