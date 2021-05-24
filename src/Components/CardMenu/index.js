import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export default function CardMenu(props) {
  const navigation = useNavigation()
  const {
    id,
    title,
    subtitle,
    route,
    icon,
  } = props

  function navigateToScreen() {
    //console.log('props:',props);
    navigation.navigate(route)
  }

  return (
    <TouchableOpacity
      key={id}
      style={styles.container}
      onPress={route === false ? () => { } : () => navigateToScreen()}
    >

      <View style={styles.containerIconItem}>
        <Image
          source={require('../../../assets/Group2483icon02.png')}
          style={{
            width: 48,
            height: 48,
          }}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyName}>{title}</Text>
        <Text style={styles.bodyDescription}>{subtitle}</Text>
      </View>
      <Image
        source={require('../../../assets/arrowR.png')}
        style={{
          marginRight: 24,
          width: 6,
          height: 10,
        }}
      />
    </TouchableOpacity>

  );
}
