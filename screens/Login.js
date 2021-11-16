import { useLinkProps } from '@react-navigation/native';
import React, {useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { css } from './css';

export default function Login({ navigation }) {
    
    const [display, setDisplay] = useState('none');

    function onPressButtonLogin() {
        navigation.navigate("Inicial");
        setDisplay('flex');
    }

    return (
        <KeyboardAvoidingView 
            style={[css.container, css.darkbg]}
        >
            <View>
                <Image
                    style={css.logo}
                    source={require('../assets/logo.png')}
                />
            </View>


            <View style={css.login__form}>
                <TextInput
                    style={css.login__input} 
                    placeholder='Usuário:' 
                />
                <TextInput 
                    style={css.login__input}
                    placeholder='Senha'
                    secureTextEntry={true}
                />
                <TouchableOpacity
                style={css.login__button} 
                onPress={() => onPressButtonLogin()}
                >
                    <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}