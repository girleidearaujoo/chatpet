import { View, Text } from 'react-native';
import React from 'react';
import {auth} from '../firebaseConfig'

const Home = () => {
    const user = auth.currentUser
    return (
        <View>
          <Text> welcome! </Text>
          <Text> (user.Username)</Text>
        </View>)
}
export default Home
