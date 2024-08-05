import {Button, Text, View, TextInput} from "react-native"
import {auth} from './firebaseConfig';
import {signInWithEmailAndPassword} from "firebase/auth"


export default function Login(){
 const handleLogin = () => {
  signInWithEmailAndPassword(auth, "ejsv1@aluno.ifal.edu.br", "246810")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)

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
    <TextInput  style = {{borderWidth: 1, borderColor: "#FF8247", fontFamily: "KiwiMaru_400Regular" }} placeholder = "Digite seu usuário..." 
    placeholderTextColor = "#A0522D"/>
    </View>
    <View>
    <Text style={{fontFamily: "KiwiMaru_400Regular"}}>Password:</Text>
    <TextInput style = {{borderWidth: 1, borderColor: "#FF8247", fontFamily: "KiwiMaru_400Regular" }}  placeholder = "Digite sua senha..." 
    placeholderTextColor = "#A0522D" secureTextEntry={true} />
    </View>
    <View style= {{padding:10, fontFamily:"KiwiMaru_400Regular"}}>
    <Button title = "Login" onPress={handleLogin} color={"#A0522D"} />
    </View>
    </View>
  );
};

