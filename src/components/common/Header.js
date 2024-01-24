// Importing
import React from 'react';
import { Text, View, PixelRatio } from 'react-native';

// Creating

const Header = (props) => (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </View>
  );
const f = PixelRatio.getFontScale();
const styles = {
  textStyle: {
    fontSize: f * 30,
    color: '#e8fafc',
    textShadowColor: '#000',
    textShadowOffset: { height: f * 3, width: f * 2 },
    backgroundColor: 'transparent'
  },
  viewStyle: {
    backgroundColor: '#68a3dd',
    justifyContent: 'center',
    alignItems: 'center',
    height: f * 80,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: f * 2 },
    shadowOpacity: f * 1,
    elevation: f * 5,
    position: 'relative',
  }
};
// Exporting
export { Header };
