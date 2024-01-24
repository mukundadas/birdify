import React from 'react';
import { Text, TouchableOpacity, PixelRatio } from 'react-native';

const Button = (props) => {
  const { textStyle, buttonStyle } = styles;
  return (
      <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
        <Text style={textStyle}>{props.children}</Text>
      </TouchableOpacity>
  );
};
const f = PixelRatio.getFontScale();
const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: f * 16,
    fontWeight: '600',
    color: '#007aff',
    paddingTop: f * 10,
    paddingBottom: f * 10,
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: f * 5,
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: f * 1,
    borderColor: '#007aff',
    marginLeft: f * 5,
    marginRight: f * 5,
    marginBottom: f * 5,
    marginTop: f * 5
  }
};

export { Button };
