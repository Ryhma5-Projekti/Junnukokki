import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../styles/ThemeContext'; 

export default RecipeList = ({ filteredRecipes, handleRecipePress, onLongPress }) => {
    const { selectedTheme } = useTheme(); 
    
    return (
        <View style={selectedTheme.vali}>
            <Text style={selectedTheme.h1}>Omat reseptini</Text>
            {filteredRecipes.map((recipe, index) => (
                <View key={index}>
                    <TouchableOpacity onPress={() => handleRecipePress(recipe)}
                        onLongPress={() => onLongPress && onLongPress(recipe)}>
                        <View style={selectedTheme.DiscoverRow}>
                            <Image
                                source={require('../components/myrecipes.png')}
                                style={selectedTheme.MyRecipesImage}
                            />
                            <Text style={selectedTheme.DiscoverH3}>{recipe.name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}
