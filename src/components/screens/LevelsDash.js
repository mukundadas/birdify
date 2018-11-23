import React, { Component } from 'react';
import { ListView, View, Image, TouchableOpacity, BackHandler, Text, StatusBar, PixelRatio, Alert } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection } from '../common';


class ChildDash extends Component {
  constructor(props) {
    super(props);
     this.birdData = this.props.navigation.state.params.birdData;
     this.e = this.props.navigation.state.params.e;
     this.v = this.props.navigation.state.params.v;
     this.lc = this.props.navigation.state.params.lc;
     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
     this.state = {
       dataSource: ds.cloneWithRows(this.birdData),
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

  count() {
    Alert.alert('Conservation Status',
    'Endangered: '
    + this.e
    + '\nLeast Concern: '
    + this.lc
    + '\nVulnerable: '
    + this.v);
  }

  cardRender(bird) {
    return (
        <Card>
            <CardSection>{/*name*/}
                <Text style={styles.labelTextStyle}>Name : {bird['Name']}</Text>
            </CardSection>
            <CardSection>
             <Image
               source={{ uri: bird['Image'] }}
               style={styles.imageStyle}
             />
            </CardSection>
            <CardSection>{/*conStat*/}
              <Text style={styles.buttonText}>Conservation Status: {bird['Conservation Status']}</Text>
            </CardSection>
            <CardSection>
              <Text style={styles.buttonText}>Scientific Name: {bird['Scientific Name']}</Text>
            </CardSection>
            <CardSection>
              <Text style={styles.buttonText}>Subspecies: {bird['Subspecies']}</Text>
            </CardSection>
            <CardSection>
              <Text style={styles.buttonText}>Description: {bird['Description']}</Text>
            </CardSection>

        </Card>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>

        <TouchableOpacity
          style={{ height: '7%', width: '100%', borderRadius: 20, borderWidth: 1,
          borderColor: '#F26215', alignItems: 'center', justifyContent: 'center' }}
          onPress={() => this.count()}
        >
          <Text style={{ fontSize: 17, color: '#F26215' }}>Show Conservation Status Count</Text>
        </TouchableOpacity>

        <ListView
          style={{ flex: 1 }}
          dataSource={this.state.dataSource}
          renderRow={this.cardRender}
        />
      </View>

    );
  }
}
const f = PixelRatio.getFontScale();
const styles = {
  imageStyle: {
    alignSelf: 'center',
    height: f * 400,
    width: null,
    //resizeMode: 'contain',
    //position: 'absolute'
    flex: 1
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
    fontWeight: '500',
    fontSize: f * 13,
    padding: '2%'
  },
  labelTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: f * 18,
    fontWeight: '600',
    paddingTop: f * 10,
    paddingBottom: f * 10,
    backgroundColor: 'transparent'
  }
};

export default ChildDash;
