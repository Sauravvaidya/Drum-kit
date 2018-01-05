import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';

let recording = new Expo.Audio.Recording();
export default class Record extends React.Component {

  constructor(props) {
    super(props);
    this.startRecording = this.startRecording.bind(this);
    (async function alertIfRemoteNotificationsDisabledAsync() {
      const { Permissions } = Expo;
      const { status } = await Permissions.getAsync(Permissions.AUDIO_RECORDING);
      if (status !== 'granted') {
        alert('Hey! You might want to enable notifications for my app, they are good.');
      }
    })();
    this.state = {
      isRecording: false
    }
  }

  async startRecording() {
    const isRecording = !this.state.isRecording;
    this.setState({ isRecording });
    if(isRecording) {    
      try {
        // Alert.alert('Recording....');
        await recording.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recording.startAsync();
        // You are now recording!
      } catch (error) {
        // An error occurred!
      }
    } 
    else {    
      try {
        // Alert.alert('Recording stopped....');
        await recording.stopAndUnloadAsync();
      } catch (error) {
        //something
      }
    }
  }

  async playRecording() {
    const {sound} = await recording.createNewLoadedSound();
    await sound.playAsync();
  }

	render() {
		return (
      <View style={styles.container}>
        <Button
          onPress={this.startRecording}
          title={this.state.isRecording ? "Stop Recording" : "Start Recording"}
        />
        <Button
          onPress={this.playRecording}
          title="Play"
        />
      </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    flexDirection: 'column',
    // alignItems: 'flex-start',
    justifyContent: 'flex-start',
    top: 30
  },
});