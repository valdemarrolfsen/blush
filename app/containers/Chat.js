/**
 * Created by valdemarrolfsen on 28.01.2017.
 */
import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

import {colors} from '../themes/main';

const {
  View,
  Text,
  StyleSheet
} = ReactNative;

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello Rubn',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  _renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.primary,
          }
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}
          renderBubble={this._renderBubble}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
  }
});

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Chat);