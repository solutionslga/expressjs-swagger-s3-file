# Introdução 
Este projeto serve para reenderizar um arquivo no padrao openAPI3 para o express-swagger-ui.
O arquivo pode ser carregado por fontes externas, neste caso AWS S3.

# Projeto
Criar uma api que recebe os arquivos de microserviços e cria um arquivo via pipeline,
e concatena e faz o upload para o S3 para que o reenderizador tenha acesso a todas as apis de um projeto.

# Config

{
  credentials: {
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  },
  bucket: process.env.BUCKET,
  key: process.env.KEY,
};
# start

node index.js default port 3000 
node index.js --port <port>
node index.js --p <port>



