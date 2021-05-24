import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function CardList(props) {
  const {
    id,
    title,
    subtitle,
    value,
    data,
    img,
    colorBackground

  } = props
  const navigation = useNavigation()

  return (
    <View
      key={id}
      style={styles.container}
    >

      <View style={[styles.containerIconItem, { backgroundColor: colorBackground }]}>
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
      <View style={styles.bodyValue}>
        <Text style={value > 0 ? styles.bodyValueTitlePositive : styles.bodyValueTitleNegative}>{`R$ ${value}`}</Text>
        <Text style={styles.bodyValueSubText}>{data}</Text>
      </View>
    </View>

  );
}
