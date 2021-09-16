import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrigin, setDestination, setOrigin } from '../../slices/navSlice';

export default function SearchPlaces() {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const [placeholder, setPlaceholder] = useState('Where from?');

  useEffect(() => {
    if (!origin?.description) return;

    setPlaceholder(origin?.description);
  }, [origin]);

  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
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
