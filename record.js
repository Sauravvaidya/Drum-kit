import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Svg } from 'expo';

const recording = new Expo.Audio.Recording();
export default class Record extends React.Component {

  async startRecording() {
    try {
      await recording.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      // You are now recording!
    } catch (error) {
      // An error occurred!
    }
  }

  async stopRecording() {
    try {
      await recording.stopAndUnloadAsync();
      recording.getURI();
    } catch (error) {}
  }

	render() {
		return (
      <View style={styles.container}>
        <Button
          onPress={this.startRecording}
          title="Start recording"
        />
        <Button
          onPress={this.stopRecording}
          title="Stop recording"
        />
      </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});