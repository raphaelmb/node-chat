const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
	res.render('index.html');
});

function decrypt(str) {
    const key = 5;
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
  
      if (letter.match(/[a-z]/i)) {
        const code = str.charCodeAt(i);
  
        if (code >= 65 && code <= 90) {
          letter = String.fromCharCode(((code - 65 - key) % 26) + 65);
        }
  
        else if (code >= 97 && code <= 122) {
          letter = String.fromCharCode(((code - 97 - key) % 26) + 97);
        }
      }
  
      result += letter;
    }
  
    return result;
};

let messages = [];

io.on('connection', (socket) => {
	socket.emit('previousMessages', messages);

	socket.on('sendMessage', (data) => {
		console.log(`MENSAGEM ENCRIPTADA RECEBIDA NO SERVIDOR: ${data.message}`)
		data.message = decrypt(data.message);
		console.log(`MENSAGEM DECRIPTADA PELO SERVIDOR: ${data.message}`)
		messages.push(data);
		socket.broadcast.emit('receivedMessage', data);
	});
});

server.listen(3000);
