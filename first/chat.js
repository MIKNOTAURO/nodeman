var express = require('express');
var http    = require('http');
var chat    = express();
var server  = http.createServer(chat);

var io = require('socket.io').listen(server);

var chatP = ['Colombia', 'html5', 'css3', 'Node.JS', 'geek'];

chat.set('view engine', 'jade');
chat.set('view options', {layout: true });
chat.set('views', __dirname + '/views');

chat.get('/chat', function(require, response, next){
   response.render('chat'); 
});

io.sockets.on('connection', function(socket){
   var sendChat = function(title, text){
        socket.emit('chat', {
            title: title,
            contents: text
            });
        }
    setInterval(function(){
        var randomIndex = Math.floor(Math.random()*chatP.length);
        sendChat('Chat', chatP[randomIndex]);
    }, 5000);
    
    sendChat('Welcome to Chat', 'Chat on the line');
    socket.on('chat', function(data){
           sendChat('You', data.text); 
        });
});

chat.get('/?', function(require, response){
    response.render('index');
});

var port = 8080;
server.listen(port);

console.log('Listening on Port '+port);