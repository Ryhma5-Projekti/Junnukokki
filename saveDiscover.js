// Tallentaa manuaalisesti kirjoitetut discoverit firebaseen
// Kun tiedot täytetty, ajetaan komennolla: node saveDiscover.js

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
const DISCOVER = 'discover';

const saveDiscover = async () => {
    try {
        const docRef = await addDoc(collection(firestore, DISCOVER), {
            title: "Kokkaa ilman sotkuja! 7 helppoa vinkkiä.",
            instructions: [
                "Aloita puhtaasta keittiöstä. Keittiön kannattaisi olla tahraton ja tiskikoneen, -altaan sekä kuivauskaapin tyhjiä ennen ruoanlaiton aloittamista. Tällä tavalla et kasvata stressiäsi lisäämällä sotkua sotkun päälle.",
                "Lue reseptit huolellisesti ennen kuin aloitat ruoanlaiton. Ota ruoka-aineet valmiiksi esille ja mittaa niitä oikeat määrät. Tarkista myös se, mitkä ainekset vaativat leikkaamista ja pilko ne valmiiksi.",
                "Kuulostaako tutulta: alat sekoittaa aineksia kulhossa tajuten hetken päästä, etteivät kaikki aineet tule mahtumaan kulhoon. Niinpä sinun täytyy vaihtaa isompaan kulhoon, jota et olisi halunnut käyttää, koska et olisi halunnut tiskata sitä. Nyt sinun pitää kuitenkin tiskata kaksi eri kulhoa.",
                "Jos yhtään epäilyttää, että saatat sotkea mitatessasi tarvitsemiasi aineksia, suorita itse mittaus tiskialtaan päällä. Jos ennustuksesi käy toteen, voit helposti puhdistaa tiskialtaan. Muista muutenkin tiskialtaan säännöllinen puhtaaksi pyyhkiminen, jottei se ala näyttää törkyiseltä!",
                "Ennen kuin aloitat ruoan valmistuksen, ota viereesi iso lautanen. Laske tälle lautaselle sellaiset välineet ja mittausastiat, joita aiot käyttää vielä uudelleen. Näihin kuuluvat vaikkapa paistinlastat ja veitset. Lautasen avulla et sotke turhaan työtasojasi.",
                "Kun et enää käytä jotakin ruoka-ainetta, laita loput siitä syrjään, jotta se ei jää sekoittamaan ja täyttämään työtasoa. Tippuiko jotain lattialle? Nosta se heti ylös ennen kuin unohdat sen. Läikytitkö jotakin? Pyyhi se pois välittömästi, sillä muuten se voi kovettua, jolloin puhdistamisesta tulee entistä hankalampaa.",
                "Jos vuokaruoka kypsenee uunissa tai odotat veden kiehumista, käytä tuo aika hyväksesi ja puhdista ympäristöäsi tai tiskaa vaikka astioita. Älä jätä kaikkea siivoamista syömisen jälkeiseen aikaan, koska silloin sinun täytyy tiskata myös se uunivuoka. Lisäksi olet siinä vaiheessa luultavasti aiempaa väsyneempi."
            ]
        });
        console.log("New discover added with ID: ", docRef.id);
        process.exit();
    } catch (error) {
        console.error("Error adding document: ", error);
        process.exit(1);
    }
}

saveDiscover();