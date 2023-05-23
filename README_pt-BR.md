en-US: To read the English version of this text, please check the `README.md` file.

# Desafio Backend Trakto

Este é o meu código para o Desafio Backend Trakto. Esta aplicação possui uma rota única que recebe a URL de uma imagem no formato .jpg ou .jpeg e um fator de compressão, e, em seguida, salva uma cópia da imagem no sistema de arquivos, extrai seus metadados EXIF, redimensiona-a caso seja muito grande, comprime-a com base no fator de compressão e salva uma cópia da imagem manipulada. Após todas essas etapas, a aplicação retorna os metadados extraídos juntamente com os caminhos das imagens salvas e armazena os metadados em uma instância do MongoDB.

## Requisitos

- Node.js v18 ou superior
- NPM v9 ou superior
- Uma instância em execução do MongoDB 4 ou superior

## Etapas de Configuração

### Executando uma instância do MongoDB com Docker e Docker Compose

Se você já possui uma instância ativa do MongoDB, pode pular esta etapa.

1. Abra um terminal e vá até a raiz deste projeto
2. Verifique se você tem o Docker e o Docker Compose instalados (você pode fazer isso com os comandos `docker --version` e `docker compose version`)
3. Simplesmente execute `docker compose up` - este comando irá baixar e instanciar automaticamente o MongoDB para você

### Configurando as variáveis de ambiente

Existem apenas duas variáveis de ambiente neste projeto. São elas:
- `PORT` - A porta na qual a aplicação irá ouvir as solicitações.
- `MONGO_URL` - A URL usada para estabelecer uma conexão com uma instância do MongoDB. Observe que a URL é segmentada em várias partes: `<user>` (o usuário usado para a conexão), `<password>` (a senha do usuário anterior), `<host>` (o host onde a instância do MongoDB está em execução), `<port>` (a porta na qual a instância do Mongo está ouvindo - o padrão é `27017`) e `<database>` (opcional - o banco de dados escolhido para a autenticação). Certifique-se de substituir esses segmentos pelos seus valores adequados.

1. Abra o arquivo `.env.example` e copie o seu conteúdo
2. Crie um arquivo `.env` na raiz desta pasta e cole o conteúdo copiado anteriormente
3. Edite cada variável de acordo com suas preferências.

Se você criou uma instância do MongoDB usando a etapa anterior, pode simplesmente usar a seguinte URL como sua variável de ambiente `MONGO_URL`:
```
mongodb://root:root@localhost:27017/
```

### Iniciando a aplicação

1. Baixe todos os pacotes necessários com `npm ci`
2. Gere uma build do projeto com `npm run build`
3. Inicie o projeto com `npm run start`

## Testes

Para ver os testes unitários da aplicação, execute o seguinte comando:
```
npm run test
```