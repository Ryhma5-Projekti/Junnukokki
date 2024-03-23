// Tallentaa manuaalisesti kirjoitetut reseptit firebaseen
// Kun tiedot täytetty, ajetaan komennolla: node saveRecipes.js

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
require('dotenv').config();

// .env sisältö discordissa
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };

initializeApp(firebaseConfig);
const firestore = getFirestore();
const RECIPES = 'recipes';

const saveRecipe = async () => {
    try {
        const docRef = await addDoc(collection(firestore, RECIPES), {
            name: "Lohikeitto",
            time: "30 min", 
            servings: "4 annosta",

            // Jokainen ainesosa ja ohje-steppi omassa solussa 
            // ["ainesosa1", "ainesosa2", ...]
            // ["ohje1", "ohje2", ...] 

            ingredients: ["2-3 (250 g) perunaa", "250 g kasvissuikaleita", "6 dl vettä", "1-2 laakerinlehteä", "4 kokonaista laakerinlehteä", "500 g kirjolohigileetä", "2,5 dl ruokakermaa", "½ tl suolaa", "½ dl tilliä"], 
            instructions: ["Kuori ja kuutioi perunat. Keitä ne sekä kasvissuikaleet kypsiksi laakerinlehdellä ja maustepippureilla maustetussa vedessä.", "Poista sillä aikaa kalafileestä ruodot ja nahka. Leikkaa filee kuutioiksi. Lisää kattilaan.", "Anna kiehua 5 min.", "Lisää kerma ja suola. Kuumenna kiehuvaksi. Lisää päälle hienonnettu tilli. Tarkista maku.", "Tarjoa ruisleivän kera."]
        });
        console.log("Recipe added with ID: ", docRef.id);
        process.exit();
    } catch (error) {
        console.error("Error adding document: ", error);
        process.exit(1);
    }
}

saveRecipe();



