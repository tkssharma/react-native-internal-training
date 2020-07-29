import React from './node_modules/react';
import { createStackNavigator } from './node_modules/react-navigation-stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return { 
        headerTitle: () => <Header navigation={navigation} headerText='Movies' />
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Movie Review Details'
    }
  }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'coral',
        height: 80
      }
    }
});

export default HomeStack;