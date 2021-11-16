import React, { useState } from 'react';
import { Text, Image, StyleSheet, View, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function homme () {

    return(
    
        <KeyboardAvoidingView
        behavior='position'
        keyboardVerticalOffset={90}
        >

        <View style={{margin: 10}}>

             <View style={styles.card}>
                 <Image
                    source={require('../assets/perfil.png')}
                    style={{width: 220, height: 220, borderRadius: 120, marginRight: 12, alignItems: 'center', borderWidth: 3, borderColor: 'black' }}
                 />
            </View>
                <Text style={{alignSelf: 'center', fontSize: 40, marginTop: 5 }}>
                    jose sousa
                </Text>
                <Text style={{alignSelf: 'center', fontSize: 25, marginTop: 5 }}>
                    Objetivo:
                </Text> 
            
            <View style={styles.obj}>
                <Text>
                     Inicial:
                </Text>

                <Text>
                     Meta:
                </Text>
            </View>

            <View style={styles.teste}> 

                <TextInput style={styles.box} 
                />

                <TextInput style={styles.box}
                />

            </View>

         </View>
            
         <View styles={styles.viewbtn}>

            <TouchableOpacity style={styles.btn}>
                <Text style={{fontWeight: "bold"}}>
                    Dados dos exames
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text style={{fontWeight: "bold"}}>
                    Informação Nutricional
                </Text>
            </TouchableOpacity>

         </View>
         
         </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({

    card: {
        width: - 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    obj: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5
    },

    teste: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    box: {
        width: 100,
        height: 50,
        backgroundColor: '#dcdcdc',
        margin: 10,
        borderRadius: 50,
        textAlign: 'center',
        marginBottom: -10
    },

    btn: {
        borderColor: 'red',
        borderWidth: 2,
        width: '55%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 20,
    
    }
  
})