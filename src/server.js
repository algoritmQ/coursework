const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const WebSocket = require('ws');

const PROTO_PATH = path.join(__dirname, 'proto', 'backend.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const { chat } = grpc.loadPackageDefinition(packageDefinition);
const connections = new Set();
class ChatService {
  addMessageEvent(call, callback) {
    const messageEvent = call.request;
    const chatId = messageEvent.chatId;
    const user_1 = messageEvent.userSeller;
    const user_2 = messageEvent.userBuyer;
    const messageText = messageEvent.messageText;

    // Вызов метода handleWebSocketMessage() с передачей извлеченных данных
    this.handleWebSocketMessage(chatId, user_1, user_2, messageText);

    callback(null, {});
  }

  handleWebSocketMessage(chatId, user_1, user_2, messageText) {
    // Обработка сообщения и использование извлеченных данных
    // Например, отправка сообщения через веб-сокет

    const message = {
      event: 'message',
      chatId: chatId,
      user_1: user_1,
      user_2: user_2,
      messageText: messageText,
    };

    // Отправка сообщения всем клиентам WebSocket, кроме отправителя
    this.broadcastMessage(message.messageText, message.user_1.low);
  }

  broadcastMessage(msg, id) {
    connections.forEach(client => {
      console.log(client.id)
      if(client.id !== id) {
        const modifiedMsg = {
          msg: msg,
          id: id
        }
        client.send(JSON.stringify(modifiedMsg));
      }
      else {
        console.log("лох") }
    });
  }
}

function main() {
  const wss = new WebSocket.Server({
    port: 5001,
  }, () => console.log('Server started on port 5001'));
  
  
  wss.on('connection', function connection(ws) {
    console.log(1234444444440)
    connections.add(ws);
    ws.send(JSON.stringify({ event: 'ping' }));
    ws.send(JSON.stringify("re",{ event: 'msg' }));
    console.log(connections)

    ws.on('close', () => {
      console.log('Client disconnected');
    });
    ws.on('message', function (message) {
      message = JSON.parse(message);
      switch (message.event) {
        case 'message':
          broadcastMessage(message, ws);
          break;
        case 'connection':
          createOrJoinRoom(ws, message.roomId);
          break;
        case 'close':
          closeRoom(ws);
          clearInterval(pingInterval);
          break;
        case 'pong':
          // Обработка полученного понга
          console.log('Получен понг от клиента');
          break;
      }});
  });

  const server = new grpc.Server();
  server.addService(chat.ChatService.service, new ChatService());

  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('gRPC server started on port 50051');
}

main();
