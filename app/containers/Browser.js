/**
 * Created by valdemarrolfsen on 28.01.2017.
 */
import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';
import Filters from '../components/Filters';

import {colors} from '../themes/main';

import Swiper from 'react-native-swiper';

const {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView
} = ReactNative;

class Browser extends Component {

  render() {

    const {filterOpen} = this.props;

    let cards = [
      {
        title: 'Jeg vil på date med deg!',
        text: 'This is a test, og den er ganske kul. Jeg liker dette fordi jeg er en student og vil gjøre masse kult.',
        imageUrl: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NXEIW2H888.jpg',
        profile: {
          name: 'Amira Calabashi',
          age: '25',
          url: 'https://images.askmen.com/1080x540/grooming/project/top-10-simple-ways-to-impress-a-woman-1030509-TwoByOne.jpg'
        }
      },
      {
        title: 'Vi kan kose oss masse',
        text: 'This is a test, og den er ganske kul. Jeg liker dette fordi jeg er en student og vil gjøre masse kult.',
        imageUrl: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/ZEDZNMLJ4G.jpg',
        profile: {
          name: 'Amira Calabashi',
          age: '25',
          url: 'https://images.askmen.com/1080x540/grooming/project/top-10-simple-ways-to-impress-a-woman-1030509-TwoByOne.jpg'
        }
      },
      {
        title: 'Netflix n chill',
        text: 'This is a test, og den er ganske kul. Jeg liker dette fordi jeg er en student og vil gjøre masse kult.',
        imageUrl: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/MYWRSXMHQV.jpg',
        profile: {
          name: 'Amira Calabashi',
          age: '25',
          url: 'https://images.askmen.com/1080x540/grooming/project/top-10-simple-ways-to-impress-a-woman-1030509-TwoByOne.jpg'
        }
      },
    ];

    cards = cards.map((card, i) => {
      return (
        <View key={i} style={styles.slide}>
          <View style={styles.card}>
            <Image style={styles.image} source={{uri: card.imageUrl}}>
              <Text style={styles.header}>{card.title}</Text>
            </Image>
            <ScrollView style={styles.cardContainer}>
              <View style={styles.profile}>
                <Image source={{uri: card.profile.url}} resizeMode="contain" style={styles.profilePicture} />
                <View style={styles.profileContent}>
                  <Text style={styles.profileName}>{card.profile.name}</Text>
                  <Text style={styles.profileAge}>{card.profile.age} år</Text>
                </View>
              </View>
              <Text style={styles.text}>{card.text}</Text>
            </ScrollView>
          </View>
        </View>
      )
    });

    return (
      <View>
        <Swiper style={styles.wrapper} showsPagination={false}>
          {cards}
        </Swiper>

        <Filters visible={filterOpen} {...this.props} />
      </View>
    )
  }
}

let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#d8d8df'
  },

  slide: {
    flex: 1,
    paddingTop: 64 + 15,
    paddingBottom: 50 + 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(250, 251, 252)'
  },

  card: {
    width: width - 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.12)',
    flex: 1
  },

  image: {
    flex: 0.5,
    width: null,
    height: null,

    padding: 10,

    justifyContent: 'flex-end'
  },

  cardContainer: {
    flex: 0.5,
    padding: 15
  },

  header: {
    color: colors.light,
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 24,
    textShadowColor: colors.dark,
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 1
  },

  profile: {
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },

  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
    shadowColor: colors.dark,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },

  profileContent: {
    paddingHorizontal: 15
  },

  profileName: {
    fontWeight: '600'
  },

  profileAge: {
    color: colors.primary
  },

  text: {
    color: colors.dark,
    fontSize: 14
  }
});

function mapStateToProps(state) {
  return {
    filterOpen: state.filterOpen
  }
}

export default connect(mapStateToProps)(Browser);