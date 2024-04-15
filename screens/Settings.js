import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import Styles from '../styles/Styles';

export default function Settings() {
    return (
        <ScrollView>
            <View style={Styles.container}>

            <Text style={[Styles.h3,{textAlign: 'center'}]}>*placeholder vaalea tila*</Text>
            <Text style={[Styles.h3,{textAlign: 'center'}]}>*placeholder tumma tila*</Text>
            <Text style={[Styles.h3,{textAlign: 'center'}]}>*placeholder värisokeustila?*</Text>  

            <Text style={[Styles.h1, Styles.vali]}>Tietoja Sovelluksesta</Text>
                <Text style={[Styles.h3,{textAlign: 'center',paddingBottom: 10}]}>Sovellusversio:</Text>
                <Text style={[Styles.txt,{textAlign: 'center',paddingBottom: 20}]}>v.1.04</Text>
                <Text style={[Styles.h3,{textAlign: 'center',paddingBottom: 10}]}>Tekijät:</Text>
                <Text style={[Styles.txt,{textAlign: 'center',paddingBottom: 10}]}>Saana Lapinkangas</Text>
                <Text style={[Styles.txt,{textAlign: 'center',paddingBottom: 10}]}>Nico Jokelainen</Text>
                <Text style={[Styles.txt,{textAlign: 'center',paddingBottom: 10}]}>Miika Tiihonen</Text>
                <Text style={[Styles.txt,{textAlign: 'center',paddingBottom: 10}]}>Aarno Lempinen</Text>
                <Text style={[Styles.txt,{textAlign: 'center',paddingBottom: 10}]}>Mikael Jaara</Text>
                <Text style={[Styles.txt,{textAlign: 'center',paddingBottom: 20}]}>TVTSPO Mobiilikehitysprojekti, kevät 2024, Ryhmä 5</Text>

                <Text style={[Styles.h3,{textAlign: 'center',paddingBottom: 10}]}>Yhteistyökumppanit:</Text>
                <Text style={[Styles.txt,{textAlign: 'center',paddingBottom: 10}]}>*lisätään tähän jotain liiketoimintasuunnitelman mukaan*</Text>

                 <Image
                    source={require('../components/logo_full.png')}
                    style={{ width: '80%', height: 200, resizeMode: 'contain', alignSelf: 'center', marginVertical: 40, }} />
            </View>
        </ScrollView>
    );
}
