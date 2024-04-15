import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Styles from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import MyRecipes from './MyRecipes';

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView style={Styles.scrollview}>
            <View style={Styles.container}>
            <View style={Styles.WhiteBox}>
            <Text style={Styles.h4}>Junnukokki on reseptisovellus, joka tarjoaa helppoja reseptejä ja ruuanlaittovinkkejä aloitteleville kokeille.</Text>
            <Text style={Styles.h4}>Sovelluksessa voit tallentaa omia reseptejäsi, löytää hyväksi todettuja ohjeita valmiista arkistosta ja inspiroitua ammattilaisten keittiövinkeistä.</Text>
            </View>
                <MyRecipes />
            </View>
        </ScrollView>
    );
}