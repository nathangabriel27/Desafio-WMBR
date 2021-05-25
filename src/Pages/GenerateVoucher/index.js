import React, { useRef, useState, useEffect } from 'react';
import { Keyboard, Alert, Image, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Dimensions, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
//Componentes
import Loading from '../../Components/Loading'
import styles from './styles';
import { colors } from '../../Constants/theme';
import Footer from '../../Components/Footer';
import CardMenu from '../../Components/CardMenu';


export default function GenerateVoucher() {
  const navigation = useNavigation()
  const [coin, setCoin] = useState('')
  const balanceAvailable = '10000'

  useEffect(() => {
    if (coin == 'NaN') {
      setCoin('')
    }
  }, [coin])

  function alterName() {
    Keyboard.dismiss
    Alert.alert(
      'Alterar nome  ',
      'Nome alterado com sucesso',
      [
        {
          text: 'Ok', onPress: () => navigation.pop()
        },
      ],
      { cancelable: false }
    )

  }

  function coinFormater(props) {
    let data = props + '';
    data = parseInt(data.replace(/[\D]+/g, ''));
    data = data + '';
    data = data.replace(/([0-9]{2})$/g, ",$1");

    if (data.length > 6) {
      data = data.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }
    setCoin(data);
  }

  function navigateToViewVoucher() {
    //console.log('props:',props);
    navigation.navigate('ViewVoucher')
  }
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
      >
        <StatusBar barStyle="ligh-content" hidden={true} color={colors.gray} />
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerBack}>
              <TouchableOpacity
                style={styles.headerBackButton}
                onPress={() => navigation.pop()}
              >
                <Image
                  source={require('../../../assets/arrowL.png')}
                  style={{
                    width: 9,
                    height: 18,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>Gerar voucher</Text>
          </View>

          <View style={styles.main}>
            <View style={styles.mainContainer}>
              <Text style={styles.mainContainerTitle}>Renner</Text>
              <Text style={styles.mainContainerText}>R. Nome de Rua, São Paulo</Text>
            </View>
            <View style={styles.mainInput}>
              <Text style={styles.mainInputText}>R$ </Text>
              <TextInput
                style={styles.mainTextInput}
                autoCorrect={false}
                placeholder="0,00"
                placeholderTextColor='#0047FF'
                autoCapitalize="none"
                keyboardType="decimal-pad"
                returnKeyType={'next'}
                value={coin}
                maxLength={10}
                onChangeText={(text) => coinFormater(text)}
                onSubmitEditing={() => navigateToViewVoucher()}
              />
            </View>
            <View style={styles.mainBottonContainer}>
              <Text style={styles.mainBottonContainerText}>Saldo disponível:</Text>
              <Text style={styles.mainBottonContainerTitle}>{`${balanceAvailable}`}</Text>
            </View>
          </View>



          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => navigateToViewVoucher()}
            >
              <Text style={styles.footerButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );
}