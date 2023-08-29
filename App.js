import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableHighlight, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableHighlight style={styles.item}>
      <Text>{item.name}</Text>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exemplo de Componentes</Text>
      <Image
        source={require('./assets/test.gif')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Clique-me" onPress={() => alert('Botão clicado!')} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default App;
