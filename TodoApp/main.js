/**
 * Todo React Native App using WeDeploy's Data service
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import AddItems from './pages/add-items';
import ListItems from './pages/list-items';

export default class TodoApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'AddItems', }}
        renderScene={this.renderScene_} />
    );
  }

  renderScene_(route, navigator) {
    if (route.id === 'AddItems') {
      return <AddItems navigator={navigator} />
    } else if (route.id === 'ListItems') {
      return <ListItems navigator={navigator} />
    }
  }
}