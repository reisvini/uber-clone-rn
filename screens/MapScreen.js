import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/MapScreen/Map';

export default function MapScreen() {
  return (
    <View>
      <View style={tw`h-1/2`}>
      <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
