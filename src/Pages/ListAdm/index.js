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
import { transactionsAndVouchers } from '../../Constants/data';


export default function ListAdm() {
  const { height, width } = Dimensions.get('window');

  const navigation = useNavigation()

  return (
    <>
      <StatusBar barStyle="ligh-content" hidden={true} color={colors.gray} />
      <ScrollView
        style={{ backgroundColor: '#fff' }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.photoList}>
          <Image
            source={require('../../../assets/casalfull.png')}
            style={{
              height: 373,
              width: width,
            }}
          />
          <Text style={styles.photoListText}>1 de 12</Text>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerText}>{`Lista para presente de casamento do Júlio com a Marina`}</Text>
          <View style={styles.headerDateItens}>
            <View style={styles.headerDate}>
              <Image
                source={require('../../../assets/Groupcalendar.png')}
                style={{

                }}
              />
              <Text style={styles.headerDateText}>Prazo: </Text>
              <Text style={styles.headerDateSubtext}>20/12</Text>
            </View>
            <View style={styles.headerDate}>
              <Image
                source={require('../../../assets/time.png')}
                style={{
                  marginLeft: 22,
                }}
              />
              <Text style={styles.headerDateText}>Expira em: </Text>
              <Text style={styles.headerDateSubtext}>36 dias</Text>
            </View>
          </View>

        </View>

        <View style={styles.friends}>

          <TouchableOpacity style={styles.friendsHeader}>
            <View style={styles.friendsHeaderUsers}>
              <Text style={styles.friendsHeaderUsersNumbers}>{`25 `}</Text>
              <Text style={styles.friendsHeaderUsersText}>{`Contribuidores`}</Text>
            </View>
            <Text style={styles.friendsHeaderView}>{`Ver todos`}</Text>
          </TouchableOpacity>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
              <Image
                source={require('../../../assets/user1.png')}
                style={{
                  height: 66,
                  width: 64,
                  marginHorizontal: 10,
                }}
              />
            ))}
            {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
              <Image
                source={require('../../../assets/user1.png')}
                style={{
                  height: 66,
                  width: 64,
                  marginHorizontal: 10,
                }}
              />
            ))}
          </ScrollView>

        </View>
        <View style={styles.pricing}>
          <View style={styles.pricingCollected}>
            <Text style={styles.pricingCollectedText}>{`Arrecadado:`}</Text>
            <Text style={styles.pricingCollectedValue}>{`R$ 8.250,00`}</Text>
          </View>
          <View style={styles.progress}>
            <View style={[styles.progressState1, { width: '100%' }]} />
            <View style={[styles.progressState2, { width: '45%' }]} />
            <View style={[styles.progressState3, { width: '20%' }]} />
            <View style={[styles.progressState4, { width: '100%' }]}>
              <Text style={styles.progressText}>{`45%`}</Text>
            </View>
          </View>

          <View style={styles.pricingTotal}>
            <Text style={styles.pricingMin}>{`Mínimo: R$ 5.250,00`}</Text>
            <View style={styles.pricingTotalView}>
              <Text style={styles.pricingTotalText}>{`Meta `}</Text>
              <Text style={styles.pricingTotalValue}>{`R$ 10.250,00`}</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.bodyTitle}>{`Amigos até certa instância`}</Text>
          <Text style={styles.bodyText}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</Text>
        </View>

        <View style={styles.video}>
          <Text style={styles.videoTitle}>{`Video`}</Text>
          <View style={styles.videoPlayer}>
            <Image
              source={require('../../../assets/video.png')}
              style={{

              }}
            />
          </View>
        </View>


        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButtonBlue}
          >
            <Image
              source={require('../../../assets/contr.png')}
              style={{

              }}
            />
            <Text style={styles.footerText}>{`Contribuir`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButtonBack}
          >
            <Image
              source={require('../../../assets/arrowback.png')}
              style={{

              }}
            />
          </TouchableOpacity>


        </View>


      </ScrollView>
    </>

  );
}