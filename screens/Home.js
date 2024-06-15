import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Entype } from '@expo/vector-icons';
import colors from '../colors';

const catImageUrl = ""

const Home = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}} />
      },
      headerRight: () => {
        <Image
          source={{ url: catImageUrl}}
          style={{
            width: 40,
            height: 40,
            marginRight: 15,
          }}
        />
      }
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat")}
      style={styles.chatButton}
    >
        <Entype name="chat" size={24} color={colors.lightGray} />
      </TouchableOpacity>
    </View>
  )

}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItem: 'flex-end',
    backgroundColor: '#fff',
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: -9,
    shdowRadius: 8,
    marginRight: 20,
    margingBottom: 50,
  }
});