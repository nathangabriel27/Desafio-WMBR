import React, { useRef, useState } from 'react';
import { Keyboard, Alert, Image, Text, ImageBackground, Platform, TouchableWithoutFeedback, Dimensions, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
//Componentes

import styles from './styles';
import { colors } from '../../Constants/theme';
import { ScrollView } from 'react-native-gesture-handler';



export default function ViewVoucher() {
  const { height, width } = Dimensions.get('window');

  const navigation = useNavigation()
  const [name, setName] = useState('')

  const dataText = (props) => (
    <View style={styles.dataText}    >
      <Text style={styles.dataTextTitle}>{props.title}</Text>
      <Text style={styles.dataTextText}>{props.text}</Text>
    </View>
  )

  return (

    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Frame.png')}
        style={styles.imageBackground}
      >
        <ScrollView style={{ position: 'absolute', width: width }}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.headerClose}
              onPress={() => navigation.pop()}
            >
              <Image
                source={require('../../../assets/close.png')}
                style={{
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            <Text style={styles.mainTextTitleIcon}>✌️</Text>
            <Text style={styles.mainTextTitle}>{`Parabéns, seu Voucher \nfoi gerado`}</Text>
          </View>

          <View style={styles.bodyQRCode}>
            <Image
              source={require('../../../assets/qrcode.png')}
            />
          </View>

          {dataText({ title: 'Valor total: ', text: 'R$ 1.250,00' })}
          {dataText({ title: 'Para: ', text: 'Renner' })}
          {dataText({ title: 'Expira em: ', text: '20/08/2020' })}

          <View style={styles.footer}>
            <Text style={styles.dataTextText}>Senha numérica</Text>
            <TouchableOpacity
              style={styles.footerCode}
              onPress={() => { }}
            >
              <Text style={styles.footerCodeText}>54826538</Text>
              <Image
                source={require('../../../assets/copy.png')}
                style={{
                  marginHorizontal: 10
                }}
              />
            </TouchableOpacity>
            {dataText({ title: 'Expira em: ', text: '15s' })}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>


  );
}