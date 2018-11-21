import React, { Component } from 'react';
import { ListView, View, Image, TouchableOpacity, BackHandler, Text, StatusBar, PixelRatio } from 'react-native';
import firebase from 'firebase';
import LevelDetail from '../LevelDetail';

const headerImage = require('../../images/gifto_logo.png');

//test
const levels = [
  {
    level: 'Level 1: Introduction to Phonetics  ',
    src: [require('../../images/icons/1A.png'),
          require('../../images/icons/1B.png'),
          require('../../images/icons/1C.png'),
          require('../../images/icons/1D.png')],
    ln: ['Link 1', 'Link 2', 'Link 3', 'Link 4'],
    links: ['https://www.youtube.com/watch?v=7mahmMmnSx4',
             'https://www.youtube.com/watch?v=0HeujZ45OZE',
             'https://www.youtube.com/watch?v=Kxsw7eS270w',
             'https://www.uni-due.de/SHE/Phonetics_Brief_Introduction.pdf'],
    lno: 4,
    color: '#146188',
    body: 'This level gives you an introduction to phonetics.\
The phonetic chart can be \
used as a reference throughout your learning process'
  },
  {
    level: 'Level 2: Single Vowel Sounds  ',
    src: [require('../../images/icons/2A.png'),
          require('../../images/icons/2B.png'),
          require('../../images/icons/2C.png'),
          require('../../images/icons/2D.png'),
          require('../../images/icons/2E.png')],
    ln: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
    links: ['https://www.youtube.com/watch?v=72M770xTvaU&t=197s',
            'https://www.youtube.com/watch?v=j-27eVle65A',
            'https://www.youtube.com/watch?v=kw18P_ggt4g',
            'https://www.youtube.com/watch?v=IX6EE4MEduY',
            'https://www.youtube.com/watch?v=TCkb2CvcMDo'],
    lno: 5,
    color: '#20a3aa',
    body: 'In this level you will learn about single vowel sounds or Monophthongs'
  },
  {
    level: 'Level 3: Double and Triple Vowel Sounds  ',
    src: [require('../../images/icons/3A.png'),
          require('../../images/icons/3B.png'),
          require('../../images/icons/3C.png'),
          require('../../images/icons/3D.png'),
          require('../../images/icons/3E.png')],
    ln: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
    links: ['https://www.youtube.com/watch?v=d1HZPx8DuDw',
            'https://www.youtube.com/watch?v=X8GKVbZph9I',
            'https://www.youtube.com/watch?v=TsOP7tDugdQ',
            'https://www.youtube.com/watch?v=Di6h9rIpQbs',
            'https://www.youtube.com/watch?v=er9TAX1_jmQ'],
    lno: 5,
    color: '#146188',
    body: 'This level introduces Diphthongs or double vowel\
  sounds and Triphthongs- \
triple vowel sounds'
  },
  {
    level: 'Level 4: Single and Double Consonants  ',
    src: [require('../../images/icons/4A.png'),
          require('../../images/icons/4B.png'),
          require('../../images/icons/4C.png'),
          require('../../images/icons/4D.png')],
    ln: ['Link 1', 'Link 2', 'Link 3', 'Link 4'],
    links: ['https://www.youtube.com/watch?v=h4yrIuCE6UM',
            'https://www.youtube.com/watch?v=zoarwB-7O_c',
            'https://www.youtube.com/watch?v=Jalt5JYSqrs',
            'https://www.youtube.com/watch?v=gbG2jyI8600'],
    lno: 4,
    color: '#20a3aa',
    body: 'Here you learn about consonant sounds- single and double consonant sounds'
  },
  {
    level: 'Level 5: Blends and Diagraphs  ',
    src: [require('../../images/icons/5A.png'),
          require('../../images/icons/5B.png'),
          require('../../images/icons/5C.png'),
          require('../../images/icons/5D.png'),
          require('../../images/icons/5E.png'),
          require('../../images/icons/5F.png'),
          require('../../images/icons/5G.png'),
          require('../../images/icons/5H.png')],
    ln: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6', 'Link 7', 'Link 8'],
    links: ['http://www.theschoolhouse.us/lessons/lesson57.html',
            'https://www.youtube.com/watch?v=2EyUo2d2WpM',
            'http://blog.maketaketeach.com/wp-content/uploads/2013/01/Chart-Blends-and-Digraphsblogpic.jpg',
            'https://www.youtube.com/watch?v=AS9S06iunh0',
            'https://www.youtube.com/watch?v=tgdX20eSisw',
            'http://www.theschoolhouse.us/lessons/lesson57.html',
            'https://www.youtube.com/watch?v=sYmwStHMezc',
            'http://www.mybreakfastreadingprogram.com/consonants.htm'],
    lno: 8,
    color: '#146188',
    body: 'This level is all about blends and diagraphs'
  },
  {
    level: 'Level 6: Segmenting and Blending  ',
    src: [require('../../images/icons/6A.png'),
          require('../../images/icons/6B.png'),
          require('../../images/icons/6C.png')],
    ln: ['Link 1', 'Link 2', 'Link 3'],
    links: ['https://www.youtube.com/watch?v=O_xMtW64pSw',
            'https://www.youtube.com/watch?v=dquCtrqbKpY',
            'https://www.youtube.com/watch?v=5mIhMh1oYdA'],
    lno: 3,
    color: '#20a3aa',
    body: 'This level introduces segmenting and blending a word'
  },
  {
    level: 'Level 7: Syllables  ',
    src: [require('../../images/icons/7A.png'),
          require('../../images/icons/7B.png')],
    ln: ['Link 1', 'Link 2'],
    links: ['https://www.verbling.com/articles/post/understanding-vowels-syllables-monophtho',
            'https://www.englishclub.com/esl-worksheets/pronunciation/EC_pronunciation-syllables-1-PI_with-KEY.pdf'],
    lno: 2,
    color: '#146188',
    body: 'Now that you have mastered letter sounds and combinations we \
introduce you to syllables'
  },
];

class ChildDash extends Component {
  constructor(props) {
    super(props);
     const birdData = this.props.navigation.state.birdData;
     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
     this.state = {
       dataSource: ds.cloneWithRows(levels),
     };
  }
  componentDidMount() {
    StatusBar.setHidden(true);
    BackHandler.addEventListener('hardwareBackPress', () => this.handleBack());
  }
  toLogout() {
    firebase.auth().signOut();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    this.props.navigation.navigate('login');
  }

  handleBack() {
    this.props.navigation.navigate('levelsDash');
    return true;
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>


        <ListView
          style={{ flex: 1 }}
          dataSource={this.state.dataSource}
          renderRow={
            (data) => <LevelDetail
            {...data}
            />
          }
        />
      </View>

    );
  }
}
const f = PixelRatio.getFontScale();
const styles = {
  imageStyle: {
    alignSelf: 'center',
    height: f * 75,
    width: f * 300,
  },
  containerStyle: {
    borderBottomWidth: f * 1,
    borderRadius: f * 10,
    padding: f * 5,
    backgroundColor: '#eae7d6',
    borderColor: '#ddd',
    position: 'relative'
  },
  logoutcont: {
    backgroundColor: '#20a3aa',
    paddingVertical: f * 15,
    marginTop: 3,
    borderRadius: f * 15,
    overflow: 'hidden',
    marginBottom: 3
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: f * 18
  }
};

export default ChildDash;
