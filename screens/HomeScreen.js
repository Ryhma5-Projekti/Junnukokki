import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '../styles/ThemeContext';

export default function HomeScreen() {
    const navigation = useNavigation();
    const { selectedTheme } = useTheme(); 

    return (
        <ScrollView>
            <View style={selectedTheme.container}> 
                <Text>Home Screen</Text>

                <View style={selectedTheme.CatalogRow}>
                    <View style={selectedTheme.CatalogItem}>
                        <Image
                            source={require('../components/img.jpeg')}
                            style={selectedTheme.CatalogImage}
                            onPress={() => navigation.navigate('Recipe')}
                        />
                        <Text
                            onPress={() => navigation.navigate('Recipe')}
                            style={selectedTheme.h3}
                        >Resepti 1</Text>
                    </View>
                    <View style={selectedTheme.CatalogItem}>
                        <Image source={require('../components/img.jpeg')} style={selectedTheme.CatalogImage} />
                        <Text style={selectedTheme.h3}>Resepti 1</Text>
                    </View>
                </View>
                <View style={selectedTheme.CatalogRow}>
                    <View style={selectedTheme.CatalogItem}>
                        <Image source={require('../components/img.jpeg')} style={selectedTheme.CatalogImage} />
                        <Text style={selectedTheme.h3}>Resepti 1</Text>
                    </View>
                    <View style={selectedTheme.CatalogItem}>
                        <Image source={require('../components/img.jpeg')} style={selectedTheme.CatalogImage} />
                        <Text style={selectedTheme.h3}>Resepti 1</Text>
                    </View>
                </View>
                <View style={selectedTheme.CatalogRow}>
                    <View style={selectedTheme.CatalogItem}>
                        <Image source={require('../components/img.jpeg')} style={selectedTheme.CatalogImage} />
                        <Text style={selectedTheme.h3}>Resepti 1</Text>
                    </View>
                    <View style={selectedTheme.CatalogItem}>
                        <Image source={require('../components/img.jpeg')} style={selectedTheme.CatalogImage} />
                        <Text style={selectedTheme.h3}>Resepti 1</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
