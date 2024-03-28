// Tallentaa manuaalisesti kirjoitetut reseptit firebaseen
// Kun tiedot täytetty, ajetaan komennolla: node saveRecipes.js

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
require('dotenv').config();

// .env sisältö discordissa
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

initializeApp(firebaseConfig);
const firestore = getFirestore();
const RECIPES = 'recipes';

const saveRecipe = async () => {
    try {
        const docRef = await addDoc(collection(firestore, RECIPES), {
            name: "Kaurapuuro",
            time: "10 minuuttia", 
            servings: "2 annosta",

            // Jokainen ainesosa ja ohje-steppi omassa solussa 
            // ["ainesosa1", "ainesosa2", ...]
            // ["ohje1", "ohje2", ...] 

            ingredients: ["5 dl puuromaitojuomaa tai vettä", "2½ dl kaurahiutale", "suolaa", "voi (voi jättää pois)", "marjat ja hedelmiä tarjoiluun"], 
            instructions: [
                "Kuumenna maito tai vesi kiehuvaksi paksupohjaisessa kattilassa.",
                "Lisää joukkoon kaurahiutaleet ja ripaus suolaa.",
                "Keitä puuroa samalla sekoitellen noin 5 minuuttia.",
                "Lisää lopuksi joukkoon pieni nokare voita ja anna sen sulaa puuron joukkoon",
                "Ota kattila pois levyltä ja anna puuron hautua muutaman minuutin ajan ennen tarjoilua.",
                "Tarjoile puuro marjojen, hedelmien tai marjakeiton kera."
            ]
        });
        console.log("Recipe added with ID: ", docRef.id);
        process.exit();
    } catch (error) {
        console.error("Error adding document: ", error);
        process.exit(1);
    }
}

saveRecipe();



