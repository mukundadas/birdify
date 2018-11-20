import React, { Component } from 'react';
import { Text, TouchableOpacity, Linking, Image, FlatList, View, PixelRatio } from 'react-native';
import { Card, CardSection } from './common';


const LevelDetail = (props) => {
  const {
    labelTextStyle,
    imageStyle,
    flatlistStyle,
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

    /* --- Code Not Used Anymore */
    /*
    links.push(
			<View style={viewStyle} key={i}>
        <TouchableOpacity
         onPress={() => Linking.openURL(props.links[i])}
        >
        <Image
         source={props.src[i]}
        />
        </TouchableOpacity>
      </View>
		);
    */
    list.push(
      { Link: props.links[i], Img: props.src[i] }
    );
	}
  return (
      <Card style={{ backgroundColor: props.color }}>
          <CardSection style={{ backgroundColor: props.color }}>
              <Text style={labelTextStyle}>{props.level}</Text>
          </CardSection>

          <CardSection style={{ backgroundColor: props.color }}>
            <Text style={buttonText}>{props.body}</Text>
          </CardSection>
          <CardSection style={{ backgroundColor: props.color }}>
            <FlatList
                data={list}
                contentContainerStyle={list.length < 7 && flatlistStyle}
                horizontal={true}
                renderItem={({ item, index }) =>
                    <HorizontalFlatListItem
                      index={index}
                      item={item}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
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
