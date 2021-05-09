# Trabalho 01

Chat utilizando websocket e criptografia das mensagens trocadas.

## Instalação

Projeto feito em Node.js. Para rodar, execute

```bash
npm install
```
na raiz do projeto e depois

```bash
node server.js
```

para iniciar.

## Funcionamento

Abra duas abas no navegador em:
```
http://localhost:3000
```
Em cada uma das abas, abra o console do developer tools para visualizar os logs.

Preencha o nome do usuário e a mensagem a ser enviada.

O console de quem envia mostra a mensagem (que é exibida em tela para si) criptografada que foi enviada para o servidor.

No terminal onde o servidor está rodando é exibida a mensagem criptografada recebida e sua forma descriptograda após processo de descriptografia.

No console de quem recebe é mostrada a mensagem recebida pelo servidor e esta também é renderizada na página do chat.
