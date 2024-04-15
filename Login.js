import {Button, Text, View, TextInput} from "react-native"

export default function Login(){
  return (
    <View style = {{
    justifyContent:"center", 
    flex:1,
    padding:25
   }}>
    <View>
    <Text>Username: </Text>
    <TextInput  style = {{borderWidth: 1, borderColor: "#FF8247" }} placeholder = "Digite seu usuário..." 
    placeholderTextColor = "#A0522D"/>
    </View>
    <View>
    <Text>Password:</Text>
    <TextInput style = {{borderWidth: 1, borderColor: "#FF8247" }}  placeholder = "Digite sua senha..." 
    placeholderTextColor = "#A0522D" secureTextEntry={true} />
    </View>
    <View style= {{padding:10}}>
    <Button title = "entrar" color={"#A0522D"} />
    </View>
    </View>
  );
}
