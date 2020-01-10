import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Tab1Stack = createStackNavigator(
  {
    Home: {
      screen: Screen1,
      navigationOptions: ({ screenProps: { t } }) => ({
        title: t('screen', { order: 1 })
      })
    }
  }
);

Tab1Stack.navigationOptions = ({ screenProps: { t } }) => (
  {
    tabBarLabel: t('tab', { order: 1 }),
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  }
);

const Tab2Stack = createStackNavigator(
  {
    Home: {
      screen: Screen2,
      navigationOptions: ({ screenProps: { t } }) => ({
        title: t('screen', { order: 2 })
      })
    },
});

Tab2Stack.navigationOptions = ({ screenProps: { t } }) => ({
  tabBarLabel: t('tab', { order: 2 }),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  )
});

const Tab3Stack = createStackNavigator(
  {
    Home: {
      screen: Screen3,
      navigationOptions: ({ screenProps: { t } }) => ({
        title: t('screen', { order: 3 })
      })
    },
  });

Tab3Stack.navigationOptions = ({ screenProps: { t } }) => (
  {
    tabBarLabel: t('tab', { order: 3 }),
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
      />
    )
  }
)

const tabNavigator = createBottomTabNavigator({
  Tab1Stack,
  Tab2Stack,
  Tab3Stack,
});

export default tabNavigator;
