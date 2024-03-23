import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import Styles from '../styles/Styles';

export default function Settings() {
    return (
        <ScrollView>
            <View style={Styles.container}>
            <Text style={Styles.h1}>Otsikko</Text>
            <Text style={Styles.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <Text style={[Styles.h1, Styles.vali]}>Otsikko</Text>
            <Text style={Styles.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <Image
            source={require('../components/logo_full.png')}
            style={{ width: '80%', height: 200, resizeMode: 'contain', alignSelf: 'center', marginVertical: 40, }} />
            </View>
        </ScrollView>
    );
}