import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack';
import SettingsStack from './settingsStack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  Settings: {
    screen: SettingsStack
  }
});

export default createAppContainer(RootDrawerNavigator);