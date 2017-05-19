/**
 * Created by valdemarrolfsen on 25.01.2017.
 */

import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';

import { ActionCreators } from '../actions';

import {colors} from '../themes/main';

import Home from './Home';
import Login from './Login';
import Browser from './Browser';
import Meetups from './Meetups';
import Chat from './Chat';

const {
  StyleSheet,
  Text,
  Image
} = ReactNative;

const icons = {
  'add' : require('../../assets/img/icons/add.png'),
  'list': require('../../assets/img/icons/list.png'),
  'chat': require('../../assets/img/icons/chat.png'),
  'filter': require('../../assets/img/icons/filter.png'),
  'coffee': require('../../assets/img/icons/coffee.png')
};

class TabIcon extends Component {

  render() {

    let image;

    image = icons[this.props.image];

    return (
      <Image style={style.icon} source={image} />
    );
  }
}

class AppContainer extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" hideNavBar initial={true} {...this.props} />

          <Scene key="home" hideNavBar tabBarStyle={style.tabBarStyle} tabs={true} >

            <Scene key="tab1"
                   component={Browser}
                   title="Blush"
                   navigationBarStyle={style.navBarStyle}
                   titleStyle={style.title}
                   leftButtonImage={icons['filter']}
                   leftButtonIconStyle={style.navIcon}
                   hideBackImage={true}
                   onLeft = {this.props.toggleFilter}
                   image={'list'}
                   icon={TabIcon}
                   {...this.props}/>

            <Scene key="tab2"
                   component={Home}
                   title="Tab 2"
                   navigationBarStyle={style.navBarStyle}
                   titleStyle={style.title}
                   image={'add'}
                   icon={TabIcon}
                   {...this.props}/>

            <Scene key="tab3"
                   component={Meetups}
                   title="Meetups"
                   navigationBarStyle={style.navBarStyle}
                   titleStyle={style.title}
                   image={'coffee'}
                   icon={TabIcon}
                   {...this.props}/>

            <Scene key="tab4"
                   component={Meetups}
                   title="Chat"
                   navigationBarStyle={style.navBarStyle}
                   titleStyle={style.title}
                   image={'chat'}
                   icon={TabIcon}
                   {...this.props}>
            </Scene>
          </Scene>

          <Scene key="chat"
                 hideNavBar={false}
                 component={Chat}
                 title="Chat"
                 navigationBarStyle={style.navBarStyle}
                 titleStyle={style.title}
                 {...this.props}/>
        </Scene>
      </Router>
      );
  }
}

let style = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'white',
    opacity        : 1,
    borderColor: 'rgba(0,0,0,0.12)',
    borderTopWidth: 0.5
  },

  navBarStyle: {
    backgroundColor: "white",
    opacity: 1,
    borderColor: 'rgba(0,0,0,0)',
    borderBottomWidth: 0.5
  },

  title: {
    fontFamily: 'Pacifico',
    fontSize: 18,
    color: colors.primary
  },

  icon: {
    width: 20,
    height: 20
  },

  navIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
    marginTop: 5
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {}
}, mapDispatchToProps)(AppContainer);