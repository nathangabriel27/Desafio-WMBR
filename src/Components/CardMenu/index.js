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
    navigation.navigate(route)
  }

  function icontag(icon) {
    switch (icon) {
      case '1':
        return <Image
          source={require(`../../../assets/Groupicon1.png`)}
        />
        break;
      case '2':
        return <Image
          source={require(`../../../assets/Groupicon2.png`)}
        />
        break;
      case '3':
        return <Image
          source={require(`../../../assets/Groupicon3.png`)}
        />
        break;
      case '4':
        return <Image
          source={require(`../../../assets/Groupicon4.png`)}
        />
        break;
      case '5':
        return <Image
          source={require(`../../../assets/Groupicon5.png`)}
        />
        break;
      case '6':
        return <Image
          source={require(`../../../assets/Groupicon6.png`)}
        />
        break;
      default:
        return <Image
          source={require(`../../../assets/Groupicon1.png`)}
        />
    }
  }
  return (
    <TouchableOpacity
      key={id}
      style={styles.container}
      onPress={route === false ? () => { } : () => navigateToScreen()}
    >
      <View style={styles.containerIconItem}>
        {icontag(icon)}
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
