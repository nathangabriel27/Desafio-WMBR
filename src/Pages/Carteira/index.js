import React, { useEffect, useState, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, Image, ImageBackground, Keyboard, Dimensions, Platform, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TabView, SceneMap } from 'react-native-tab-view';


import styles from './styles';
import { transactionsAndVouchers } from '../../Constants/data'
import CardList from '../../Components/CardList';
import { colors } from '../../Constants/theme';
import Footer from '../../Components/Footer';

export default function Carteira() {
  const navigation = useNavigation()
  const route = useRoute()
  const [transactions, setTransactions] = useState(false)


  const sevenDaysRoute = () => (
    <ScrollView>
      {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
        <CardList
          key={i}
          id={transactionsAndVouchers.id}
          title={transactionsAndVouchers.title}
          subtitle={transactionsAndVouchers.subtitle}
          value={transactionsAndVouchers.value}
          data={transactionsAndVouchers.data}
          img={transactionsAndVouchers.img}
          colorBackground={transactionsAndVouchers.colorBackground}
        />
      ))}
      {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
        <CardList
          key={i}
          id={transactionsAndVouchers.id}
          title={transactionsAndVouchers.title}
          subtitle={transactionsAndVouchers.subtitle}
          value={transactionsAndVouchers.value}
          data={transactionsAndVouchers.data}
          img={transactionsAndVouchers.img}
          colorBackground={transactionsAndVouchers.colorBackground}
        />
      ))}
      {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
        <CardList
          key={i}
          id={transactionsAndVouchers.id}
          title={transactionsAndVouchers.title}
          subtitle={transactionsAndVouchers.subtitle}
          value={transactionsAndVouchers.value}
          data={transactionsAndVouchers.data}
          img={transactionsAndVouchers.img}
          colorBackground={transactionsAndVouchers.colorBackground}
        />
      ))}
    </ScrollView>
  );

  const oneMonthRoute = () => (
    <ScrollView>
      {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
        <CardList
          key={i}
          id={transactionsAndVouchers.id}
          title={transactionsAndVouchers.title}
          subtitle={transactionsAndVouchers.subtitle}
          value={transactionsAndVouchers.value}
          data={transactionsAndVouchers.data}
          img={transactionsAndVouchers.img}
          colorBackground={transactionsAndVouchers.colorBackground}
        />
      ))}
      {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
        <CardList
          key={i}
          id={transactionsAndVouchers.id}
          title={transactionsAndVouchers.title}
          subtitle={transactionsAndVouchers.subtitle}
          value={transactionsAndVouchers.value}
          data={transactionsAndVouchers.data}
          img={transactionsAndVouchers.img}
          colorBackground={transactionsAndVouchers.colorBackground}
        />
      ))}
      {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
        <CardList
          key={i}
          id={transactionsAndVouchers.id}
          title={transactionsAndVouchers.title}
          subtitle={transactionsAndVouchers.subtitle}
          value={transactionsAndVouchers.value}
          data={transactionsAndVouchers.data}
          img={transactionsAndVouchers.img}
          colorBackground={transactionsAndVouchers.colorBackground}
        />
      ))}
    </ScrollView>
  );

  const threeMonthsRoute = () => (
    <ScrollView>
      {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
        <CardList
          key={i}
          id={transactionsAndVouchers.id}
          title={transactionsAndVouchers.title}
          subtitle={transactionsAndVouchers.subtitle}
          value={transactionsAndVouchers.value}
          data={transactionsAndVouchers.data}
          img={transactionsAndVouchers.img}
          colorBackground={transactionsAndVouchers.colorBackground}
        />
      ))}
      {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
        <CardList
          key={i}
          id={transactionsAndVouchers.id}
          title={transactionsAndVouchers.title}
          subtitle={transactionsAndVouchers.subtitle}
          value={transactionsAndVouchers.value}
          data={transactionsAndVouchers.data}
          img={transactionsAndVouchers.img}
          colorBackground={transactionsAndVouchers.colorBackground}
        />
      ))}
      {transactionsAndVouchers.map((transactionsAndVouchers, i) => (
        <CardList
          key={i}
          id={transactionsAndVouchers.id}
          title={transactionsAndVouchers.title}
          subtitle={transactionsAndVouchers.subtitle}
          value={transactionsAndVouchers.value}
          data={transactionsAndVouchers.data}
          img={transactionsAndVouchers.img}
          colorBackground={transactionsAndVouchers.colorBackground}
        />
      ))}
    </ScrollView>
  );

  const initialLayout = { width: Dimensions.get('window').width };
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'sevenDays', title: '7  dias' },
    { key: 'oneMonth', title: '1 mes' },
    { key: 'threeMonths', title: '3 meses' },
  ]);
  const renderScene = SceneMap({
    sevenDays: sevenDaysRoute,
    oneMonth: oneMonthRoute,
    threeMonths: threeMonthsRoute
  });
  const _renderTabBar = () => {
    return (
      <View style={styles.tabBar}>
        {routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i}
              activeOpacity={0.9}
              style={index === i ? styles.tabItemSelected : styles.tabItem}
              onPress={() => setIndex(i)}
            >
              <Text style={index === i ? styles.tabItemtextSelected : styles.tabItemtext} numberOfLines={1}>{route.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };



  return (
    <>
      <StatusBar hidden={true} />
      <ScrollView
        style={{ backgroundColor: colors.white }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.header}>
          <View style={styles.headerCard}>

            <View style={styles.headerCardContainer}>
              <View style={styles.headerCardContainerValue}>
                <View style={styles.headerCardContainerItens}>
                  <Image
                    source={require('../../../assets/carteira.png')}
                    style={{
                      marginRight: 26,

                    }}
                  />
                  <View>
                    <Text style={styles.headerCardText}>Saldo Hermy</Text>
                    <Text style={styles.headerCardValue}>R$ 400,00</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/Group2483icon02.png')}
                    style={{

                      width: 39,
                      height: 40,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.headerCardBotton}>

              <View style={styles.headerCardBottonButtons}>
                <TouchableOpacity style={styles.headerCardButton}>
                  <Image
                    source={require('../../../assets/Group2504icon03.png')}
                  />
                  <Text style={styles.headerCardButtonText}>Gerar voucher</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.headerCardButton}>
                  <Image
                    source={require('../../../assets/validation.png')}
                    style={{

                      width: 17,
                      height: 18,
                    }}
                  />
                  <Text style={styles.headerCardButtonText}>Validar cartão</Text>

                </TouchableOpacity>

              </View>

            </View>

            <TouchableOpacity style={styles.headerCardButtonPayment}>
              <Text style={styles.headerCardButtonText}>Meios de pagamento</Text>
              <Image
                source={require('../../../assets/arrowR.png')}
                style={{
                  marginHorizontal: 17,
                  width: 6,
                  height: 10,
                }}
              />

            </TouchableOpacity>


          </View>
          <View style={styles.headerCardBalance}>
            <View style={styles.headerCardBalanceTitle}>
              <Image
                source={require('../../../assets/credcard.png')}
                style={{
                  marginRight: 33,
                  marginLeft: 24,

                }}
              />
              <View style={styles.headerCardBalanceText}>
                <Text style={styles.headerCardBalanceTextSubtitle}>Limite Disponível</Text>
                <Text style={styles.headerCardBalanceTextTitle}>R$ 1.000,00</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/Group2483icon02.png')}
                style={{
                  marginRight: 22,
                  width: 48,
                  height: 48,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bodyButton}>
          <TouchableOpacity
            style={transactions === true ? styles.bodyButtonItemSelected : styles.bodyButtonItem}

            onPress={transactions === true ? () => { } : () => setTransactions(!transactions)}
          >
            <Text style={transactions === true ? styles.bodyButtonText : styles.bodyButtonTextSelected}>Últimas transações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={transactions === false ? styles.bodyButtonItemSelected : styles.bodyButtonItem}
            onPress={transactions === false ? () => { } : () => setTransactions(!transactions)}
          >
            <Text style={transactions === false ? styles.bodyButtonText : styles.bodyButtonTextSelected}>Vouchers</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.bodyList}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={_renderTabBar}
            //swipeEnabled={false}
            keyboardDismissMode="none"
          />

        </View>

      </ScrollView>
      <Footer title={'Carteira'} />
    </>
  );
}