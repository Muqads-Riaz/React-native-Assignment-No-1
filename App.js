import React from "react"
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from "react-native"
import { useState } from "react";
import Login from "./Components/Login2"



function App() {
  let [txt, setTxt] = useState("")
  let [list, setList] = useState([])
  let [ind, setInd] = useState()
  let[isEdit , setIsEdit]= useState(false)
  let add = () => {
    setList([...list, txt])
    setTxt("")
  }
  let deleteAll = () => {
    setList([])
  }
  let deleteItem = (ind) => {
    list.splice(ind, 1)
    setList([...list])
  }
  let editItem = (val , ind)=>{
   setTxt(val)
   setInd(ind)
   setIsEdit(true)
  }
  let save = ()=>{
    list[ind] = txt
    setList([...list])
    setTxt("")
    setIsEdit(false)
  }

  return <>
  {/* Todo App  Start*/}
    <View style={styles.container} >
      <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://img.freepik.com/free-icon/todo-list_318-10185.jpg' }} />
      <Text style={styles.heading}>ToDo App</Text>
      <View style={styles.inpParent}>
        <TextInput style={styles.inp} value={txt} onChangeText={e => setTxt(e)} placeholder="Add any todo" />
        {isEdit?<TouchableOpacity style={styles.greenButton} onPress={save}>
          <Text>Save</Text>
        </TouchableOpacity>:<TouchableOpacity style={styles.greenButton} onPress={add}>
          <Text>Add</Text>
        </TouchableOpacity>}
      </View>

      {list && list.length > 0 ?
        list.map((e, i) => {
          return <View style={styles.main} key={i}>
            <Text style={styles.todo} >{e}</Text>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={{margin:5}} onPress={() => editItem(e,i)} >
                <Image style={{ width: 33, height: 33 }} source={{ uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3271683/edit-icon-sm.png' }} />
              </TouchableOpacity>
              <TouchableOpacity style={{margin:5}} onPress={() => deleteItem(i)}>
                <Image style={{ width: 35, height: 35 }} source={{ uri: 'https://lh3.googleusercontent.com/G2jzG8a6-GAA4yhxx3XMJfPXsm6_pluyeEWKr9I5swUGF62d2xo_Qg3Kdnu00HAmDQ' }} />
              </TouchableOpacity>
            </View>

          </View>
        })
        : null}
        <View style={{ flexDirection:"row" , justifyContent:"center"}}>
          {list.length > 0? <TouchableOpacity style={styles.redButton} onPress={deleteAll}>
        <Text>Delete All</Text>
      </TouchableOpacity>: <Text style={{color:"red" , fontSize: 30 }}>No Todo Added</Text> }
      </View>
    </View>
      {/* Todo App  End*/}

  </>
}

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "100%",
    backgroundColor: "white",

  },
  heading: {
    color: "black",
    padding: 5,
    fontSize: 30,
    textAlign: "center"
  },
  main: {
    borderRadius: 5,
    flexDirection: "row",
    margin: 5,
    padding: 5,
    alignItems: "center",
    color: "black",
    backgroundColor: "black",
    justifyContent:"space-between",
   
  },
  redButton: {
    borderRadius: 5,
    margin: 10,
    padding: 10,
    color: "white",
    backgroundColor: "red",
    flexDirection: "row",
    width:"25%" ,
  },
  greenButton: {
    flex: 1,
    padding: 10,
    color: "white",
    backgroundColor: "green",
    flexDirection: "row",
    textAlign: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  inp: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    flex: 5,
    backgroundColor: "grey",
    padding: 10,
    color: "white"
  },
  inpParent: {
    width: "100%",
    flexDirection: "row",
  },
  todo :{
    width: "75%"
  },

})
