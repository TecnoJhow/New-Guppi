import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, KeyboardAvoidingViewBase } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


    const onDone = () => {
        setshowReal
    }


    const Slider = [

        {
            key: '1',
            image: require('../assets/1.png'),
            title: 'Puxada com barra no Pulley',
        },  
        {
            key: '2',
            image: require('../assets/2.png'),
            title: 'Puxada Triangulo Pulley'
        },
        {
            key: '3',
            image: require('../assets/3.png'),
            title: 'Remada Baixa'
            
        }

    ];

    function renderSlider({item}) {
        return(
        
        <KeyboardAvoidingView 
            behavior='position'
            keyboardVerticalOffset={90}
            styles={styles.container}>
          
            <View>

            <Text style={styles.title}>{item.title}</Text>

             <Image
             source={item.image}
             style={{
                 
                 width: '100%',
                 height: '60%',
                 
                 marginBottom: 30
             }}
             
             />


             <View style={styles.serie}>

                    <Text>
                    Carga:
                    </Text>
                    <TextInput style={styles.box1} 
                    />

                    <Text>
                    Serie:
                    </Text>
                    <TextInput style={styles.box2} 
                    />
                </View>
            </View>  

         </KeyboardAvoidingView>   
        )
    }


    export default function Treino ({navigation}) {

        return (
           <AppIntroSlider
            renderItem={renderSlider}
            data={Slider}
            renderNextButton={ () => <Text style={{
            alignSelf: 'center', 
            color: 'green', 
            fontSize: 15

        }}>PROXIMO</Text>}
            renderDoneButton={ () => <Text style={{
                alignSelf: 'center', 
                color: 'green', 
                fontSize: 15
            }} onPress={ () => navigation.navigate ('Inicial')}>CONCLUIR</Text>}
            bottomButton
           />
       
        );
    }

    const styles = StyleSheet.create({

        box1: {
            width: 50,
            height: 70,
            backgroundColor: '#dcdcdc',
            margin: 10,
            textAlign: 'center'
        },
    
        box2: {
            width: 110,
            height: 60,
            backgroundColor: '#dcdcdc',
            margin: 10,
            borderRadius: 50,
            textAlign: 'center'
        },
      
        serie: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 50


        },

        title: {
            fontSize: 26,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            borderWidth: 7,
            borderColor: 'white',
            backgroundColor: 'white',
            marginTop: 15
            
    
        }

    })
