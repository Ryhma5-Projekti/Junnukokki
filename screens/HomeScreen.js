import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyRecipes from './MyRecipes';

import { useTheme } from '../styles/ThemeContext';

export default function HomeScreen() {
    const navigation = useNavigation();
    const { selectedTheme } = useTheme(); 

    return (
        <ScrollView style={selectedTheme.scrollview}>
            <View style={selectedTheme.container}>
            <View style={selectedTheme.WhiteBox}>
            <Text style={selectedTheme.h4}>Junnukokki on reseptisovellus, joka tarjoaa helppoja reseptejä ja ruuanlaittovinkkejä aloitteleville kokeille.</Text>
            <Text style={selectedTheme.h4}>Sovelluksessa voit tallentaa omia reseptejäsi, löytää hyväksi todettuja ohjeita valmiista arkistosta ja inspiroitua ammattilaisten keittiövinkeistä.</Text>
            </View>
                <MyRecipes />
            </View>
        </ScrollView>
    );
}
