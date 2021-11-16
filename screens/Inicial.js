import React from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { Popup, Root } from 'popup-ui';
import { css } from './css';

export default function Inicial({ navigation }){
    return(

        <Root style={styles.container}>

            
            <TouchableOpacity style={styles.card} onPress={ () => navigation.navigate ('Perfil')}>
                <Image
                source={require('../assets/perfil.png')}
                style={{width: 110, height: 110, borderRadius: 120, marginRight: 12, alignItems: 'center', borderWidth: 3, borderColor: 'black' }}
                />        
            </TouchableOpacity>
            

            <View>
                <Text style={styles.ficha}>
                    Ficha de Treino
                </Text>
            </View>

            <View style={{marginTop: 30, alignItems: 'center'}}>
                <TouchableOpacity style={styles.treino} onPress={ () => navigation.navigate ('Treino')}>
                    <Text style={{ fontSize: 30}}> Treino A </Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 30, alignItems: 'center'}}>
                <TouchableOpacity style={styles.treino}>
                    <Text style={{ fontSize: 30}}> Treino B </Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 30, alignItems: 'center'}}>
                <TouchableOpacity style={styles.treino}>
                    <Text style={{ fontSize: 30}}> Treino C </Text>
                </TouchableOpacity>
            
            </View>

                <TouchableOpacity style={styles.card1}
                    onPress={() =>
                        Popup.show({
                          type: 'Success',
                          title: 'Fale Conosco',
                          textBody: 'Contato:',
                          buttontext: 'Ok',
                          callback: () => Popup.hide()
                         
                        })
                      }
                    
                  >
                       <Image
                source={require('../assets/ajuda.png')}
                style={{width: 70, height: 70, borderRadius: 120, marginRight: 12, alignItems: 'center', borderWidth: 3, borderColor: 'black' }}
                /> 
                      
                </TouchableOpacity>
                
        </Root>

            
    )

}

const styles = StyleSheet.create({

    card: {
        alignItems: 'center',
        marginLeft: 230,
        marginTop: 15

    },
    card1: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 30,
    },

    ficha: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 15
    
    },
    treino: {
        backgroundColor: 'red',
        width: '75%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    }
    
})