import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TextInput, ScrollView, Dimensions, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
//Componentes
import Loading from '../../Components/Loading'
import styles from './styles';
import { colors } from '../../Constants/theme';
import Footer from '../../Components/Footer';
import CardMenu from '../../Components/CardMenu';


export default function PerfilUser() {
  const navigation = useNavigation()


  const buttonEdit = (props) => (
    <TouchableOpacity
      style={props.title != 'E-mail' ? styles.buttonEdit : [styles.buttonEdit, { borderBottomWidth: 0, }]}
      onPress={props.route === '' ? () => { } : () => navigateToScreen(props.route)}
    >
      <Text style={styles.buttonEditTitle}>{props.title}</Text>
      <Text style={styles.buttonEditText}>{props.text}</Text>
      <Image
        source={require('../../../assets/arrowR.png')}
        style={{
          marginRight: 24,
          width: 6,
          height: 10,
        }}
      />
    </TouchableOpacity>
  )

  function navigateToScreen(props) {
    //console.log('props:',props);
    navigation.navigate(props)
  }
  return (
    <>
      <StatusBar barStyle="ligh-content" hidden={true} color={colors.gray} />
      <ScrollView 
      style={{ backgroundColor: colors.white }}
      showsVerticalScrollIndicator={false}
      bounces={false}
      >
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
          <Text style={styles.headerText}>Dados Pessoais</Text>
        </View>
        <View style={styles.containerPhoto}>
          <Image
            source={require('../../../assets/Groupprofile.png')}
            style={{
              width: 144,
              height: 144,
            }}
          />
          <TouchableOpacity style={styles.containerPhotoIcon}>
            <Image
              source={require('../../../assets/photoicon.png')}
              style={{
                width: 22,
                height: 20,
                margin: 10,
              }}
            />
          </TouchableOpacity>

        </View>

        {buttonEdit({ title: 'Nome', text: 'José sechim almeida', route: 'PerfilEditName' })}
        {buttonEdit({ title: 'CPF', text: '042.589.482-33', route: '' })}
        {buttonEdit({ title: 'Telefone', text: '11 95548-5841', route: '' })}
        {buttonEdit({ title: 'E-mail', text: 'Josésecch@gmail.coma', route: '' })}






      </ScrollView>

    </>

  );
}