import React, { Component } from 'react';
import {
  Button,
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import WeDeploy from 'wedeploy';

import DataHelper from '../helpers/data';
import styles from '../styles/main';

class ListItems extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };

    let data = WeDeploy.data(DataHelper.url);

    data.orderBy('id', 'desc')
      .limit(5)
      .get('tasks')
      .then((tasks) => {
        this.setState({
          items: tasks
        });
      })
      .catch((error) => {
        console.error(error);
      });

    data
      .limit(5)
      .orderBy('id', 'desc')
      .watch('tasks')
      .on('changes', (tasks) => {
        this.setState({
          items: tasks
        });
      });
  }

  render() {
    if (this.state.items) {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>
            To-do List
          </Text>
          {this.renderItems_()}
          <Text
            onPress={this.navigateToAddItems_.bind(this)}
            style={styles.link}
          >
            Go to add items
          </Text>
        </View>
      );
    }
  }

  navigateToAddItems_() {
    this.props.navigator.push({id: 'AddItems',});
  }

  renderItems_() {
    if (this.state.items.length) {
      let res = [];

      this.state.items.forEach((item) => {
        res.push(
          <TextInput
            readOnly
            key={item.id}
            style={styles.input}
            value={item.name}
          />);
        });

      return res;
    } else {
      return (
        <Text style={styles.baseText}>
          No items available
        </Text>
      );
    }
  }
}

export default ListItems;