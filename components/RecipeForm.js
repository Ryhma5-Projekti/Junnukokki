import React, { useState } from "react"
import { View, Text, TextInput } from "react-native"

/**
 * 
 * Constructs a recipe form based on schema. 
 * @see {@link RecipeSchema.json}
 * @param {Object} props.schema
 */
export default RecipeForm = ({ schema, inputChange }) => {

    return (
        <>
            {Object.entries(schema).map(([key, item], index) => (
                <React.Fragment key={index}>
                    <Text>{item.label}:</Text>
                    <TextInput value={item.value}
                        onChangeText={text => inputChange(key, text)}
                        multiline={item.multiline}
                        style={
                            Object.keys(item.specialStyle).length > 0 ? item.specialStyle :
                                { borderWidth: 2, borderColor: 'red' }
                        } />
                </React.Fragment>
            ))}
        </>
    )
}
