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
            {Object.keys(schema).map((field, index) => (
                <React.Fragment key={index}>
                    <Text>{field}:</Text>
                    <TextInput value={schema[field]}
                        onChangeText={text => inputChange(field, text)} />
                </React.Fragment>
            ))}
        </>
    )
}
