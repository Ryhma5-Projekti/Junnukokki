import { Text, View, TouchableOpacity, Image } from 'react-native';
import Styles from '../styles/Styles';

export default RecipeList = ({ filteredRecipes, handleRecipePress }) => {

    return (
        <View style={Styles.vali}>
            <Text style={Styles.h1}>Omat reseptini</Text>
            {filteredRecipes.map((recipe, index) => (
                <View key={index}>
                    <TouchableOpacity onPress={() => handleRecipePress(recipe)}>
                        <View>
                            <View style={Styles.DiscoverRow}>
                                    <Image
                                        source={require('../components/myrecipes.png')}
                                        style={Styles.MyRecipesImage}
                                    />
                                    <Text style={Styles.DiscoverH3}>{recipe.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}