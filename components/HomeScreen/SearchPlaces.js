import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../../slices/navSlice';

export default function SearchPlaces() {
  const dispatch = useDispatch();

  return (
    <GooglePlacesAutocomplete
      placeholder="Where From?"
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
      onPress={(data, details = null) => {
        dispatch(
          setOrigin({
            location: details.geometry.location,
            description: data.description,
          })
        );

        dispatch(setDestination(null));
      }}
      fetchDetails={true}
      returnKeyType={'search'}
      enablePoweredByContainer={false}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
    />
  );
}

const styles = StyleSheet.create({});
