import React from "react"
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity , ImageBackground } from "react-native"
function Login (){
return <>
   
    <ImageBackground style={styles.container} source={{uri: "https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg" }} resizeMode="cover">
    <Text style={styles.heading}>Welcome User!</Text>
    <Text style={styles.subheading}>Join the world's largest community</Text>
    <View style={{ flexDirection:"row" , justifyContent:"center"}}>
    <Image style={{ width: 350, height: 200 }} source={{ uri: 'https://support.sitemanager.io/hubfs/cms%20login%20standard.jpg' }} />
    </View>
    <TextInput  placeholderTextColor={'black'} style={styles.inp} placeholder="User Name" />
    <TextInput  placeholderTextColor={'black'}  style={styles.inp} placeholder="Password" />
    <View style={{ flexDirection:"row" , justifyContent:"center"}}>
    <TouchableOpacity style={styles.button}>
    <Text>Login</Text>
    </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row" , justifyContent:"center" , margin: 20}}>
      <Text style={styles.subheading}>Not registered yet?</Text>
      <Text style={styles.account}> Sign Up</Text>
      </View>
      </ImageBackground>   
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
    heading:{
   color:"black" ,
   fontSize:40 ,
    textAlign:"center",
    margin: 20 
 
    },
    account:{
      color:"green" ,
      textAlign:"center",
      fontSize:16 ,
      textDecorationLine: 'underline'
    },
    subheading:{
      color:"grey" ,
      fontSize:18 ,
      textAlign:"center",
      marginBottom: 10 
    },
    button: {
      borderRadius: 5,
      margin: 10,
      padding: 10,
      color: "white",
      backgroundColor: "black",
      flexDirection: "row",
      width:"17%" ,
    },
    inp: {
     borderColor:"black" ,
     borderWidth: 1 ,
     borderRadius: 5 ,
     padding: 10  , 
     color:"black" ,
     margin: 10 
  
    },
  })
  