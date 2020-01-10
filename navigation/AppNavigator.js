import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { withTranslation } from 'react-i18next';

import MainTabNavigator from './MainTabNavigator';

const AppContainer = createAppContainer(MainTabNavigator);

class AppNavigator extends React.Component {

  render() {
    const { t, i18n } = this.props;

    return (
      <AppContainer
        screenProps={{
          t,
          i18n
        }}
      />
    );
  }
}

export default withTranslation()(AppNavigator);
