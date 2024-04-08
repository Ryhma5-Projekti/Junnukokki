import React from "react"
import { Text, TextInput } from "react-native"

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
                        style={{ ...epicStyle, ...item.specialStyle }} />
                </React.Fragment>
            ))}
        </>
    )
}

/**
 * @todo Implement proper default styles
 */
const epicStyle = {
    borderWidth: 2
}
