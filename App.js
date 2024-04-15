import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import BottomNavigation from './Navigation';
import { ThemeProvider } from './styles/ThemeContext'; 
import Fonts from './styles/Fonts';



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
    <ThemeProvider> 
      <BottomNavigation />
    </ThemeProvider>
  );
}
