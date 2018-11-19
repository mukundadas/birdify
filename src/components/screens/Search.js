import React from 'react';
import { View, Text, TouchableOpacity, Linking, PixelRatio } from 'react-native';

const Search = () => {
  const {
    mainContainer,
    toolBar,
    toolBarTitle,
    content,
    bottom,
    //imageStyle,
    contentStyle,
    contentHeaderStyle,
  } = styles;

  return (
    <View style={mainContainer}>
      <View style={toolBar}>
          <Text style={toolBarTitle}>Search/Add</Text>
      </View>
      <View style={content}>
          <Text style={contentHeaderStyle}>Welcome to the Search/Add page!</Text>
          <Text />
      </View>
    </View>
  );
};
const f = PixelRatio.getFontScale();
const styles = {
  imageStyle: {
    alignSelf: 'center',
    bottom: 0,
    height: f * 75,
    width: f * 300,
    position: 'absolute'
  },
  mainContainer: {
    flex: 1
  },
  content: {
    flex: 2,
    alignItems: 'center',
    marginTop: f * 20,
    marginBottom: f * 20
  },
  toolBar: {
    backgroundColor: '#20a3aa',
    paddingTop: f * 20,
    paddingBottom: f * 20,
    flexDirection: 'row'
  },
  toolBarTitle: {
    color: '#fff',
    textAlign: 'center',
    flex: 1,
    fontWeight: '700',
    fontSize: f * 18
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: f * 100
  },
  contentHeaderStyle: {
    fontSize: f * 16,
    textAlign: 'center',
    color: '#000'
  },
  contentStyle: {
    fontSize: f * 16,
    textAlign: 'center',
    color: '#000',
    margin: f * 5
  }
};

/*
<View style={bottom}>
    <Image
      source={headerImage}
      style={imageStyle}
      resizeMode="stretch"
    />
</View>*/

export default Search;
