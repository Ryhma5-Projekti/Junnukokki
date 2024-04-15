import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../styles/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const OpenTips = ({ route }) => {
    const { discover } = route.params;

    // Yliviivaa ainesosat ja ohjeet, kun niitä painetaan
    // Tekee uuden taulukon vertailuun, true = yliviivattu
    const [crossOutInstructions, setcrossOutInstructions] = useState(new Array(discover.instructions.length).fill(false));

    const toggleInstruction = (index) => {
        const newcrossOutInstructions = [...crossOutInstructions];
        newcrossOutInstructions[index] = !newcrossOutInstructions[index];
        setcrossOutInstructions(newcrossOutInstructions);
    };

    // Kuva placeholderina
    return (
        <ScrollView>
            <View style={Styles.containerFullWidth}>

                <Image source={{ uri: discover.image }} style={Styles.RecipeImage} />


                <View style={Styles.containerRecipe}>
                    <Text style={Styles.h1}>{discover.title}</Text>


                    <View style={Styles.hr} />

                    <Text style={Styles.RecipeH2}>
                        <FontAwesome5 name="carrot" style={Styles.RecipeIcon} />
                        &nbsp;&nbsp; Ohjeet</Text>


                        <View style={{marginHorizontal: 10}}>
                    </View>
                    
                    <View style={Styles.RecipeInstruction}>
                        {discover.instructions.map((instruction, index) => (
                            <TouchableOpacity key={index} onPress={() => toggleInstruction(index)}>
                                <View style={Styles.RecipeInstRow}>
                                    <View style={Styles.numberContainer}>
                                        <Text style={Styles.RecipeH3}>{index + 1 + "."}</Text>
                                </View>
                                <View style={Styles.textContainer}>
                                    <Text style={[Styles.txt, { textDecorationLine: crossOutInstructions[index] ? 'line-through' : 'none' }]}>
                                        <Text>{instruction}</Text></Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}</View>
            </View>
        </View>
        </ScrollView >
    );
}


export default OpenTips;

