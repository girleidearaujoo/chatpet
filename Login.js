import {Button, Text, View, TextInput} from "react-native"

export default function Login(){
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
    <Button title = "entrar" color={"#A0522D"} />
    </View>
    </View>
  );
}
