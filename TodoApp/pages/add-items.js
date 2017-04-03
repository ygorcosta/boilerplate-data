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

class AddItems extends Component {
  constructor() {
    super();

    this.data_ = WeDeploy.data(DataHelper.url);

    this.state = {
      itemName: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          To-do List
        </Text>
        <Text style={styles.baseText}>
          Item description
        </Text>
        <TextInput
          autoFocus
          onChangeText={itemName => this.setState({itemName})}
          placeholder='Buy milk!'
          style={styles.input}
          value={this.state.itemName}
        />
        <View style={styles.buttonContainer}>
          <Button
            accessibilityLabel="Add a To-do item"
            color="white"
            onPress={this.addItem_.bind(this)}
            title="Add Item"
          />
        </View>
         <Text
          onPress={this.navigateToListItems_.bind(this)}
          style={styles.link}
         >
          Go to item listing
        </Text>
       </View>
    )
  }

  addItem_() {
    this.data_.create('tasks', {
      name: this.state.itemName
    })
    .then((response) => {
      this.setState({
        itemName: ''
      });

      console.info('Saved', response);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  navigateToListItems_() {
    this.props.navigator.push({id: 'ListItems',});
  }
}

export default AddItems;