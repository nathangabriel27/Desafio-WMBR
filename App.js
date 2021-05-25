import React, { useState } from 'react';
import Routes from './src/Routes';
import AppLoading from 'expo-app-loading'
import * as Font from "expo-font";

export default function App() {
  const [isLoadingFontComplete, setIsLoadingFontComplete] = useState(false);

  const handleFontsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'Gilroy-ExtraBold': require('./assets/Fonts/Gilroy/Gilroy-ExtraBold.otf'),
        'Gilroy-Light': require('./assets/Fonts/Gilroy/Gilroy-Light.otf'),
        'Inter-Bold': require('./assets/Fonts/Inter/Inter-Bold.ttf'),
        'Inter-Light': require('./assets/Fonts/Inter/Inter-Light.ttf'),
        'Inter-Regular': require('./assets/Fonts/Inter/Inter-Regular.ttf'),
        'Inter-SemiBold': require('./assets/Fonts/Inter/Inter-SemiBold.ttf'),
      })
    ],
      console.log('Fonte carregada')
    );
  };
  if (!isLoadingFontComplete) {
    return (
      <AppLoading
        startAsync={handleFontsAsync}
        onError={error => console.warn(error)}
        onFinish={() => setIsLoadingFontComplete(true)
        }
      />
    );
  }

  return (
    <Routes />
  );
}

