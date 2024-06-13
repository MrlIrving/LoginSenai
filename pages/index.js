import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';

export default function BemVindo() {
    useFonts({ 'Oswald': require('../assets/fonts/Oswald-VariableFont_wght.ttf') });
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    delay={1000}
                    animation="flipInY"
                    source={require("../assets/logo_Senai.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>
                    Monitore e organize seus recursos didáticos de qualquer lugar!
                </Text>
                <Text style={styles.text}>
                    Faça o login para começar
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('entrada')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Acessar
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF', // Cor alterada
        alignItems: 'center', // Centraliza o conteúdo
        justifyContent: 'center', // Centraliza o conteúdo
    },
    containerLogo: {
        flex: 3,
        backgroundColor: '#FFFFFF', // Cor alterada
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Largura completa
        borderBottomLeftRadius: 80, // Bordas arredondadas
        borderBottomRightRadius: 80, // Bordas arredondadas
    },
    logo: {
        width: "30%", // Valor ajustado
        height: "30%", // Valor ajustado
    },
    containerForm: {
        flex: 2,
        backgroundColor: '#B22222',
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        paddingHorizontal: '10%',
        paddingVertical: '5%',
        alignItems: 'center', // Centraliza o conteúdo
    },
    title: {
        fontFamily: 'Oswald', // Usa a fonte carregada
        fontSize: 24,
        marginVertical: 20,
        color: "#FFFFFF",
        textAlign: 'center', // Centraliza o texto
    },
    text: {
        color: '#FFFFFF', // Deixa o texto branco
        fontSize: 16, // Aumenta o tamanho do texto
        marginBottom: 20, // Espaço abaixo do texto
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        paddingVertical: 15, // Valor ajustado
        width: '70%', // Valor ajustado
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#B22222',
        fontWeight: 'bold',
    },
});
