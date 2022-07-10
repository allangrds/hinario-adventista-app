# Hinário Adventista App

## Conteúdo

- [Obrigatoriedades](#obrigatoriedades)
- [Como instalar](#como-instalar)
- [Usando](#usando)
- [Comandos](#comandos)
- [Estrutura de pastas](#estrutura-de-pastas)

## Obrigatoriedades

- Node 16.14.2(usando o Volta ele será instalado automaticanete ao rodar `yarn`)
- Yarn 1.22.18

## Como instalar

1. Execute `yarn` para instalar as dependências

## Usando

1. Execute `yarn start` para abrir o servidor do expo e escolher sua plataforma(iOS/Android)

## Comandos

- `start`: abre um servidor do expo
- `format`: formata o código usando Prettier
- `typecheck`: faz a checagem de tipos
- `clean`: remove a pasta `node_modules`

## Estrutura de pastas

```
src/
├
├─ assets/
├
├─ components/
├
├─ constant/
├
├─ enum/
├
├─ screen/
├
```
- Assets: arquivos estáticos como imagens e vetores
- Components: componentes que são utilizados em mais de um lugar
- Constant: lista de crenças e suas informações
- Enum: enum com o nome de cada crença
- Screen: Telas do aplicativo
