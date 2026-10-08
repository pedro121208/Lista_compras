# 🛒 Lista de Compras

<div align="center">

# 🛍️ Lista de Compras

### Aplicativo Mobile desenvolvido com React Native, Expo e TypeScript

<br>

![React Native](https://img.shields.io/badge/React%20Native-2026-blue?style=for-the-badge&logo=react)
![Expo](https://img.shields.io/badge/Expo-57-black?style=for-the-badge&logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)

<br>

**Projeto desenvolvido durante uma atividade prática de desenvolvimento mobile.**

</div>

---

## 📱 Sobre o projeto

O **Lista de Compras** é um aplicativo mobile desenvolvido utilizando **React Native**, **Expo** e **TypeScript**.

A proposta da atividade foi construir uma aplicação desde o início, organizando o projeto em componentes reutilizáveis e utilizando conceitos importantes do desenvolvimento de aplicações mobile.

O aplicativo permite:

- 📝 Visualizar itens de uma lista de compras;
- ➕ Adicionar novos produtos;
- 🔢 Informar a quantidade de cada produto;
- ❌ Remover produtos da lista;
- ⚠️ Validar o preenchimento dos campos;
- 📊 Exibir a quantidade de itens cadastrados;
- 📱 Executar o aplicativo diretamente no celular através do Expo Go.

---

## 🎯 Objetivo da atividade

O principal objetivo foi colocar em prática conceitos fundamentais do **React Native com TypeScript**, trabalhando com:

- Componentização;
- `useState`;
- Tipagem com TypeScript;
- `Props`;
- Formulários;
- Validação de dados;
- `FlatList`;
- Eventos de toque;
- Organização de arquivos;
- Estrutura de um projeto Expo.

A atividade também trabalha a separação das responsabilidades da aplicação em diferentes componentes.

---

## 🚀 Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| ⚛️ React Native | Desenvolvimento da interface mobile |
| 📦 Expo | Execução e gerenciamento do projeto |
| 🔷 TypeScript | Tipagem e organização do código |
| 📱 Expo Go | Teste do aplicativo no celular |
| 🧩 Components | Organização da interface |
| 📋 FlatList | Exibição dos itens da lista |

---

## 📂 Estrutura do projeto

```text
lista-de-compras/
│
├── components/
│   ├── Cabecalho.tsx
│   ├── FormularioItem.tsx
│   ├── ItemCompra.tsx
│   └── ListaCompras.tsx
│
├── App.tsx
├── index.tsx
├── types.ts
├── package.json
├── app.json
├── babel.config.js
└── tsconfig.json
```

A estrutura segue a organização proposta no roteiro, separando os componentes responsáveis pelo cabeçalho, formulário, item individual e lista de compras.

---

## 🧩 Componentes

### 🏷️ `Cabecalho.tsx`

Responsável pela parte superior da aplicação, apresentando o título:

```text
🛒 Minha Lista de Compras
```

Ele é importado no `App.tsx` e utilizado dentro do `SafeAreaView`.

---

### 📝 `FormularioItem.tsx`

Responsável por permitir que o usuário cadastre novos produtos.

O formulário possui:

- Nome do produto;
- Quantidade;
- Botão para adicionar;
- Validação dos dados.

Caso o nome não seja informado, o aplicativo apresenta uma mensagem de alerta. A quantidade vazia pode assumir o valor padrão de `1`.

---

### 🛍️ `ItemCompra.tsx`

Representa cada produto individualmente dentro da lista.

Cada item apresenta:

- Nome;
- Quantidade;
- Botão para remover o produto.

O componente utiliza `TouchableOpacity` para permitir a interação do usuário.

---

### 📋 `ListaCompras.tsx`

Responsável por exibir todos os produtos cadastrados.

Para isso, é utilizado o componente:

```tsx
<FlatList />
```

Também existe uma mensagem específica para quando a lista estiver vazia.

---

## 🔷 TypeScript

O projeto utiliza uma interface para definir o formato de cada item:

```tsx
export interface ItemDeCompra {
  id: string;
  nome: string;
  quantidade: number;
}
```

Isso permite que o TypeScript saiba exatamente quais informações cada item da lista deve possuir.

---

## ⚛️ Gerenciamento de estado

O projeto utiliza o `useState` para controlar os itens da lista.

Exemplo:

```tsx
const [itens, setItens] = useState<ItemDeCompra[]>([]);
```

Dessa forma, quando um produto é adicionado ou removido, a interface pode ser atualizada automaticamente.

---

## 🔄 Funcionamento

O funcionamento principal da aplicação segue este fluxo:

```text
                 🛒
          Lista de Compras
                 │
                 ▼
          📝 Formulário
                 │
                 ▼
          Nome + Quantidade
                 │
                 ▼
            ➕ Adicionar
                 │
                 ▼
          📋 Lista de Itens
             │         │
             │         │
             ▼         ▼
          🛍️ Item    ❌ Remover
             │
             ▼
          Lista atualizada
```

---

## 🧪 Testes realizados

Durante a atividade, foram realizados testes para verificar o funcionamento da aplicação.

### ✅ Teste 1 — Tela inicial

Verificar se os itens iniciais são exibidos corretamente.

### ✅ Teste 2 — Adicionar item

Informar o nome e a quantidade e verificar se o novo produto aparece na lista.

### ✅ Teste 3 — Nome vazio

Tentar adicionar um produto sem informar o nome e verificar a mensagem de validação.

### ✅ Teste 4 — Quantidade vazia

Adicionar um produto sem informar a quantidade e verificar se o valor padrão é `1`.

### ✅ Teste 5 — Remover item

Pressionar o botão de remoção e verificar se o produto desaparece da lista.

### ✅ Teste 6 — Lista vazia

Remover todos os produtos e verificar se a mensagem de lista vazia é exibida.

Esses testes fazem parte da etapa final proposta no roteiro.

---

## ▶️ Como executar o projeto

### 1. Instalar as dependências

No terminal:

```bash
npm install
```

### 2. Iniciar o Expo

```bash
npx expo start
```

### 3. Executar no celular

Com o **Expo Go** instalado:

1. Conecte o celular e o computador à mesma rede Wi-Fi;
2. Execute `npx expo start`;
3. Escaneie o QR Code exibido no terminal ou no navegador;
4. O aplicativo será aberto no celular.

---

## 🔍 Verificação do TypeScript

Para verificar se existem erros de tipagem no projeto:

```bash
npm run typecheck
```

Caso esse script não esteja configurado, também é possível utilizar:

```bash
npx tsc --noEmit
```

O roteiro utiliza essa etapa para verificar se o código está corretamente tipado.

---

## 📚 Conceitos aprendidos

Durante o desenvolvimento foram praticados:

- ⚛️ Componentes React Native;
- 🔷 TypeScript;
- 🧠 `useState`;
- 📦 Props;
- 📝 Formulários;
- ⚠️ Validação;
- 📋 `FlatList`;
- 👆 `TouchableOpacity`;
- 🚨 `Alert`;
- 📱 `SafeAreaView`;
- 📊 Organização de estado;
- 🗂️ Organização de pastas;
- 🔄 Comunicação entre componentes.

---

## 💡 O que eu aprendi

Com esta atividade, foi possível entender melhor como criar uma aplicação mobile utilizando React Native e Expo, além de aprender como dividir uma aplicação em componentes menores e mais organizados.

Também foi possível praticar TypeScript, gerenciamento de estado, propriedades, formulários, listas e validação de informações.

---

## 👨‍💻 Desenvolvedor

<div align="center">

### Pedro Henrique Gonzaga Castro

🎓 Estudante de Desenvolvimento de Sistemas

<br>

**Desenvolvimento Mobile • React Native • Expo • TypeScript**

</div>

---

<div align="center">

### 🛒 Lista de Compras

**Um projeto simples para praticar desenvolvimento mobile na prática.**

⭐ Desenvolvido para fins educacionais.

</div>
