# Fábrica de Software 2025/1

## Nome da equipe
- Leandro José Bittencourt Balansin
- Thiago Paulo de Oliveira

## Propostas de projeto

- Nome do sistema: Sistema de agendamento de consultas médicas
  
  - Funcionalidade 1: Cadastro de pacientes
  - Funcionalidade 2: Cadastro de médicos
  - Funcionalidade 3: Agenda de consultas
  - Funcionalidade 4: Gestão de consultas e histórico por médico
  - Funcionalidade 5: Cancelamento e remarcação
  - Funcionalidade 6: Sistema de pagamento e convênio
  - Funcionalidade 7: Notificação e lembretes


<s>

- Nome do sistema Ex:(Sistema para loja de bicicletas)
  - Funcionalidade 1: Cadastro de produtos
  - Funcionalidade 2: Cadastro de clientes
  - Funcionalidade 3: Catálogo de produtos
  - Funcionalidade 4: Gerenciamento de pedidos
  - Funcionalidade 5: Sistema de pagamento
  - Funcionalidade 6: Envio e frete

</s>

## Livro Eng Software Moderna
[Eng. Soft Moderna - Requisitos](https://engsoftmoderna.info/cap3.html)

## Histórias de Usuário
- secretário
- como um secretário quero cadastrar pacientes no sistema com nome, cpf, telefone, email, dados do convênio, endereço para poder agendar consultas e ter o histórico médico.
- como um secretário gostaria de visualizar os agendamentos, e históricos de consultas de cada paciente.

- paciente
- como paciente quero ter acesso a agenda médica para poder agendar uma consulta conforme minha disponibilidade.
- como paciente quero poder cancelar ou remarcar minha consulta caso haja imprevisto.
- como paciente quero efetuar o pagamento da consulta ou informar meu convênio.
- como paciente quero receber notificações e lembretes em meu celular sobre data e horário de minha consulta.

- administrador
- como administrador quero cadastrar médicos para que possam ser alocados na agenda.
- como administrador quero ter acesso a lista de pacientes e poder editar, incluir ou excluir cadastros.

- médico
- como médico quero acessas a agenda dos meus pacientes para poder atender de forma mais eficaz.
- como médico quero ter acesso ao histórico médico de meus pacientes.



## Comandos do Git

### Instalação
[Git Bash](https://git-scm.com/downloads)

### Configuração inicial

```
git config --global user.name "NOME DO USUARIO NO GITHUB"
git config --global user.email "EMAIL DA CONTA DO GITHUB"
```
### Tipos de mensagens do commit

- feat: (new feature for the user, not a new feature for build script)
- fix: (bug fix for the user, not a fix to a build script)
- docs: (changes to the documentation)
- style: (formatting, missing semi colons, etc; no production code change)
- refactor: (refactoring production code, eg. renaming a variable)
- test: (adding missing tests, refactoring tests; no production code change)
- chore: (updating grunt tasks etc; no production code change)

### Commit e Push

```
git add .
git commit -m "tipo: o que foi feito"
git push -u origin main
```

### Ambiente de desenvolvimento JAVA
[Eclipse Adoptium](https://adoptium.net/)
[Microsoft OpenJDK](https://www.microsoft.com/openjdk)
[AWS CORRETTO](https://aws.amazon.com/pt/corretto/)
[VSCode](https://code.visualstudio.com/download)
[Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)


- JRE - Java Runtime Environment
   - Java Virtual Machine JVM 
     - java.exe / javaw.exe
- JDK - Java Development Kit
  - Compilar o java (javac.exe)
