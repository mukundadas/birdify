import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginForm from './screens/LoginForm';
import LevelsDash from './screens/LevelsDash';
import Search from './screens/Search';

const Root = StackNavigator({
    login: {
      screen: LoginForm
    },
    levelsDash: {
      screen: LevelsDash
    },
    Search: {
      screen: Search
    }
  },
  {
    headerMode: 'none'
  }
);

export default Root;
