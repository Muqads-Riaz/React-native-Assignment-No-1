import React from "react"
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity} from "react-native"
function Login() {
    return <>
        <View style={styles.container}>
      
        <View style={{ flexDirection:"row" , justifyContent:"center" , shadowColor:"black" , elevation: 10 }}>
    <Image style={{ width: 350, height: 150 }} source={{ uri: 'https://thumbs.dreamstime.com/b/login-illustration-letter-cubes-forming-word-36025252.jpg' }} />
    </View>
  
    <Text style={styles.heading}>Welcome Back!</Text>
 <TextInput  placeholderTextColor={'grey'} style={styles.inp} placeholder="User Name" />
 <TextInput  placeholderTextColor={'grey'} style={styles.inp} placeholder="Password" />
 <View style={{flexDirection:"row" ,justifyContent:"space-between" , margin : 8}}>

 <Text style={styles.subheading}></Text>
 <Text style={styles.password}>Forgot Password?</Text>
 </View>
 <TouchableOpacity style={styles.button}>

<Text style={{color:"white" , fontSize: 20 ,   textAlign:"center"}}>Login</Text>
</TouchableOpacity>
<View style={{flexDirection:"row" , justifyContent:"center" , margin: 20}}>
      <Text style={styles.subheading}>Not registered yet?</Text>
      <Text style={styles.account}> Create an account</Text>
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
        justifyContent:"center"
    

    },
    subheading:{
        color:"black" ,
        fontSize:16 ,
        textAlign:"center",
        marginStart: 10 
      },
      account:{
        color:"blue" ,
        textAlign:"center",
        fontSize:16 ,

      },
      password:{
        color:"grey" ,
        fontSize:16 ,
        textAlign:"center",
        marginStart: 10 
      },
    heading: {
        color: "black",
        fontSize: 40,
        textAlign: "center",
        margin: 20

    },
    button: {
        borderRadius: 5,
        margin: 10,
        padding: 10,
        backgroundColor: "darkgreen",
        textAlign:"center"

    },
    inp: {
        borderColor: "black",
        backgroundColor:"white",
        borderWidth: 1,
        padding: 10,
        color: "black",
        margin: 10

    },
})