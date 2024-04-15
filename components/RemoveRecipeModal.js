import React, { useState, useEffect } from 'react';
import { Modal, Text, View, Pressable } from 'react-native';
import Styles from '../styles/Styles';
import { generateSHA256, removeData } from '../util/LocalStorageUtil';
import { useForceUpdate } from '../hooks/ForceUpdateProvider';

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

    const { setForceUpdate } = useForceUpdate();
    const removeRecipe = async () => {
        await removeData(generateSHA256(recipe))
        shutdownCountdown()
        setForceUpdate(prevState => !prevState);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
        >
            <View style={Styles.DimmingCover}>
                <View style={Styles.Modal}>
                    <Text style={Styles.h2}>
                        Halutako poistaa reseptin{' '}
                        '{recipe && <Text style={{ fontStyle: 'italic' }}>{recipe.name}</Text>}'
                        {' '}pysyvästi?
                    </Text>

                    <View style={{flexDirection: 'row'}}>
                        <Pressable style={[Styles.buttonDelete, Styles.SideBySideButton]}
                            onPress={removeRecipe}>
                            <Text style={Styles.buttonTextDelete}>Poista Resepti</Text>
                        </Pressable>

                        <Pressable style={[Styles.buttonAdd, Styles.SideBySideButton]}
                            onPress={toggleModal}>
                            <Text style={Styles.buttonText}>Peruuta</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        </Modal>
    )
}
