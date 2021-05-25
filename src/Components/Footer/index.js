import React, { useContext, useState, useRef, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

export default function Footer(props) {
  const { title } = props
  const navigation = useNavigation()

  function navigateToPerfil() {
    navigation.navigate('Perfil')
  }
  function navigateToCarteira() {
    navigation.navigate('Carteira')
  }
  function navigateToGenerateVoucher() {
    navigation.navigate('GenerateVoucher')
  }
  function navigateToList() {
    navigation.navigate('List')
  }

  return (

    <View style={styles.footer}>
      <TouchableOpacity
        style={title === 'Voucher' ? styles.footerButtonSelected : styles.footerButton}
        onPress={() => navigateToGenerateVoucher()}
      >
        <Image
          source={require('../../../assets/voucher2.png')}
          style={{
            width: 20,
            height: 20,
            marginTop: 30,
          }}
        />
        <Text style={styles.bottonText}>{title === 'Voucher' ? 'Voucher' : null}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={title === 'Listas' ? styles.footerButtonSelected : styles.footerButton}
        onPress={() => navigateToList()}
      >
        <Image
          source={require('../../../assets/listas1.png')}
          style={{
            marginTop: 30,
          }}
        />
        <Text style={styles.bottonText}>{title === 'Listas' ? 'Listas' : null}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButtonCenter}
      //onPress={() => {}}
      >
        <Image
          source={require('../../../assets/logohermy.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={title === 'Carteira' ? styles.footerButtonSelected : styles.footerButton}
        onPress={() => navigateToCarteira()}
      >
        <Image
          source={require('../../../assets/carteira2.png')}
          style={{
            marginTop: 30,
          }}
        />
        <Text style={styles.bottonText}>{title === 'Carteira' ? 'Carteira' : null}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={title === 'Perfil' ? styles.footerButtonSelected : styles.footerButton}
        onPress={() => navigateToPerfil()}
      >
        <Image
          source={require('../../../assets/perfil.png')}
          style={{
            marginTop: 30,
          }}
        />
        <Text style={styles.bottonText}>{title === 'Perfil' ? 'Perfil' : null}</Text>
      </TouchableOpacity>

    </View>
  );
}