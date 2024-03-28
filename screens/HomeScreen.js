import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Styles from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView>
        <View style={Styles.container}>
            <Text>Home Screen</Text>

            <View style={Styles.CatalogRow}>
                <View style={Styles.CatalogItem}>
                    <Image
                    source={require('../components/img.jpeg')}
                    style={Styles.CatalogImage}
                    onPress={() => navigation.navigate('Recipe')}/>
                    <Text
                    onPress={() => navigation.navigate('Recipe')}
                    style={Styles.h3}
                    >Resepti 1</Text>
                </View>
                <View style={Styles.CatalogItem}>
                    <Image source={require('../components/img.jpeg')} style={Styles.CatalogImage} />
                    <Text style={Styles.h3}>Resepti 1</Text>
                </View>
            </View>
            <View style={Styles.CatalogRow}>
                <View style={Styles.CatalogItem}>
                    <Image source={require('../components/img.jpeg')} style={Styles.CatalogImage} />
                    <Text style={Styles.h3}>Resepti 1</Text>
                </View>
                <View style={Styles.CatalogItem}>
                    <Image source={require('../components/img.jpeg')} style={Styles.CatalogImage} />
                    <Text style={Styles.h3}>Resepti 1</Text>
                </View>
            </View>
            <View style={Styles.CatalogRow}>
                <View style={Styles.CatalogItem}>
                    <Image source={require('../components/img.jpeg')} style={Styles.CatalogImage} />
                    <Text style={Styles.h3}>Resepti 1</Text>
                </View>
                <View style={Styles.CatalogItem}>
                    <Image source={require('../components/img.jpeg')} style={Styles.CatalogImage} />
                    <Text style={Styles.h3}>Resepti 1</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    );
}