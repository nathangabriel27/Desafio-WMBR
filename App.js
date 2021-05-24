import React, { useState } from 'react';
import Routes from './src/Routes';
import AppLoading from 'expo-app-loading'
import * as Font from "expo-font";

export default function App() {
/*   const [isLoadingFontComplete, setIsLoadingFontComplete] = useState(false);

  const handleFontsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
      })
    ],
      //console.log('Fonte carregada')
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
  } */

  return (
    <Routes />
  );
}

