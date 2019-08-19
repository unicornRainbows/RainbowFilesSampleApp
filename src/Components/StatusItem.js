import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';

class StatusItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPress()
  };

  render() {
    const { id, status, uri, localFilePath } = this.props.item
    let backgroundColor = 'white'

    //  0: undefined/unknown, 1: running, 2: completed, 3: error ,4: cancel
    switch (status) {
      case '0':
        backgroundColor = 'green'
        break;
      case '1':
        backgroundColor = 'orange'
        break;
      case '2':
        backgroundColor = 'red'
        break;
      case '3':
        backgroundColor = 'yellow'
        break;

      default:
        backgroundColor = 'blue'

        break;
    }
    return (
      <View style={[styles.itemContainer, { backgroundColor: backgroundColor }]}>
        <Text style={styles.font}>{id}</Text>
        <Text style={styles.font}>{uri}</Text>
        <Text style={styles.font}>{localFilePath}</Text>

        <TouchableOpacity style={styles.button} onPress={this._onPress}>
          <Text style={styles.font}>Cancel</Text>
        </TouchableOpacity>
      </View>


    );
  }
}

var styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between"

  },
  font: {
    color: "black",
    backgroundColor: 'transparent',
    padding: 20,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    margin: 4
  }

})




export default StatusItem;

