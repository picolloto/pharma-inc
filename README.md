# Pharma Inc.

Dashboard para exibir os dados dos clientes.

### Iniciar Projeto

Para iniciar o projeto em modo de desenvolvimento execute `yarn start`.

Para iniciar em produção primeiro certifique-se que o docker está instalado.

Para criar a imagem abra o terminal na raiz do projeto e execute: 

`docker build . -t coodesh/teste-frontend-pharma:v1`

Depois execute: 

`docker run --name pharma-inc -p 80:80 coodesh/teste-frontend-pharma:v1`

Pronto, a aplicação já está funcionando. 

Acesse (http://127.0.0.1:80)[http://127.0.0.1:80]