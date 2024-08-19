import {Button, Text, View, TextInput} from "react-native"
import {auth} from '../firebaseConfig';
import {signInWithEmailAndPassword} from "firebase/auth"
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Login(){

  const [Username, setUsername] = useState ('')
  const [Password, setPassword] = useState ('')
  const router = useRouter()

 const handleLogin = () => {
  signInWithEmailAndPassword(auth, Username, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;;
    console.log(user)
    router.replace ('/home')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode)
    console.error(errorMessage)
  });
 }

  return (
    <View style = {{
    justifyContent:"center", 
    flex:1,
    padding:25
   }}>
    <View>
    <Text style={{fontFamily: "KiwiMaru_400Regular"}}>Username: </Text>
    <TextInput value = {Username} onChangeText = {setUsername} style = {{borderWidth: 1, borderColor: "#FF8247", fontFamily: "KiwiMaru_400Regular" }} placeholder = "Digite seu usuário..." 
    placeholderTextColor = "#A0522D"/>
    </View>
    <View>
    <Text style={{fontFamily: "KiwiMaru_400Regular"}}>Password:</Text>
    <TextInput value = {Password} onChangeText = {setPassword} style = {{borderWidth: 1, borderColor: "#FF8247", fontFamily: "KiwiMaru_400Regular" }}  placeholder = "Digite sua senha..." 
    placeholderTextColor = "#A0522D" secureTextEntry={true} />
    </View>
    <View style= {{padding:10, fontFamily:"KiwiMaru_400Regular"}}>
    <Button title = "Login" onPress={handleLogin} color={"#A0522D"} />
    </View>
    </View>
  );
};

