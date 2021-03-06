import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
//import PrevisaoItem from './PrevisaoItem';
import PrevisaoItem from './componentes/PrevisaoItem';

export default function App() {
  const endPoint = "https://api.openweathermap.org/data/2.5/weather?lang=pt&units=metric&q=";
  const apiKey = "8bdaa17afb1378f73fed1d24680d924b";

  const obterPrevisoes = () => {
    setPrevisoes([]);
    const target = endPoint + cidade + '&appid=' + apiKey;
   
    fetch(target)
      .then(
          (response) => response.json())
          .then((response) => { setPrevisoes([response] )
            
          }
      );
}

  const [cidade, setCidade] = useState('');
  const [previsoes, setPrevisoes] = useState([]);
  const capturarCidade = (cidade) => {
    setCidade(cidade)
  }
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          onChangeText={capturarCidade}
        />
        <Button
          title="OK"
          onPress={obterPrevisoes}
        />
      </View>
      <FlatList
        data={previsoes}
        renderItem={
          previsao => <PrevisaoItem previsao={previsao.item}></PrevisaoItem>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  entrada: {
    flexDirection: 'column'
  },
  nomeCidade: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    marginBottom: 4,
    fontSize: 18
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 40
  }
});