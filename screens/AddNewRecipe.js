import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddNewRecipe() {
    return (
        <View>
            <Text>Add new recipe</Text>
            <StatusBar style="auto" />
        </View>
    );
}