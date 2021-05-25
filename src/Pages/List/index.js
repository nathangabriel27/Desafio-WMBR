import React, { useRef, useState } from 'react';
import { Keyboard, Alert, Image, Text, ImageBackground, Platform, TouchableWithoutFeedback, Dimensions, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
import ProgressCircle from 'react-native-progress-circle'

//Componentes

import styles from './styles';
import { colors } from '../../Constants/theme';
import { ScrollView } from 'react-native-gesture-handler';



export default function List() {
  const { height, width } = Dimensions.get('window');

  const navigation = useNavigation()
  const [name, setName] = useState('')

  function navigateToListAdm() {
    //console.log('props:',props);
    navigation.navigate('ListAdm')
  }


  const dataText = (props) => (
    <View style={styles.dataText}    >
      <Text style={styles.dataTextTitle}>{props.title}</Text>
      <Text style={styles.dataTextText}>{props.text}</Text>
    </View>
  )

  return (

    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Frame.png')}
        style={styles.imageBackground}
      >
        <View style={styles.containerHeader} />

        <View style={styles.main}>
          <Text style={styles.mainTextTitleIcon}>✌️</Text>
          <Text style={styles.mainTextTitle}>{`Uhuuullll!`}</Text>
          <Text style={styles.mainTextSubtitle}>{`Sua conta está criada! Aproveite agora \ntodos os benefícios Hermy!`}</Text>
        </View>

        <View style={styles.body}>
          <Image
            source={require('../../../assets/check.png')}
            style={{
              position: 'absolute',
              zIndex: 9,
              marginTop: -50,
            }}
          />
          <Image
            source={require('../../../assets/casal.png')}
            style={{
              width: '100%',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              height: 103,
            }}
          />
          <View style={styles.bodyText}>
            <Text style={styles.bodyTitle}>{`Lista para presente de casamento \ndo Júlio com a Marina`}</Text>
          </View>

          <View style={styles.bodyItens}>
            <View style={styles.bodyItensText}>
              {dataText({ title: 'Status: ', text: 'Ativa' })}
              {dataText({ title: 'Prazo: ', text: '20/12' })}
              {dataText({ title: 'Arrecadado: ', text: 'R$ 0' })}
            </View>

            <View style={styles.bodyProgress}>
              <ProgressCircle
                percent={10}
                radius={50}
                borderWidth={4}
                color="#3399FF"
                shadowColor="#B0B3B9"
                bgColor="#fff"
              >
                <Text style={styles.bodyProgressTitle}>{'Meta'}</Text>
                <Text style={styles.bodyProgressText}>{'10%'}</Text>
              </ProgressCircle>
            </View>
          </View>

        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigateToListAdm()}
          >
            <Text style={styles.footerButtonText}>Visualizar lista</Text>
          </TouchableOpacity>
        </View>



      </ImageBackground>
    </ScrollView>


  );
}