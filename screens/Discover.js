import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { firestore, collection, RECIPES } from '../firebase/Config.js';
import { query, onSnapshot, where, orderBy, startAfter, limit } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { useTheme } from '../styles/ThemeContext';

export default function Discover() {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

    const { selectedTheme } = useTheme();

    useEffect(() => {
        const q = query(
            collection(firestore, RECIPES),
            orderBy('name'),
            limit(20)
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const tempRecipes = [];
            querySnapshot.forEach((doc) => {
                const recipeObject = {
                    id: doc.id,
                    ingredients: doc.data().ingredients,
                    instructions: doc.data().instructions,
                    name: doc.data().name,
                    time: doc.data().time,
                    servings: doc.data().servings,
                    image: doc.data().image
                }
                tempRecipes.push(recipeObject);
            })
            setRecipes(tempRecipes);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    
    const handleRecipePress = (recipe) => {
        navigation.navigate('Recipe', { recipe });
    }
    
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

        const renderRecipeItem = ({ item }) => (
            <TouchableOpacity onPress={() => handleRecipePress(item)}>
                <View style={selectedTheme.DiscoverItem}>
                    <Image
                        source={{ uri: item.image }}
                        style={selectedTheme.CatalogImage}
                    />
                    <Text style={[selectedTheme.DiscoverH3, selectedTheme.maxWidth]}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );

    return (
        <ScrollView style={selectedTheme.scrollview}>
            <View style={selectedTheme.container}>
            <TextInput
                style={selectedTheme.searchBar}
                placeholder='Etsi reseptejä'
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
            />


            <Text style={[selectedTheme.h1, selectedTheme.vali]}>Löydä uusia reseptejä</Text>

            <FlatList
                    data={filteredRecipes}
                    renderItem={renderRecipeItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    contentContainerStyle={{}}
                />

            </View>

        </ScrollView>
    );
    
}
