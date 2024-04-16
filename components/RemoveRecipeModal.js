import React, { useState, useEffect, useRef } from 'react';
import { Modal, Text, View, Pressable, Animated } from 'react-native';
import Styles from '../styles/Styles';
import { generateSHA256, removeData } from '../util/LocalStorageUtil';
import { useForceUpdate } from '../hooks/ForceUpdateProvider';


export default RemoveRecipeModal = ({ toggleModal, modalVisible, recipe }) => {
    const [removalImminent, setRemovalImminent] = useState(false);
    const [cancelRemoval, setCancelRemoval] = useState(false)
    useEffect(() => {
        setRemovalImminent(false)
        setCancelRemoval(false)
    }, [modalVisible])

    const CD_INITIAL = -2, CD_SHUTDOWN = -1, CD_TRIGGER = 0
    const [countdown, setCountdown] = useState(CD_INITIAL)
    const startCountdown = () => {
        if (!removalImminent) {
            setRemovalImminent(true)
            startScaleAnimation()
            setCountdown(3)
        } else if (countdown > CD_TRIGGER) {
            setRemovalImminent(false)
            setCountdown(CD_INITIAL)
        }
    }
    useEffect(() => {
        let timer = null

        if (countdown > CD_INITIAL) {
            timer = setInterval(() => {
                setCountdown((prevCount) => prevCount - 1)
            }, 1000)
        }

        if (countdown == CD_TRIGGER) {
            removeRecipe()
            startAnimation()
        }

        if (countdown == CD_SHUTDOWN) {
            toggleModal({ forceState: false })
        }

        return () => {
            clearInterval(timer)
        }
    }, [countdown])

    const { setForceUpdate } = useForceUpdate();
    const removeRecipe = async () => {
        await removeData(generateSHA256(recipe))
        setForceUpdate(prevState => !prevState);
    }

    const translateY = useRef(new Animated.Value(0)).current;
    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(translateY, {
                toValue: -10,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 10,
                duration: 150,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }),
        ]).start();
    };
    const scaleValue = useRef(new Animated.Value(1)).current;
    const startScaleAnimation = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 0.95,
                duration: 50,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
        >
            <View style={Styles.DimmingCover}>
                <Animated.View style={[Styles.Modal,
                { transform: [{ translateY }, { scale: scaleValue }] }]}>

                    <Text style={Styles.h2}>
                        Halutako poistaa reseptin{' '}
                        '{recipe && <Text style={{ fontStyle: 'italic' }}>{recipe.name}</Text>}'
                        {' '}pysyvästi?
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Pressable style={[Styles.buttonDelete, Styles.SideBySideButton]}
                            onPress={startCountdown}>
                            <Text style={Styles.buttonTextDelete}>
                                {countdown == CD_INITIAL ? 'Poista' :
                                    countdown != CD_TRIGGER ? `Kumoa (${countdown})` : "Poistettu!"}
                            </Text>
                        </Pressable>

                        <Pressable style={[Styles.buttonAdd, Styles.SideBySideButton]}
                            onPress={toggleModal}>
                            <Text style={Styles.buttonText}>Peruuta</Text>
                        </Pressable>
                    </View>

                </Animated.View>
            </View>

        </Modal>
    )
}
