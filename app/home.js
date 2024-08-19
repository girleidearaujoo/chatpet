import { View, Text } from 'react-native';
import React from 'react';
import {auth} from '../firebaseConfig'


const Home = () => {
    const user = auth.currentUser
    return (
        <View>
          <Text> welcome! </Text>
          <Text> {user.uid} </Text>
          <Text> {user.email}</Text>
        </View>)
}
export default Home
