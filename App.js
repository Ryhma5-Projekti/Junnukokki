import Fonts from './styles/Fonts';
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import BottomNavigation from './Navigation';

export default function App() {
  // ladataan fontit käyttöön käynnistyksessä
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    const loadApp = async () => {
      await Fonts();
      setFontLoaded(true);
    };
    loadApp();
  }, []);

  if (!fontLoaded) {
    return <Text>Ladataan sisältöä...</Text>;
  }

  return (
    <>
      <BottomNavigation />
    </>
  );
}