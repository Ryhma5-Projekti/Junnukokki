import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { firestore, collection, RECIPES } from '../firebase/Config.js';
import { query, onSnapshot, where, orderBy, startAfter, limit } from 'firebase/firestore';
import Styles from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

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
                <View style={Styles.DiscoverItem}>
                    <Image
                        source={{ uri: item.image }}
                        style={Styles.CatalogImage}
                    />
                    <Text style={[Styles.DiscoverH3, Styles.maxWidth]}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );

    return (
        <ScrollView>
            <View style={Styles.container}>
            <TextInput
                style={Styles.searchBar}
                placeholder='Etsi reseptejä'
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
            />


            <Text style={[Styles.h1, Styles.vali]}>Löydä uusia reseptejä</Text>

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