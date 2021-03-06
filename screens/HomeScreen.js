import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import NavOptions from '../components/HomeScreen/NavOptions';
import SearchPlaces from '../components/HomeScreen/SearchPlaces';
import NavFavourites from '../components/HomeScreen/NavFavourites';

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />

        <SearchPlaces />

        <NavOptions />
        <NavFavourites ctx='origin' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});
