import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState } from 'react';
import { View } from 'react-native';
export const openImagePicker = () => {
    // const [selectedImage, setSelectedImage] = useState('')
    const launchimage = () => {
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
    
    }
     };
