import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Svg } from 'expo';

const soundObject = new Expo.Audio.Sound();

const playHiHat = async () => { 
  try {
      await soundObject.playAsync();
      await soundObject.setPositionAsync(0);
  } catch (error) {
    Alert.alert(error);
    // An error occurred!
  }
};

export default class App extends React.Component {
  
  async componentWillMount() {
    await soundObject.loadAsync(require('./sounds/hihat.wav'));
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          source={require('./images/drumkit.png')}
        >
          <Svg height="440" width="640">
            <Svg.Circle id="close-hat" cx="60" cy="195" r="56" opacity="0.1" stroke="grey" onPress={() => alert('play close hat')} />*/}
            <Svg.Circle id="open-hat" cx="102" cy="130" r="56" opacity="0.1" stroke="grey" onPress={() => alert('play open hat')} />*/}
            <Svg.Circle id="crash1" cx="53" cy="56" r="70" opacity="0.1" stroke="grey" onPress={() => alert('play crash1')} />
            <Svg.Circle id="china" cx="265" cy="46" r="58" opacity="0.1" stroke="grey" onPress={() => alert('play china')} />
            <Svg.Circle id="splash" cx="165" cy="50" r="45" opacity="0.1" stroke="grey" onPress={() => alert('play splash')} />
            <Svg.Circle id="floor-tom" cx="510" cy="278" r="72" opacity="0.1" stroke="grey" onPress={() => alert('play floor tom')} />
            <Svg.Circle id="crash2" cx="480" cy="160" r="78" opacity="0.1" stroke="grey" onPress={() => alert('play crash2')} />
            <Svg.Circle id="ride" cx="440" cy="46" r="87" opacity="0.1" stroke="grey" onPress={() => alert('play ride')} />
            <Svg.Circle id="bass1" cx="162" cy="290" r="84" opacity="0.1" stroke="grey" onPress={() => alert('play bass1')} />
            <Svg.Circle id="bass2" cx="355" cy="290" r="84" opacity="0.1" stroke="grey" onPress={() => alert('play bass2')} />
            <Svg.Circle id="snare" cx="262" cy="232" r="58" opacity="0.1" stroke="grey" onPress={() => alert('play snare')} />
            <Svg.Circle id="hi-tom" cx="208" cy="140" r="50" opacity="0.1" stroke="grey" onPress={() => alert('play hi tom')} />*/}
            <Svg.Circle id="mid-tom" cx="324" cy="142" r="54" opacity="0.1" stroke="grey" onPress={() => alert('play mid tom')} />*/}
          </Svg>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
