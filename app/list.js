import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const listData = [
  {
    id: '1',
    image: 'https://via.placeholder.com/50', // Placeholder image URL
    title: 'John Doe',
    description: 'Software Engineer with 5 years of experience.',
    email: 'johndoe@example.com',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/50',
    title: 'Jane Smith',
    description: 'Product Manager specializing in user experience.',
    email: 'janesmith@example.com',
  },
  // Add more items as needed
];

const ListItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity onPress={() => alert(`Sending email to ${item.email}`)}>
        <Text style={styles.email}>Email {item.title}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const listaDeEmpreendedores = () => (
  <FlatList
    data={listData}
    renderItem={({ item }) => <ListItem item={item} />}
    keyExtractor={(item) => item.id}
  />
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  email: {
    fontSize: 14,
    color: 'blue',
  },
});

export default listaDeEmpreendedores;
