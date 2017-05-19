/**
 * Created by valdemarrolfsen on 28.01.2017.
 */
import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import {Actions} from 'react-native-router-flux';

import {colors} from '../themes/main';

const {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet
} = ReactNative;

class Login extends Component {

  render() {
    return (
      <Image source={require("../../assets/img/login_bg.jpg")} style={styles.container}>
        <View style={styles.logoView}>
          <Image source={require("../../assets/img/logo.png")} style={styles.logo} />
          <Text style={styles.title}>Blush</Text>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Sign in with:</Text>
          <Button text={'Facebook'}
                  type={'primary'}
                  func={Actions.home}
                  style={styles.facebookButton} />
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative',

    width: null,
    height: null,
  },

  logoView: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  logo: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Pacifico',
    fontSize: 40,
    color: colors.primary,
    backgroundColor: 'rgba(0,0,0,0)'
  },

  loginContainer: {
    position: 'absolute',
    bottom: 60,

  },

  loginText: {
    textAlign: 'center',
    color: colors.dark,
    backgroundColor: 'rgba(0,0,0,0)',
    paddingVertical: 5
  },

  facebookButton: {
    width: 250,
    backgroundColor: "#3B5998",
    borderRadius: 3
  }
});

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Login);