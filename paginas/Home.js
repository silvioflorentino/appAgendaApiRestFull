import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { visualizarTodosContatos } from './ContatoModel';

export default function Home({navigation}) {
const [dadosContatos, setDadosContatos] = useState([]);

  useEffect(async () => {
    const resp = await visualizarTodosContatos();
    setDadosContatos(resp);
  },[]);

  return (
    <View style={estilo.container}>
      <Text>Contatos</Text>

      <TouchableOpacity style={estilo.botaoCadastrar} onPress={()=>navigation.navigate('Cadastro')}>
        <Text style={estilo.botaoTextoCadastrar}>Cadastrar Contatos Agora</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <FlatList
        data={dadosContatos}
        keyExtractor={dadosContatos => dadosContatos.id}
        renderItem={({ item }) =>
            <View style={estilo.subtelas}>
            <Text style={estilo.botaoTextoDados}>{item.id}</Text>
            <Text style={estilo.botaoTextoDados}>{item.Nome}</Text>
            <Text style={estilo.botaoTextoDados}>{item.Fone}</Text>
            <Text style={estilo.botaoTextoDados}>{item.Email}</Text>
            </View>
        }
      />

    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCadastrar:{
    backgroundColor: '#2a9d8f',
    margin: 15,
    padding: 5,
    borderRadius: 10,
  },
  botaoTextoCadastrar:{
    fontSize:20
  },
  botaoDados:{
    backgroundColor: '#2a9d8f',
    margin: 15,
    padding: 5,
    borderRadius: 10,
  },
  botaoTextoDados:{
    fontSize:20
  },
  subtelas:{
    backgroundColor:"#2d9d8f"
  }
});
