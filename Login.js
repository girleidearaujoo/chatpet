import {Button, Text, View, TextInput} from "react-native"

export default function Login(){
  return (
    <View style = {{
    justifyContent:"center", 
    flex:1,
   }}>
    <Text>Username: </Text>
    <TextInput  style = {{borderWidth: 1, borderColor: "orange" }} placeholder = "AnaLelezinha04..." 
    placeholderTextColor = "#696969"/>
    <Text>Password:</Text>
    <TextInput style = {{borderWidth: 1, borderColor: "orange" }}  placeholder = "linda1801" 
    placeholderTextColor = "#696969" secureTextEntry={true} />
    <Button title = "entrar"/>
    </View>
  );
}
