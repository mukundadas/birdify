import React from 'react';
import { View, PixelRatio } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};
const f = PixelRatio.getFontScale();
const styles = {
  containerStyle: {
    borderBottomWidth: f * 1,
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#F26215',
    position: 'relative',
    borderRadius: f * 20,
    backgroundColor: 'black'
  }
};

export { CardSection };
