import { TextInput } from 'react-native';
import { useTheme } from '../styles/ThemeContext'; 

export default RecipeSearch = ({ setSearchQuery, searchQuery }) => {
    const { selectedTheme } = useTheme(); 

    return (
        <>
            <TextInput
                style={selectedTheme.searchBar}
                placeholderTextColor={selectedTheme.searchBarPlaceholder.color}
                placeholder='Etsi reseptejä...'
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
            />
        </>
    )
}
