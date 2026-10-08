import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

type FormularioItemProps = {
  aoAdicionar: (nome: string, quantidade: number) => void;
};

export default function FormularioItem({
  aoAdicionar,
}: FormularioItemProps) {
  const [nome, setNome] = useState<string>('');
  const [quantidade, setQuantidade] = useState<string>('');

  function lidarComAdicao(): void {
    if (nome.trim() === '') {
      Alert.alert(
        'Atenção',
        'Digite o nome do produto.'
      );

      return;
    }

    const qtd = parseInt(quantidade, 10) || 1;

    aoAdicionar(nome.trim(), qtd);

    setNome('');
    setQuantidade('');
  }

  return (
    <View style={estilos.cartao}>
      <Text style={estilos.rotulo}>
        Novo produto
      </Text>

      <TextInput
        style={estilos.campo}
        placeholder="Ex.: Arroz, feijão, leite..."
        placeholderTextColor="#9CA3AF"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={estilos.campoQuantidade}
        placeholder="Qtd"
        placeholderTextColor="#9CA3AF"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        maxLength={3}
      />

      <View style={estilos.areaBotao}>
        <Button
          title="Adicionar item"
          color="#4F46E5"
          onPress={lidarComAdicao}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 8,
    padding: 16,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  rotulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 10,
  },

  campo: {
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1F2937',
    marginBottom: 10,
  },

  campoQuantidade: {
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1F2937',
    width: 90,
    marginBottom: 14,
  },

  areaBotao: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});