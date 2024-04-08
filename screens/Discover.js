import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { firestore, collection, RECIPES } from '../firebase/Config.js';
import { query, onSnapshot, where, orderBy, startAfter, limit } from 'firebase/firestore';
import Styles from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import RecipeList from '../components/RecipeList';
import RecipeSearch from '../components/RecipeSearch';
import useRecipes from '../hooks/useRecipes.js';

export default function Discover() {
    const { setRecipes, searchQuery, setSearchQuery, filteredRecipes, handleRecipePress } = useRecipes()

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

    return (
        <ScrollView>
            <RecipeSearch setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            <RecipeList filteredRecipes={filteredRecipes} handleRecipePress={handleRecipePress} />
        </ScrollView>
    );
    
}