import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.soundInstance = null;
    this.playSound = this.playSound.bind(this);
  }

  async playSound (file) {
    try {
      if(this.soundInstance !== null) {
        await this.soundInstance.unloadAsync();
        this.soundInstance.setOnPlaybackStatusUpdate(null);
        this.soundInstance = null;
      }
      const { sound } = await Expo.Audio.Sound.create(file);
      this.soundInstance = sound;
      await this.soundInstance.playAsync();
      await this.soundInstance.setPositionAsync(0);
    } catch (error) {
      Alert.alert(error);
      // An error occurred!
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.playSound(require('./sounds/boom.wav'))}
          title="Boom"
        />
        <Button
          onPress={() => this.playSound(require('./sounds/clap.wav'))}
          title="Clap"
        />
        <Button
          onPress={() => this.playSound(require('./sounds/hihat.wav'))}
          title="HiHat"
        />

        <Button
          onPress={() => this.playSound(require('./sounds/kick.wav'))}
          title="Kick"
        />
        <Button
          onPress={() => this.playSound(require('./sounds/openhat.wav'))}
          title="OpenHat"
        />

        <Button
          onPress={() => this.playSound(require('./sounds/ride.wav'))}
          title="Ride"
        />
        <Button
          onPress={() => this.playSound(require('./sounds/snare.wav'))}
          title="Snare"
        />

        <Button
          onPress={() => this.playSound(require('./sounds/tink.wav'))}
          title="Tink"
        />
        <Button
          onPress={() => this.playSound(require('./sounds/tom.wav'))}
          title="Tom"
        />
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