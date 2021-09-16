import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {
  selectDestination,
  selectOrigin,
  setDestination,
  setOrigin,
} from '../../slices/navSlice';

const data = [
  {
    id: '1',
    icon: 'home',
    favName: 'Home',
    destination: 'Code Street, London, UK',
    location: {
      lat: 51.522392,
      lng: -0.07083420000000001,
    },
  },
  {
    id: '2',
    icon: 'briefcase',
    favName: 'Work',
    destination: 'London Eye, London, UK',
    location: {
      lat: 51.5032973,
      lng: -0.1195537,
    },
  },
];

export default function NavFavourites({ ctx }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { favName, destination, icon, location } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            if (ctx === 'origin') {
              dispatch(
                setOrigin({
                  location: location,
                  description: destination,
                })
              );
            }
            if (ctx === 'destination') {
              dispatch(
                setDestination({
                  location: location,
                  description: destination,
                })
              );

              navigation.navigate('RideOptionCard')
            }
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{favName}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({});
