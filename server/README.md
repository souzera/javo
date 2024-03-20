# Documentação - Projeto JaVo

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


