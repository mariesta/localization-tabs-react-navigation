import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Screen1Stack = createStackNavigator(
  {
    Home: {
      screen: Screen1,
      navigationOptions: ({ screenProps: { t } }) => ({
        title: t('screen', { order: 1 })
      })
    }
  }
);

Screen1Stack.navigationOptions = ({ screenProps: { t } }) => (
  {
    tabBarLabel: t('screen', { order: 1 }),
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

const Screen2Stack = createStackNavigator(
  {
    Home: {
      screen: Screen2,
      navigationOptions: ({ screenProps: { t } }) => ({
        title: t('screen', { order: 2 })
      })
    },
});

Screen2Stack.navigationOptions = ({ screenProps: { t } }) => ({
  tabBarLabel: t('screen', { order: 2 }),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  )
});

const Screen3Stack = createStackNavigator(
  {
    Home: {
      screen: Screen3,
      navigationOptions: ({ screenProps: { t } }) => ({
        title: t('screen', { order: 3 })
      })
    },
  });

Screen3Stack.navigationOptions = ({ screenProps: { t } }) => (
  {
    tabBarLabel: t('screen', { order: 3 }),
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
      />
    )
  }
)

Screen3Stack.path = '';

const tabNavigator = createBottomTabNavigator({
  Screen1Stack,
  Screen2Stack,
  Screen3Stack,
});

tabNavigator.path = '';

export default tabNavigator;
