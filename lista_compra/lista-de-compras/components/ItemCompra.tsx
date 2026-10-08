import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import type { ItemDeCompra } from '../types';

type ItemCompraProps = {
  item: ItemDeCompra;
  aoRemover: (id: string) => void;
};

export default function ItemCompra({
  item,
  aoRemover,
}: ItemCompraProps) {
  return (
    <View style={estilos.cartao}>
      <View style={estilos.info}>
        <Text style={estilos.nome}>
          {item.nome}
        </Text>

        <Text style={estilos.quantidade}>
          Qtd: {item.quantidade}
        </Text>
      </View>

      <TouchableOpacity
        style={estilos.botaoRemover}
        onPress={() => aoRemover(item.id)}
        activeOpacity={0.7}
      >
        <Text style={estilos.botaoRemoverTexto}>
          ✕
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  info: {
    flex: 1,
  },

  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },

  quantidade: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },

  botaoRemover: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoRemoverTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DC2626',
  },
});