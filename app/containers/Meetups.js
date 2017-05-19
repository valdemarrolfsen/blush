/**
 * Created by valdemarrolfsen on 28.01.2017.
 */
import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {colors} from '../themes/main';

const {
  ListView,
  TouchableHighlight,
  Image,
  View,
  Text,
  StyleSheet
} = ReactNative;

class Meetups extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
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
          title: 'Jeg vil på date med deg!',
          text: 'This is a test, og den er ganske kul. Jeg liker dette fordi jeg er en student og vil gjøre masse kult.',
          imageUrl: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NXEIW2H888.jpg',
          profile: {
            name: 'Amira Calabashi',
            age: '25',
            url: 'https://images.askmen.com/1080x540/grooming/project/top-10-simple-ways-to-impress-a-woman-1030509-TwoByOne.jpg'
          }
        }
      ]),
    };
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableHighlight
        onPress={() => {
          Actions.chat();
          highlightRow(sectionID, rowID);
        }}>
        <View style={styles.rowItem}>
          <Image source={{uri: rowData.profile.url}} resizeMode="contain" style={styles.profilePicture} />
          <View style={styles.profileContent}>
            <Text style={styles.profileHeader}>{rowData.title}</Text>
            <Text style={styles.profileSub}>{rowData.profile.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 50
  },

  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colors.stable
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

  profileHeader: {
    fontWeight: '600'
  },
  profileSub: {
    color: colors.textExtraLight
  }
});

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Meetups);