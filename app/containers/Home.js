/**
 * Created by valdemarrolfsen on 28.01.2017.
 */
import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';

import {colors} from '../themes/main';

const {
  View,
  Text,
  StyleSheet
} = ReactNative;

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Home);