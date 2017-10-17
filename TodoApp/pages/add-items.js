import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Button from 'react-native-button';
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
        <Button
          containerStyle={styles.buttonContainer}
          onPress={this.addItem_.bind(this)}
          style={styles.button}
        >
          Add Item
        </Button>
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
    })
    .catch((error) => {
      console.error(error);
    });
  }

  navigateToListItems_() {
    this.props.navigation.navigate('ListItems');
  }
}

export default AddItems;