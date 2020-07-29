import React from 'react';
import { View, Text } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

export default function ReviewDetails ({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.textTitle}>{ navigation.getParam('title') }</Text>
        <Text style={globalStyles.textTitle}>{ navigation.getParam('body') }</Text>
        <AirbnbRating
          count={5}
          defaultRating={ navigation.getParam('rating') }
          size={20}
          isDisabled={true}
        />
      </Card>
    </View>
  )
}