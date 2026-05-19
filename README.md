# EcoTech - Sistema de Coleta Inteligente de Lixo Eletrônico

Trabalho acadêmico desenvolvido para a disciplina de Análise e Projeto de Sistemas do Centro Universitário de Brasília (UniCEUB).

O **EcoTech** é uma solução tecnológica voltada para amenizar os impactos ambientais decorrentes do descarte inadequado de lixo eletrônico, como celulares, pilhas e baterias, na região do Distrito Federal.

Através de totens físicos interativos de autoatendimento, o sistema realiza:

- Triagem física dos materiais
- Cálculo de recompensas financeiras proporcionais ao peso descartado
- Resgate de créditos nas faturas das concessionárias parceiras
- Rastreabilidade segura dos resíduos até ONGs homologadas

As concessionárias parceiras utilizadas no sistema são:

- Neoenergia
- CAESB

As ONGs responsáveis pelo recolhimento e reciclagem são:

- Reciclotech
- Programando o Futuro

# Funcionalidades Principais

### Identificação Segura
Login rápido realizado pelo totem utilizando CPF com validação em tempo real de 11 dígitos numéricos.

### Triagem Categorizada
Interface simples com seleção de categorias:

- Celular
- Pilha
- Bateria

### Pesagem Automatizada
Integração com sensores físicos de peso com estabilização garantida em até 5 segundos.

### Cálculo de Recompensa
Exibição transparente da fórmula:

```text
Peso (g) x Valor por Grama
```

## Escolha de Destino do Crédito
O usuário pode direcionar os créditos gerados para:

- Neoenergia
- CAESB

### Rastreabilidade dos Resíduos
O sistema informa qual ONG parceira será responsável pela coleta e reciclagem do material descartado.

# Arquitetura do Sistema - BCE (Boundary-Control-Entity)

O projeto foi modelado utilizando o padrão arquitetural **BCE**, separando responsabilidades em três camadas:

### Boundary (Fronteira)
Responsável pela interface e comunicação externa:

- Telas do Totem
- Painéis de Exibição
- Sensores de Peso
- Travas Mecânicas
- APIs das concessionárias

### Control (Controle)
Responsável pelas regras de negócio:

- Validação de CPF
- Gerenciamento da sessão
- Controle da coleta
- Cálculo de créditos
- Processamento de transações

### Entity (Entidade)
Responsável pelos modelos de dados:

- CadastroUsuario
- ResiduoEletronico
- TransacaoColeta

# Protótipo Web do EcoTech

Este repositório também contém o protótipo web do sistema EcoTech.

Projeto original disponível em:

https://www.figma.com/design/94Pk9k1XBcxdcSURXK9DRV/EcoTech-Web-App-Prototype

## Como executar o projeto

Instale as dependências:

```bash
npm i
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

# Integrantes do Grupo

- Leticia Araújo da Silva Amparo
- Rafael Machado Alves Vaz
- Larissa Vargas Moreira
- Camile Xavier Medina

# Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos vinculados ao Centro Universitário de Brasília (UniCEUB).
