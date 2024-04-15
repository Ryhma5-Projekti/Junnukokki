import React, { useState } from 'react';
import { Modal, Text, View, Pressable } from 'react-native';
import Styles from '../styles/Styles';

export default RemoveRecipeModal = ({ toggleModal, modalVisible, recipe }) => {

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
                    onPress={toggleModal}>
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
