import grpc
from .proto import backend_pb2
from .proto import backend_pb2_grpc


def addMessageEvent(messageId, chatId, user1, user2, messageText):
    channel = grpc.insecure_channel('localhost:50051')
    client = backend_pb2_grpc.ChatServiceStub(channel)
    # Создание запроса
    request = backend_pb2.MessageEvent(
        message_id=messageId,
        chat_id=chatId,
        user_1=user1,
        user_2=user2,
        message_text=messageText,
    )

    # Вызов метода addMessageEvent
    client.addMessageEvent(request)
    # Обработка ответа

