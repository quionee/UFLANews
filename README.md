# UFLANews

### Motivação

Este projeto está sendo desenvolvido a partir dos requisitos solicitados pelo professor Silvio Torra, que trabalha com a parte de assessoria de comunicações na UFLA. Existem dois problemas em questão, o primeiro é que muitos docentes reclamam que recebem muitas notícias que não são de seu interesse. A partir disso, o segundo problema é gerado, pois como diversas notícias são enviadas, muitas vezes os e-mails que realmente importam pra aquela pessoa não são entregues, ou acabam sendo descartados, pois foram confundidos como spam.

### Objetivos

Para tentar solucionar esse problema será desenvolvido um aplicativo de notícias da UFLA (UFLANews). O mesmo deverá apresentar um feed principal com diversos publicadores de boletins eletrônicos, como exemplo, o restaurante universitário (RU), a Pró-reitoria de Graduação (PRG), dentre outras. O objetivo é que o usuário consiga se inscrever nesses publicadores para poder receber notícias somente daqueles temas que lhe interessem, resolvendo assim, o problema em questão.

### Diagrama de Caso de Uso

![Diagrama de casos de uso do aplicativo](https://github.com/focks98/UFLANews/blob/master/casoDeUso.png)

### Funcionalidades

[Documento de requisitos do aplicativo](https://github.com/focks98/UFLANews/issues)

[Protótipo de Interface Gráfica](https://xd.adobe.com/view/865f717c-b578-4943-5cb5-0d598f6f5baf-f06e/)

### Membros

##### Álvaro Martins Espíndola - Scrum Team

Habilidades: programador de NodeJs, Java, Python e C/C++. Pouco conhecimento em front-end, preferindo, portanto, o back.

##### Felipe Ferreira Carvalho Silva - PO

Habilidades: programador de Python, Java e C++. Conhecimento básico em desenvolvimento back-end e front-end. Experiência em levantamento e definição de requisitos adquirida na matéria Engenharia de software.

##### Heuller Soares Vilela Silva - Scrum Team

Habilidades: programador com conhecimentos na linguagem Python. Possui entendimento básico acerca de tecnologias web e mobile.

##### Lorena Kerollen Botelho Tavares - Scrum Team

Habilidades: conhecimento em C++, Python, Java. Conhecimento básico em desenvolvimento web.

##### Rodrigo Pinto Herculano - Scrum Master

Habilidades: certo conhecimento e experiência com Java, Python, C++. Algum conhecimento básico de programação web.

##### William Davi Coelho - Scrum Team

Habilidades: conhecimentos com linguagens de programação como Python,Java, C++. Pouco conhecimento em programação web.

### Utilização:

Clone o repositório atual: 
> git clone https://github.com/focks98/UFLANews.git

#### API
**Instalação:**

Vá para o diretório da **api**.
Para a instalação da api execute o seguinte comando:
> npm install

Para corrigir alguns erros de versionamento, talvez, seja necessário executar o comando abaixo:
> npm audit fix

**Execução:**

Para colocar esta API em funcionamento, execute o comando abaixo:
> npm run start-auth

#### Aplicativo

Vá para o diretório do **app**.
Instale os scripts do *framework* Ionic:
> npm install @ionic/app-scripts@latest --save-dev

Execute o aplicativo:
>ionic serve
