import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { firestore, collection, RECIPES } from '../firebase/Config.js';
import { query, onSnapshot } from 'firebase/firestore';
import Styles from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const q = query(collection(firestore, RECIPES));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const tempRecipes = [];
            querySnapshot.forEach((doc) => {
                const recipeObject = {
                    id: doc.id,
                    ingredients: doc.data().ingredients,
                    instructions: doc.data().instructions,
                    name: doc.data().name,
                    time: doc.data().time,
                    servings: doc.data().servings
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

    return (
        <ScrollView> {
            recipes.map((recipe, index) => (
                <View key={index} style={Styles.container}>
                    <TouchableOpacity onPress={() => handleRecipePress(recipe)}>
                        <Text style={Styles.h3}>{recipe.name}</Text>
                        <View style={Styles.CatalogRow}>
                            <View style={Styles.CatalogItem}>
                                <TouchableOpacity onPress={() => handleRecipePress(recipe)}>
                                    <Image
                                        source={require('../components/img.jpeg')}
                                        style={Styles.CatalogImage}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            ))
        }
        </ScrollView>
    );
}