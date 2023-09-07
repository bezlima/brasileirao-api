# Brasileirão API

Sistema back-end de Data scraping do brasileirão que retonha a tabela do campeonato.

## Instalação

Clone o projeto

```bash
  git clone https://github.com/bezlima/brasileirao-api.git
```

Entre na pasta do projeto

```bash
  cd brasileirao-api
```

Instale as dependencias

```bash
  yarn
```

Inicie o projeto

```bash
  yarn dev
```

## Documentação da API

#### Retorna o grupo da série escolhida

```http
  GET /api/:serie
```

| Parâmetro | Tipo     | Descrição                                               |
| :-------- | :------- | :------------------------------------------------------ |
| `serie`   | `string` | **Obrigatório**, atualmente é possível usar série a e b |

seu retorno será:

```Json
{
    classificacao: [],
    edicao: [],
    faixas_classificacao: [],
    fase: [],
    fases_navegacao: [],
    lista_jogos: [],
    lista_jogos_unica: boolean,
    lista_tipo_unica: boolean,
    rodada: [],
}
```

## Melhorias

-   Adicionar série C e os jogos da série D

-   Adicionar tabela de outros campeonatos
