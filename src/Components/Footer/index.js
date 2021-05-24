import React, { useContext, useState, useRef, useEffect } from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'



export default function Footer(props) {
  const { id, title, drinkName, autor, evaluation, ingredient, data } = props
  const navigation = useNavigation()





  /* 
  function navigateToUserProfile() {
    //console.log('props:',props);
    navigation.navigate('UserProfile')
  }
  
    function navigateToUserProfileFovorites(name) {
      //console.log('props:',props);
      navigation.navigate('UserProfileFovorites', name)
    }
    function navigateToNewDrink(props) {
      //console.log('props:',props);
      navigation.navigate('NewDrink')
    }
   */
  useEffect(() => {
    ///console.log('state FOOTER',state[0]);
  }, [])


  return (

    <View style={styles.footer}>
      <TouchableOpacity
        style={title === 'Voucher' ? styles.footerButtonSelected : styles.footerButton}
        onPress={() => { }}
      >
        <Image
          source={require('../../../assets/Group2483icon02.png')}
          style={{
            width: 45,
            height: 45,
          }}
        />
        <Text style={styles.bottonText}>{title === 'Voucher' ? 'Voucher' : null}</Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={title === 'Listas' ? styles.footerButtonSelected : styles.footerButton}
      // onPress={() => navigateToNewDrink()}
      >
        <Image
          source={require('../../../assets/Group2483icon02.png')}
          style={{

            width: 48,
            height: 48,
          }}
        />

        <Text style={styles.bottonText}>{title === 'Listas' ? 'Listas' : null}</Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButtonCenter}
      //onPress={() => navigateToUserProfile()}
      >
        <Image
          source={require('../../../assets/teste.png')}
          style={{
            width: 54,
            height: 56,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={title === 'Carteira' ? styles.footerButtonSelected : styles.footerButton}
      // onPress={() => navigateToNewDrink()}
      >
        <Image
          source={require('../../../assets/Group2483icon02.png')}
          style={{

            width: 48,
            height: 48,
          }}
        />
        <Text style={styles.bottonText}>{title === 'Carteira' ? 'Carteira' : null}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={title === 'Profile' ? styles.footerButtonSelected : styles.footerButton}
      //onPress={() => navigateToUserProfile()}
      >
        <Image
          source={require('../../../assets/Group2483icon02.png')}
          style={{

            width: 48,
            height: 48,
          }}
        />
        <Text style={styles.bottonText}>{title === 'Profile' ? 'Profile' : null}</Text>

      </TouchableOpacity>

    </View>
  );
}