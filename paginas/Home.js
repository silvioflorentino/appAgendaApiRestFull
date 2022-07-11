import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { visualizarTodosContatos } from './ContatoModel';

export default function Home() {
  const [dadosContatos, setDadosContatos] = useState([]);

  async function buscarContatos() {

    const resultado = await visualizarTodosContatos();
    if (resultado) {
      setDadosContatos(resultado);
    } else {
      Alert.alert('Sem contatos');
      setDadosContatos('');
    }
  }

  useEffect(async () => {
    const resp = await buscarContatos();
    setDadosContatos(resp);
  }, []);


  return (
    <View style={styles.container}>
      <Text>Contatos</Text>

      <TouchableOpacity style={estilo.botaoCadastrar}>
        <text style={estilo.botaoTextoCadastrar}>Cadastrar Contatos</text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <FlatList
        data={dadosContatos}
        keyExtractor={dadosContatos => dadosContatos.id}
        renderItem={({ item }) =>
          <TouchableOpacity style={estilo.botaoDados} >
            <Text style={estilo.botaoTextoDados}>{item.id}</Text>
            <Text style={estilo.botaoTextoDados}>{item.nome}</Text>
            <Text style={estilo.botaoTextoDados}>{item.fone}</Text>
            <Text style={estilo.botaoTextoDados}>{item.email}</Text>
          </TouchableOpacity>
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
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
  }
});
