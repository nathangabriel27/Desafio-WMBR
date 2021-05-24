import React, { useRef, useState } from 'react';
import { Keyboard, Alert, Image, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Dimensions, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
//Componentes
import Loading from '../../Components/Loading'
import styles from './styles';
import { colors } from '../../Constants/theme';
import Footer from '../../Components/Footer';
import CardMenu from '../../Components/CardMenu';


export default function PerfilEditName() {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const lastNameRef = useRef();

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
            <Text style={styles.headerText}>Alterar nome</Text>
          </View>


          <View style={styles.main}>
            <View style={
              name == '' ? [styles.mainContainer, { justifyContent: 'center', backgroundColor: colors.gray3 }] : [styles.mainContainer, {}]
            }>
              {
                name == ''
                  ?
                  null
                  :
                  <Text style={styles.mainContainerText}>Nome</Text>
              }

              <TextInput
                style={styles.mainTextInput}
                autoCorrect={false}
                placeholder="Nome"
                placeholderTextColor='#737780'
                autoCapitalize="words"
                keyboardType="default"
                returnKeyType={'next'}
                value={name}
                onChangeText={(text) => setName(text)}
                onSubmitEditing={() => lastNameRef.current.focus()}
              />

            </View>
            <View style={
              lastName == '' ? [styles.mainContainer, { justifyContent: 'center', backgroundColor: colors.gray3 }] : [styles.mainContainer, {}]
            }>
              {
                lastName == ''
                  ?
                  null
                  :
                  <Text style={styles.mainContainerText}>Sobrenome</Text>
              }
              <TextInput
                style={styles.mainTextInput}
                autoCorrect={false}
                placeholder="Sobrenome"
                placeholderTextColor='#aaa'
                autoCapitalize="words"
                keyboardType="default"
                returnKeyType={'send'}
                value={lastName}
                ref={lastNameRef}
                onChangeText={(text) => setLastName(text)}
                onSubmitEditing={() => alterName()}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => alterName()}
            >
              <Text style={styles.footerButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );
}