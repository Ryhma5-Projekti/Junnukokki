import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { firestore, collection, DISCOVER } from '../firebase/Config.js';
import { query, onSnapshot, where, orderBy, startAfter, limit } from 'firebase/firestore';
import Styles from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';

export default function Tips() {
    const navigation = useNavigation();
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
        <ScrollView>
            <TextInput
                style={Styles.searchBar}
                placeholder='Etsi vinkkejä'
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
            />
            {filteredDiscovers.map((discover, index) => (
                <View key={index} style={Styles.container}>
                    <TouchableOpacity onPress={() => handleDiscoverPress(discover)}>
                        <View>
                            <Text style={Styles.DiscoverH3}>{discover.title}</Text>
                            <View style={Styles.DiscoverRow}>
                                <View style={Styles.DiscoverItem}>
                                    <TouchableOpacity onPress={() => handleDiscoverPress(discover)}>
                                        <Image
                                            source={{ uri: discover.image }}
                                            style={Styles.DiscoverImage}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
    
}