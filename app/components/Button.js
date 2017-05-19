import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';

import {colors} from '../themes/main';

const {
  TouchableOpacity,
  StyleSheet,
  Text
} = ReactNative;

class Button extends Component {

  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.number,
    func: PropTypes.func
  };

  render() {

    const {type, size, text, style, func} = this.props;

    let completeStyle = StyleSheet.flatten([
      styles.button,
      (type in styles ) ? styles[type] : {},
      style ? style : {} // If a style object is passed
    ]);

    return (
      <TouchableOpacity onPress={func} activeOpacity={0.8} style={completeStyle}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#2fa156",
    alignItems: 'center',
    borderRadius: 5
  },

  primary: {
    backgroundColor: colors.primary
  },

  buttonText: {
    color: "white",
    fontWeight: "600"
  }
});

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Button);