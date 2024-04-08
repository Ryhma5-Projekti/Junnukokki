import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Styles from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import MyRecipes from './MyRecipes';

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={Styles.container}>
                <Text>Home Screen</Text>

                <MyRecipes />
            </View>
        </ScrollView>
    );
}