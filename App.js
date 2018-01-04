import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const soundObject = new Expo.Audio.Sound();

const playHiHat = async () => { 
  try {
      await soundObject.playAsync();
      await soundObject.setPositionAsync(0);
  } catch (error) {
    Alert.alert(error);
    // An error occurred!
  }
}

export default class App extends React.Component {

  async componentWillMount() {
    await soundObject.loadAsync(require('./sounds/hihat.wav'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={playHiHat}
          title="Hi hat"
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
    justifyContent: 'center',
  },
});
