import React, { useEffect } from 'react';
import { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, PermissionsAndroid, ToastAndroid, Text, Button, TextInputChangeEventData, NativeSyntheticEvent } from "react-native";
import { View, Image, StyleSheet, Alert } from "react-native";
import { Drink } from "types/Drink";
import CustomCamera from "../components/CustomCamera";
import { permissionsGranted } from '../utils/permissionsHelper';
import { HeaderConfigProps } from 'types/HeaderConfigProps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createDrink } from "../redux/actions/actions";

type IncomingProps = {
    addDrink: (drink: Drink) => void;
    navigation: any;
    createDrink: (drink: Drink) => void;
};

const AddDrinkScreen = (props: IncomingProps) => {
    const [name, setName] = useState<string>('');
    const [uri, setUri] = useState<string>('');
    const [ingredients, setIngredients] = useState<string>('');
    const [instructions, setInstructions] = useState<string>('');
    const [cameraOn, setCameraOn] = useState<boolean>(false);
    const [granted, setGranted] = useState<boolean>(false);

    const saveToState = () => {
        try {
            props.createDrink({
                idDrink: "",
                strDrink: name,
                strDrinkThumb: uri,
                ingredients: ingredients.split(','),
                instructions: instructions
            })
            ToastAndroid.show("Drink Added Successfully", ToastAndroid.LONG);
            props.navigation.navigate("Drinks");
        } catch (error) {
            ToastAndroid.show(`${error}`, ToastAndroid.LONG);
        }
    }

    const getImg = (uri: string) => {
        setUri(uri);
        toggleCamera();
    }

    const toggleCamera = () => {
        setCameraOn(!cameraOn);
    }

    const getPermissions = async () => {
        const permissions = await PermissionsAndroid.requestMultiple(
            [
                "android.permission.WRITE_EXTERNAL_STORAGE",
                "android.permission.READ_EXTERNAL_STORAGE"
            ]
        );
        return permissionsGranted(permissions);
    }

    useEffect(() => {
        getPermissions().then(data => {
            setGranted(data)
        });
    }, [])

    useEffect(() => {
        props.navigation.setParams({ saveToState })
    }, [name, ingredients, instructions, uri]);

    return (
        <ScrollView>
            <View>
                {granted && (<View style={styles.cameraWrapper}>
                    {!cameraOn && (
                        <TouchableOpacity onPress={toggleCamera} style={styles.imageContainer} >
                            <Image
                                source={{ uri: uri, height: 200, width: 200 }}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    )}
                    {cameraOn && (
                        <View style={styles.imageContainer}>
                            <CustomCamera
                                setUri={getImg}
                                disableCamera={toggleCamera}
                            />
                        </View>
                    )}
                </View>)}
                {!granted && (
                    <View>
                        <Text>No Permissions Granted = No Camera = Default Img</Text>
                    </View>
                )}
                <View>
                    {/* Name */}
                    <TextInput
                        placeholder={'Drink Name:'}
                        onChangeText={(text: string) => setName(text)} />
                    {/* Ingredients */}
                    <TextInput
                        placeholder={'List ingredients separated by ,'}
                        onChangeText={(text: string) => setIngredients(text)}
                    />
                    {/* Instructions */}
                    <TextInput
                        placeholder={'Instructions:'}
                        onChangeText={(text: string) => setInstructions(text)}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

AddDrinkScreen.navigationOptions = (headerProps: HeaderConfigProps) => {
    return (
        {
            headerRight: () =>
                (<Button
                    onPress={() => headerProps.navigation.getParam('saveToState')()}
                    title="Save"
                />)
        }
    );
}

const styles = StyleSheet.create({
    cameraWrapper: {
        height: 300
    },
    imageContainer: {
        height: '70%',
        width: 330,
        margin: 10,
        borderColor: 'red',
        borderRadius: 5,
        marginBottom: 20
    },
    image: {
        height: 'auto',
        width: 'auto',
    }
})

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        createDrink
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddDrinkScreen);