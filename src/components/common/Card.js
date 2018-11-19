import React from 'react';
import { View, PixelRatio } from 'react-native';

const Card = (props) => {
  return (
      <View style={[styles.containerStyle, props.style]}>
        {props.children}
      </View>
    );
};
const f = PixelRatio.getFontScale();
const styles = {
  containerStyle: {
    borderWidth: f * 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: f * 0.3,
    elevation: f * 2,
    shadowRadius: f * 2,
    marginLeft: f * 5,
    marginRight: f * 5,
    marginTop: f * 10,
    borderRadius: f * 20,
    overflow: 'hidden'
  }
};

export { Card };
