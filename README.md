# JaVo - Aplicativo de Chamados Help Desk

Bem-vindo ao JaVo, o seu aplicativo de Help Desk para gerenciar e resolver eficientemente os problemas e solicitações de suporte dos seus usuários.

## Visão Geral

JaVo é uma solução de chamados Help Desk que simplifica o processo de comunicação entre usuários e agentes de suporte técnico. Oferecendo uma interface intuitiva e recursos avançados, o JaVo é projetado para melhorar a eficiência do suporte técnico e a satisfação do usuário.

## Principais Características

- **Criação de Tickets:**
  - Os usuários podem facilmente criar tickets para relatar problemas ou fazer solicitações.

- **Acompanhamento de Status:**
  - Mantenha os usuários informados sobre o status de seus tickets em tempo real.

- **Atribuição de Tarefas:**
  - Atribua tarefas aos agentes de suporte para uma resolução eficiente.

- **Comunicação Eficiente:**
  - Mensagens instantâneas entre usuários e agentes para uma comunicação rápida e eficaz.

- **Priorização Inteligente:**
  - Sistema inteligente de triagem e priorização de tickets.

## Guia de Instalação - Banco de Dados

Este guia fornecerá instruções passo a passo sobre como configurar o ambiente de desenvolvimento da aplicação.

### Pré-requisitos
Antes de começar, verifique se o seu sistema atende aos seguintes requisitos:

- Python3 instalado
- Um editor de código, como Visual Studio Code, PyCharm ou similar
- Repositório clonado em sua máquina

```bash
git clone https://github.com/souzera/javo.git
```

### Acesse o diretório SERVER
Para acessar o diretório recém-clonado do projeto:
```bash
cd javo/server
```

### Crie e ative uma venv 
Crie e ative um ambiente virtual para isolar as dependências do projeto:

#### Windows:
```bash
py -m venv .venv
```
```bash
.venv\Scripts\activate
```

### Instale as dependências
Para instalar as dependências do projeto utilizando o pip:

```bash
pip install -r requirements.txt
```

### Configurar Banco de Dados (SQLite)
O projeto JaVo utiliza o SQLite como banco de dados padrão. Execute as migrações para configurar o banco de dados:
```bash
py manage.py migrate
```

### Criar um Superusuário
Crie um superusuário para acessar a interface de administração do Django:

```bash
python manage.py createsuperuser
```

Siga as instruções para fornecer um nome de usuário, endereço de e-mail e senha para o superusuário.

### Executar a aplicação
Execute a aplicação com o comando:
```bash
py manage.py runserver
```

Isso iniciará o servidor de desenvolvimento em http://localhost:8000. Você pode acessar esta URL no seu navegador para visualizar o aplicativo JaVo.


## Guia de Instalação - Ambiente WEB

Este guia fornecerá instruções passo a passo sobre como configurar o ambiente de desenvolvimento da aplicação.

### Pré-requisitos
Antes de começar, verifique se o seu sistema atende aos seguintes requisitos:

- Node.js e npm instalados (versão LTS recomendada)
- Um editor de código, como Visual Studio Code, Sublime Text, ou similar
- Repositório clonado em sua máquina

```bash
git clone https://github.com/souzera/javo.git
```

### Acesse o diretório WEB
Para acessar o diretório recém-clonado do projeto:
```bash
cd javo/web
```

### Instale as dependências
Para instalar as dependências do projeto utilizando o npm:

```bash
npm install
```

### Executar a aplicação
Execute a aplicação com o comando:
```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo JaVo no seu navegador padrão. Você também pode acessá-lo manualmente em http://localhost:3000.


