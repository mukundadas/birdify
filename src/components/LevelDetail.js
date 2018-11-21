import React, { Component } from 'react';
import { Text, TouchableOpacity, Linking, Image, View, PixelRatio } from 'react-native';
import { Card, CardSection } from './common';


const LevelDetail = (props) => {
  const {
    labelTextStyle,
    imageStyle,
    buttonText,
  } = styles;

class HorizontalFlatListItem extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL(this.props.item.Link)}
        >
        <Image
          style={imageStyle}
          source={this.props.item.Img}
        />
        </TouchableOpacity>
      </View>
    );
  }
}

  /*let links = [];*/
  let list = [];
  for (let i = 0; i < props.lno; i++) {
    if (i === 0) {
      /*links = [];*/
      list = [];
    }
    list.push(
      { Link: props.links[i], Img: props.src[i] }
    );
	}
  return (
      <Card>
          <CardSection>{/*name*/}
              <Text style={labelTextStyle}>{props.level}</Text>
          </CardSection>
          <CardSection>
           {/*image*/}
          </CardSection>
          <CardSection>{/*conStat*/}
            <Text style={buttonText}>{props.body}</Text>
          </CardSection>
          <CardSection>
            <Text style={buttonText}>scientificName</Text>
          </CardSection>
          <CardSection>
            <Text style={buttonText}>subspecies</Text>
          </CardSection>
          <CardSection>
            <Text style={buttonText}>description</Text>
          </CardSection>

      </Card>
  );
};
const f = PixelRatio.getFontScale();
const styles = {
  labelTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: f * 18,
    fontWeight: '600',
    paddingTop: f * 10,
    paddingBottom: f * 10,
    backgroundColor: 'transparent'
  },
  imageStyle: {
    height: f * 50,
    flex: 1,
    width: f * 50,
    resizeMode: 'contain'
  },
  buttonCont: {
    backgroundColor: '#499acf',
    paddingVertical: f * 10,
    marginTop: 0,
    borderRadius: f * 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: f * 16
  },
  flatlistStyle: {
    flex: 1,
    justifyContent: 'center'
  },
};

export default LevelDetail;
