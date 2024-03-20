import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Styles from '../styles/Styles';

export default function HomeScreen() {
    return (
        <View style={Styles.container}>
            <Text>Home Screen</Text>
            <StatusBar style="auto" />
        </View>
    );
}