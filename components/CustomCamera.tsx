import React from 'react';
import { View, Text, StyleSheet, Alert, ToastAndroid } from "react-native";
import { RNCamera } from 'react-native-camera';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import CameraRoll from '@react-native-community/cameraroll';

type IncomingProps = {
    setUri: (uri: string) => void;
    disableCamera: () => void;
}

const CustomCamera = (props: IncomingProps) => {
    const [ camera, setCamera ] = useState<RNCamera>();

    const takePicture = async () => {
        if (camera) {

            const options = { quality: 0.5, base64: true };
            const data = await camera.takePictureAsync(options);
            try {
                CameraRoll.saveToCameraRoll(data.uri);
                CameraRoll.getPhotos({ first: 1 }).then((roll: any) => {
                    props.setUri(roll.edges[0].node.image.uri);
                    ToastAndroid.show(`Path: ${roll.edges[0].node.image.uri}`, ToastAndroid.LONG);
                })
            } catch (error) {
                ToastAndroid.show(`Error: ${error}`, ToastAndroid.LONG);
            }
        }
      };

    return (
        <View style={styles.container}>
            <RNCamera
                ref={(ref: any) => setCamera(ref)}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
                style={styles.preview}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                captureAudio={false}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={takePicture} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.disableCamera} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> CANCEL </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      paddingHorizontal: 30,
      alignSelf: 'center',
      margin: 20
    },
  });

export default CustomCamera;