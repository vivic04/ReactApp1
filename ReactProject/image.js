import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState } from 'react';
import { View } from 'react-native';
export const openImagePicker = () => {
    const [selectedImage, setSelectedImage] = useState()
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });


  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
     {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
    )}
    <View style={{ marginTop: 20 }}>
      <Button title="Choose from Device" onPress={openImagePicker} />
    </View>
    <View style={{ marginTop: 20,marginBottom: 50 }}>
      <Button title="Open Camera" onPress={handleCameraLaunch} />
    </View>
  </View>
  );
     };