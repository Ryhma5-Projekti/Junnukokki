import * as Font from 'expo-font';

const Fonts = async () => {
  await Font.loadAsync({
    'Exo': require('../assets/fonts/Exo2.ttf'),
    // Lisää muita fontteja tarvittaessa
  });
};

export default Fonts;

