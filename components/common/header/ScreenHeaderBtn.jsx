import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './screenheader.style';

const ScreenHeaderBtn = ({ iconUrl, dimenesion, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        src={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimenesion)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;