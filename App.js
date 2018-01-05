import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Svg } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.loadSounds();
  }
  
  loadSounds() {
    Expo.Audio.Sound.create(require('./sounds/snare.wav')).then(({ sound }) => this.snareSound = sound );
    Expo.Audio.Sound.create(require('./sounds/hihat.wav')).then(({ sound }) => this.hihatSound = sound );
    Expo.Audio.Sound.create(require('./sounds/openhat.wav')).then(({ sound }) => this.openHiHatSound = sound );
    Expo.Audio.Sound.create(require('./sounds/tom.wav')).then(({ sound }) => this.tomSound = sound );
    Expo.Audio.Sound.create(require('./sounds/boom.wav')).then(({ sound }) => this.boomSound = sound );
    Expo.Audio.Sound.create(require('./sounds/kick.wav')).then(({ sound }) => this.kickSound = sound );
    Expo.Audio.Sound.create(require('./sounds/ride.wav')).then(({ sound }) => this.rideSound = sound );
  };
  
  playSound = (sound) => {
    this[sound].setPositionAsync(0).finally(() => this[sound].playAsync());
  };
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          source={require('./images/drumkit.png')}
        >
          <Svg height="440" width="640">
            <Svg.Circle id="close-hat" cx="60" cy="195" r="56" opacity="0.1" stroke="grey" onPress={() => this.playSound('hihatSound')} />
            <Svg.Circle id="open-hat" cx="102" cy="130" r="56" opacity="0.1" stroke="grey" onPress={() => this.playSound('openHiHatSound')} />
            <Svg.Circle id="crash1" cx="53" cy="56" r="70" opacity="0.1" stroke="grey" onPress={() => this.playSound('hihatSound')} />
            <Svg.Circle id="china" cx="265" cy="46" r="58" opacity="0.1" stroke="grey" onPress={() => this.playSound('hihatSound')} />
            <Svg.Circle id="splash" cx="165" cy="50" r="45" opacity="0.1" stroke="grey"onPress={() => this.playSound('openHiHatSound')} />
            <Svg.Circle id="floor-tom" cx="510" cy="278" r="72" opacity="0.1" stroke="grey" onPress={() => this.playSound('tomSound')} />
            <Svg.Circle id="crash2" cx="480" cy="160" r="78" opacity="0.1" stroke="grey" onPress={() => this.playSound('openHiHatSound')} />
            <Svg.Circle id="ride" cx="440" cy="46" r="87" opacity="0.1" stroke="grey" onPress={() => this.playSound('rideSound')} />
            <Svg.Circle id="bass1" cx="162" cy="290" r="84" opacity="0.1" stroke="grey" onPress={() => this.playSound('boomSound')} />
            <Svg.Circle id="bass2" cx="355" cy="290" r="84" opacity="0.1" stroke="grey" onPress={() => this.playSound('kickSound')} />
            <Svg.Circle id="snare" cx="262" cy="232" r="58" opacity="0.1" stroke="grey" onPress={() => this.playSound('snareSound')} />
            <Svg.Circle id="hi-tom" cx="208" cy="140" r="50" opacity="0.1" stroke="grey" onPress={() => this.playSound('tomSound')} />
            <Svg.Circle id="mid-tom" cx="324" cy="142" r="54" opacity="0.1" stroke="grey" onPress={() => this.playSound('tomSound')} />
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
    justifyContent: 'space-around',
  },
});