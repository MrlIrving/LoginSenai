import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons/';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const cadastroFunction = async () => {
        try {
            await AsyncStorage.setItem('username', username);
            await AsyncStorage.setItem('password', password);
            navigation.navigate('entrada');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <TouchableOpacity onPress={() => navigation.navigate('entrada')}>
                            <Ionicons size={30} color={"#fff"} name="arrow-back-outline" />
                        </TouchableOpacity>
                        <Text style={styles.message}>Cadastre-se</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>E-mail</Text>
                        <TextInput
                            placeholder='Digite seu e-mail...'
                            style={styles.input}
                            value={username}
                            onChangeText={setUsername}
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />
                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            placeholder='Digite sua senha...'
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <TouchableOpacity style={styles.button} onPress={cadastroFunction}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#880000',
        justifyContent: 'center',
    },
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '5%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF",
        marginLeft: 10, // Espaço entre o ícone e o texto
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: '#880000', // Adicionado cor ao título
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#880000', // Adicionado cor à borda
        height: 40,
        marginBottom: 20,
        fontSize: 16,
        paddingHorizontal: 10, // Adicionado padding
        borderRadius: 4, // Adiciona bordas arredondadas
        backgroundColor: '#f2f2f2', // Adiciona uma cor de fundo leve
    },
    button: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 50, // Bordas mais arredondadas
        paddingVertical: 12,
        marginTop: 20, // Espaço maior acima do botão
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
    },
});