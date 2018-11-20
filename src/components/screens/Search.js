import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, PixelRatio, Image } from 'react-native';

const searchImg = require('../../images/plus.jpg');

export default class Search extends Component {
  state = { name: '', scientificName: '', subSpecies: '', conStat: '', desc: '', image: '' };

  render() {
    return (
    <View style={styles.mainContainer}>
      <View style={styles.toolBar}>
          <TouchableOpacity
           onPress={() => this.toLogout()}
           style={styles.logoutcont}
          >
           <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
          <Text style={styles.toolBarTitle}>Search/Add</Text>
          <TouchableOpacity
           style={styles.searchcont}
          >
           <Image
            source={searchImg}
            style={styles.imageStyle}
           />
          </TouchableOpacity>
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Name:</Text>
       <TextInput
          style={styles.input}
          value={this.state.name}
       />
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Conservation Status:</Text>
       <TextInput
          style={styles.input}
          value={this.state.conStat}
       />
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Description:</Text>
       <TextInput
          style={styles.input}
          value={this.state.desc}
       />
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Image:</Text>
       <TextInput
          style={styles.input}
          value={this.state.image}
       />
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Scientific Name:</Text>
       <TextInput
          style={styles.input}
          value={this.state.scientificName}
       />
      </View>
      <View style={styles.ipCont}>
       <Text style={styles.ipText}>Sub Species:</Text>
       <TextInput
          style={styles.input}
          value={this.state.subSpecies}
       />
      </View>

    </View>
  );
}
}
const f = PixelRatio.getFontScale();
const styles = {
  imageStyle: {
    alignSelf: 'flex-end',
    bottom: 0,
    height: f * 25,
    width: f * 25,
    //position: 'relative'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  toolBar: {
    paddingTop: f * 20,
    paddingBottom: f * 20,
    flexDirection: 'row',
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#F26215',
    height: '10%',
    top: 0
  },
  toolBarTitle: {
    color: '#fff',
    textAlign: 'center',
    flex: 1,
    fontWeight: '700',
    fontSize: f * 18
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: f * 18
  },
  logoutcont: {
    marginLeft: 10
  },
  searchcont: {
    marginRight: 10
  },
  ipText: {
    color: '#F26215',
    fontSize: f * 16,
    fontWeight: '500',
    marginBottom: 5
  },
  ipCont: {
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    height: f * 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    //marginBottom: f * 10,
    color: '#fff',
    paddingHorizontal: f * 10,
    fontSize: f * 14,
    borderRadius: f * 5,
    width: '80%'
  }
};
