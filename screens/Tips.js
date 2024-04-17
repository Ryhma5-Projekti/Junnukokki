import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { firestore, collection, DISCOVER } from '../firebase/Config.js';
import { query, onSnapshot, where, orderBy, startAfter, limit } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '../styles/ThemeContext';

export default function Tips() {
    const navigation = useNavigation();
    const { selectedTheme } = useTheme(); 

    const [discovers, setDiscovers] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const q = query(
            collection(firestore, DISCOVER),
            orderBy('title'),
            limit(20)
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const tempDiscovers = [];
            querySnapshot.forEach((doc) => {
                const discoverObject = {
                    id: doc.id,
                    instructions: doc.data().instructions,

                    title: doc.data().title,
                    image: doc.data().image

                }
                tempDiscovers.push(discoverObject);
            })
            setDiscovers(tempDiscovers);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    
    const handleDiscoverPress = (discover) => {
        navigation.navigate('OpenTips', { discover });
    }
    // Viiva objektien väille vaihda: 
    // <View key={index} style={Styles.container}>     
    // ->      
    // <View key={index} style={[Styles.container, index !== 0 && Styles.recipeSeparator]}>
    // Styles.js -> DiscoverSeparator pois kommentista

    const filteredDiscovers = discovers.filter((discover) =>
        discover.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <ScrollView style={selectedTheme.scrollview}>

            <View style={selectedTheme.container}>

            <TextInput
                style={selectedTheme.searchBar}
                placeholderTextColor={selectedTheme.searchBarPlaceholder.color}
                placeholder='Etsi vinkkejä...'
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
            />

            <Text style={[selectedTheme.h1, selectedTheme.vali]}>Inspiraatiota ja vinkkejä</Text>
            {filteredDiscovers.map((discover, index) => (
                <View key={index}>
                    <TouchableOpacity onPress={() => handleDiscoverPress(discover)}>
                        <View>
                                    <TouchableOpacity onPress={() => handleDiscoverPress(discover)}>
                                        <View style={selectedTheme.TipsImageContainer}>
                                        <Image
                                            source={{ uri: discover.image }}
                                            style={selectedTheme.TipsImage}
                                        /></View>
                                    </TouchableOpacity>
                                    <Text style={selectedTheme.DiscoverH3}>{discover.title}</Text>
                                </View>
                    </TouchableOpacity>
                </View>
            ))}
            </View>

        </ScrollView>
    );
    
}
