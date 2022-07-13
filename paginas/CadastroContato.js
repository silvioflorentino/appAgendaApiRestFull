import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { visualizarTodosContatos } from './ContatoModel';


export default function CadastroContato({navigation}) {

    return (
        <View style={estilo.container}>
            <TextInput style={estilo.campoTexto}
                placeholder='Digite o código do Contato'
            />
            <TextInput style={estilo.campoTexto}
                placeholder='Digite o nome do Contato'
            />

            <TextInput style={estilo.campoTexto}
                placeholder='Digite o fone do Contato'
            />
            <TextInput style={estilo.campoTexto}
                placeholder='Digite o e-mail do Contato'
            />

            <TouchableOpacity style={estilo.botao}>
                <Text style={estilo.textoBotao}>Salvar o Contato</Text>
            </TouchableOpacity>

        </View>
    );

}

const estilo = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#dcdcdc",
        alignItems:'center',
        justifyContent:'center'
    },
    campoTexto:{
        backgroundColor:"#2f4f4f",

    },
    botao:{
        backgroundColor:"#000080",
    },
    textoBotao:{
        fontSize:20
    }
});