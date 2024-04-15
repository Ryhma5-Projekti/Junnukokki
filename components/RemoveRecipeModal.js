import React, { useState, useEffect } from 'react';
import { Modal, Text, View, Pressable } from 'react-native';
import Styles from '../styles/Styles';
import { removeData } from '../util/LocalStorageUtil';

export default RemoveRecipeModal = ({ toggleModal, modalVisible, recipe }) => {
    const [shutdownInitiated, setShutdownInitiated] = useState(false);
    useEffect(() => {
        setShutdownInitiated(false)
    }, [modalVisible])

    const shutdownCountdown = () => {
        if (!shutdownInitiated) {
            setShutdownInitiated(true)
            setTimeout(() => {
                toggleModal({ forceState: false })
            }, 3000)
        }
    }

    const removeRecipe = async () => {
        await removeData(JSON.stringify(recipe))
        shutdownCountdown()
    }

    return (
        <Modal
            style={{ marginTop: 22 } + Styles.containerFullWidth}
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
        >
            <View style={{ marginTop: 22, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <Text style={Styles.h2}>
                    Halutako poistaa reseptin '{recipe && recipe.name}' pysyvästi?
                </Text>

                <Pressable style={Styles.buttonDelete}
                    onPress={removeRecipe}>
                    <Text style={Styles.buttonTextDelete}>Poista Resepti</Text>
                </Pressable>

                <Pressable style={Styles.buttonAdd}
                    onPress={toggleModal}>
                    <Text style={Styles.buttonText}>Peruuta</Text>
                </Pressable>
            </View>
        </Modal>
    )
}
