import React from "react";
import { Image, FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import { BottomNavigation, Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  postContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 30,
  },
});

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

const posts = [
  { legenda: 'Teste 1', img: `https://loremflickr.com/320/240/pet?random=${Math.floor(Math.random() * 10)}`, user: 'analele', avatar: `https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 10)}` },
  { legenda: 'Teste 2', img: `https://loremflickr.com/320/240/pet?random=${Math.floor(Math.random() * 10)}`, user: 'vitinho', avatar: `https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 10)}` },
  { legenda: 'Teste 3', img: `https://loremflickr.com/320/240/pet?random=${Math.floor(Math.random() * 10)}`, user: 'ellen', avatar: `https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 10)}` },
  { legenda: 'Teste 4', img: `https://loremflickr.com/320/240/pet?random=${Math.floor(Math.random() * 10)}`, user: 'gigi', avatar: `https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 10)}` },
  { legenda: 'Teste 5', img: `https://loremflickr.com/320/240/pet?random=${Math.floor(Math.random() * 10)}`, user: 'darline', avatar: `https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 10)}` },
];

const TimeLine = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  const Itens = ({ avatar, img, legenda, user }) => (
    <View style={styles.postContainer}>
      <Avatar.Image size={50} source={{ uri: avatar }} />
      <Text>{user}</Text>
      <Image source={{ uri: img }} style={styles.image} />
      <Text>{legenda}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={posts}
          renderItem={({ item }) => <Itens user={item.user} img={item.img} legenda={item.legenda} avatar={item.avatar} />}
          keyExtractor={item => item.user}
        />
      </ScrollView>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

export default TimeLine;