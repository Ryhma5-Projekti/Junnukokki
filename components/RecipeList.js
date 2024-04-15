import { Text, View, TouchableOpacity, Image } from 'react-native';
import Styles from '../styles/Styles';

export default RecipeList = ({ filteredRecipes, handleRecipePress }) => {

    return (
        <>
            {filteredRecipes.map((recipe, index) => (
                <View key={index} style={Styles.container}>
                    <TouchableOpacity onPress={() => handleRecipePress(recipe)}>
                        <View>
                            <Text style={Styles.DiscoverH3}>{recipe.name}</Text>
                            <View style={Styles.DiscoverRow}>
                                <View style={Styles.DiscoverItem}>
                                    <Image
                                        source={require('../components/img.jpeg')}
                                        style={Styles.DiscoverImage}
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </>
    )
}