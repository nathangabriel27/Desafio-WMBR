import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TextInput, ScrollView, Dimensions, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
//Componentes
import Loading from '../../Components/Loading'
import styles from './styles';
import { colors } from '../../Constants/theme';


export default function Perfil() {
  const navigation = useNavigation()

  const [loadingVisible, setLoadingVisible] = useState(false)


  return (
    <>
      <StatusBar barStyle="ligh-content" hidden={true} color={colors.gray} />
      <Loading loadingVisible={loadingVisible} textMensage={'Buscando dados'} />
      <View style={styles.container}>
        <Text>TEla de Perfil</Text>

      </View>
    </>

  );
}