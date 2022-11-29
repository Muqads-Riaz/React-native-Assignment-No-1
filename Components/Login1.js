import React from "react"
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from "react-native"
function Login (){
return <>
   <View style={styles.container }>
  
      <View style={{ flexDirection:"row" , justifyContent:"center"}}>
    <Image style={{ width: 300, height: 300 }} source={{ uri: 'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' }} />
    </View>
     <Text style={styles.heading}>Welcome to your Account</Text>
    <TextInput  placeholderTextColor={'black'} style={styles.inp} placeholder="User Name" />
    <TextInput  placeholderTextColor={'black'}  style={styles.inp} placeholder="Password" />
    <View style={{ flexDirection:"row" , justifyContent:"center"}}>
    <TouchableOpacity style={styles.button}>
    <Text>Login</Text>
    </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row" , justifyContent:"center" , margin: 20}}>
      <Text style={styles.subheading}>Need an Account?</Text>
      <Text style={styles.account}>SignUp</Text>
      </View>
    </View>
</>
}
export default Login


const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: "100%",
      backgroundColor: "white",
  
    },
    heading:{
   color:"black" ,
   fontSize:25 ,
    textAlign:"center",
    margin: 20 
 
    },
    subheading:{
      color:"black" ,
      fontSize:18 ,
      textAlign:"center",
      marginStart: 10 
    },
    account:{
      color:"blue" ,
      textAlign:"center",
      fontSize:18 ,
      textDecorationLine: 'underline'
    },
    button: {
      borderRadius: 5,
      margin: 10,
      padding: 10,
      color: "white",
      backgroundColor: "black",
      flexDirection: "row",
      width:"20%" ,
    },
    inp: {
     borderColor:"black" ,
     borderWidth: 2 ,
     borderRadius: 10 ,
     padding: 10  , 
     color:"black" ,
     margin: 10 
  
    },
  })
  