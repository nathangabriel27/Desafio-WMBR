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


export default function ListAdm() {
  const navigation = useNavigation()
  return (
    <>
      <StatusBar barStyle="ligh-content" hidden={true} color={colors.gray} />
      <ScrollView 
      style={{backgroundColor: '#E5E5E5'}}
      showsVerticalScrollIndicator={false}
   
      >
        <View style={styles.container} />
        <View style={styles.header}>
          <View style={styles.headerProfilePhoto}>
            <Image
              source={require('../../../assets/Grupo2.png')}
              style={{
                marginTop: -54,
                width: 144,
                height: 144,
              }}
            />
            <Image
              source={require('../../../assets/Groupprofile.png')}
              style={{
                marginTop: -54,
                width: 144,
                height: 144,
              }}
            />
            <Image
              source={require('../../../assets/Grupo4.png')}
              style={{
                marginTop: -54,
                width: 144,
                height: 144,
              }}
            />
          </View>
          <View style={styles.headerProfile}>
            <Text style={styles.headerProfileName}>José Sechim</Text>
            <View style={styles.headerProfiletag}>
              <Text style={styles.headerProfileNameTag}>User Beginner</Text>
            </View>
            <TouchableOpacity
              style={styles.headerProfileButton}
              onPress={() => { }}
            >
              <Image
                source={require('../../../assets/rocket.png')}
                style={{

                }}
              />
              <Text style={styles.headerProfileText}>Comprar HermyCard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerProfileButtonLogout}
              onPress={() => { }}
            >
              <Image
                source={require('../../../assets/door.png')}
                style={{

               
                }}
              />
              <Text style={styles.headerProfileButtonLogoutText}>Sair</Text>
            </TouchableOpacity>

          </View>

        </View>
        <View style={styles.body}>
          <CardMenu route={'PerfilUser'} icon={'1'} title={'Dados pessoais'} subtitle={'Veja e edite dados cadrastais'}/>
          <CardMenu route={false} icon={'2'} title={'Endereço'} subtitle={'Confira e/ou edite seu endereço '}/>
          <CardMenu route={false} icon={'3'} title={'Formas de pagar'} subtitle={'Verifique as formas de pagamento'}/>
          <CardMenu route={false} icon={'4'} title={'Configurações'} subtitle={'Veja e edite dados cadrastais'}/>
          <CardMenu route={false} icon={'5'} title={'Alterar senha'} subtitle={'Veja e edite dados cadrastais'}/>
          <CardMenu route={false} icon={'6'} title={'Privacidade'} subtitle={'Veja e edite dados cadrastais'}/>
        </View>
      </ScrollView>

      <Footer title={'Perfil'} />
    </>

  );
}