import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';

class BasicButton extends React.PureComponent {
  _onPress = () => {
    this.props.onPress()
  };

  render() {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={this._onPress}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.font}>{this.props.title}</Text>
        </View>

      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get('window').width * 1,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 22,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'blue',
    margin: 0
  },
  font: {
    color: "white",
    backgroundColor: 'transparent',
  },

})




export default BasicButton;

