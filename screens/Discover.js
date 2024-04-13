import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { firestore, collection, RECIPES } from '../firebase/Config.js';
import { query, onSnapshot, where, orderBy, startAfter, limit } from 'firebase/firestore';
import Styles from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';

export default function Discover() {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

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

    return (
        <ScrollView>
            <TextInput
                style={Styles.searchBar}
                placeholder='Etsi reseptejä'
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
            />
            {filteredRecipes.map((recipe, index) => (
                <View key={index} style={Styles.container}>
                    <TouchableOpacity onPress={() => handleRecipePress(recipe)}>
                        <View>
                            <Text style={Styles.DiscoverH3}>{recipe.name}</Text>
                            
                            <View style={Styles.DiscoverRow}>
                                <View style={Styles.DiscoverItem}>
                                    <TouchableOpacity onPress={() => handleRecipePress(recipe)}>
                                        {/* Vaihdettu Image-komponentin source */}
                                        <Image
                                            source={{ uri: recipe.image }}
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