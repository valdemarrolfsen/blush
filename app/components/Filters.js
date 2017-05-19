import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';

import {colors} from '../themes/main';

import Button from './Button';

const {
  Modal,
  StyleSheet,
  Text,
  View,
  Slider
} = ReactNative;

class Filters extends Component {

  static propTypes = {
    finished: PropTypes.func,
    visible: PropTypes.bool
  };

  render() {

    const {visible} = this.props;

    let slides = [
      {
        name: 'Distance'
      },
      {
        name: 'Age'
      }
    ];

    slides = slides.map((slide, i) => {
      return (
        <View key={i} style={styles.sliderContainer}>
          <Text style={styles.sliderText}>{slide.name}:</Text>
          <Slider {...this.props}
                  style={styles.slider}
                  minimumTrackTintColor={colors.primary} />
        </View>
      )
    });

    return (

      <Modal
        animationType={'fade'}
        transparent={true}
        visible={visible}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.header}>Filters</Text>

            {slides}

            <Button
              text={'Ok'}
              type={'primary'}
              style={styles.confirm}
              func={this.props.toggleFilter}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },

  innerContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  header: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: '600',
    fontFamily: 'Pacifico'
  },
  sliderContainer: {
    alignSelf: 'stretch',
  },

  sliderText: {
    color: colors.textLight
  },

  slider: {
    alignSelf: 'stretch',
    marginBottom: 10
  },

  confirm: {
    alignSelf: 'stretch'
  }
});

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Filters);