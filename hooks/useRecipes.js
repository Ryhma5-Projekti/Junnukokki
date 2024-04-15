import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default useRecipes = () => {
    const navigation = useNavigation()

    const [recipes, setRecipes] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    const handleRecipePress = (recipe) => {
        navigation.navigate('Recipe', { recipe });
    }

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return { navigation, recipes, setRecipes, searchQuery, setSearchQuery, filteredRecipes, handleRecipePress }
}
