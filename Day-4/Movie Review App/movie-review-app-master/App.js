import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import AppNavigator from './Routes/drawer';

const getFonts = () => Font.loadAsync({
  'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  'opensans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <AppNavigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
