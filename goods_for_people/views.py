from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import permission_classes, api_view, authentication_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_jwt.utils import jwt_decode_handler

from .client import addMessageEvent
from .permissions import IsAdminOrReadOnly, IsOwnerOrReadOnly
from .serializers import UserSerializer, MessageSerializer, NotificationSerializer, CreateUserSerializer
from .serializers import AdSerializer
from .serializers import ChatSerializer
from .serializers import CategorySerializer
from .models import Profile, Message, Notification
from .models import Ad
from .models import Chat
from .models import Category


@api_view()
@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
def User(request):
    return Response({
        'data': UserSerializer(request.user).data
    })


class UserViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = Profile.objects.all()
        if self.request.method == 'GET':
            params = self.request.query_params.dict()
            try:
                queryset = queryset.filter(username=params['username'])
            except:
                pass
            try:
                queryset = queryset.filter(first_name__icontains=params['first_name'])
            except:
                pass
            try:
                queryset = queryset.filter(last_name__icontains=params['last_name'])
            except:
                pass
        return queryset

    def create(self, request, *args, **kwargs):
        serializer = CreateUserSerializer(data=request.data)
        if serializer.is_valid():
            if Profile.objects.filter(username=request.data.get('username')).count() != 0:
                return Response(status=status.HTTP_409_CONFLICT, data='User with this username is already registered')
            new_user = serializer.save()
            new_user.set_password(new_user.password)
            new_user.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors)

    def update(self, request, *args, **kwargs):
        queryset = Profile.objects.all()
        serializer = UserSerializer(data=request.data)
        if request.data.get('id'):
            if serializer.is_valid():
                updated_user = serializer.save()
                updated_user.set_password(updated_user.password)
                queryset.filter(id=request.data.get('id')).update(**updated_user.data)
                return Response(data=updated_user.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors)

    def destroy(self, request, *args, **kwargs):
        queryset = Profile.objects.all()
        if request.data.get('id'):
            user = queryset.filter(id=request.data.get('id'))
            if user.count() != 1:
                return Response(status=status.HTTP_204_NO_CONTENT)
            user.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@authentication_classes([JWTAuthentication])
@permission_classes([IsAdminOrReadOnly])
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticatedOrReadOnly])
class AdViewSet(viewsets.ModelViewSet):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
    http_method_names = ['get', 'post', 'put', 'delete']

    def get_queryset(self):
        queryset = Ad.objects.all()
        if self.request.method == 'GET':
            params = self.request.query_params.dict()
            try:
                queryset = queryset.filter(user_id__city=params['city'])
            except:
                pass
            try:
                queryset = queryset.filter(title__icontains=params['title'])
            except:
                pass
            try:
                queryset = queryset.filter(category=params['c_id'])
            except:
                pass
            try:
                queryset = queryset.filter(price__lte=params['max_p'])
            except:
                pass
            try:
                queryset = queryset.filter(price__gte=params['min_p'])
            except:
                pass
        return queryset

    def create(self, request, *args, **kwargs):
        if not request.data.get('title') or not request.data.get('price') or not request.data.get('category'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data='Some data is missing')
        data = request.data
        data['user_id'] = request.user.id
        new_ad = AdSerializer(data=data)
        if new_ad.is_valid():
            new_ad.save()
            return Response(data=new_ad.data, status=status.HTTP_201_CREATED)
        return Response(new_ad.errors)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        data = request.data
        if request.user.id != instance.user_id.id:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
        decoded_payload = jwt_decode_handler(request.headers.get("Authorization")[7:])
        data['user_id'] = decoded_payload.get('user_id')
        updated_ad = AdSerializer(data=data)
        if instance.id:
            if updated_ad.is_valid():
                updated_ad.save()
                return Response(data=updated_ad.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if request.user.id != instance.user_id.id or not request.user.is_staff:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
        if instance.status == 'S':
            return Response(data='already sold')
        instance.status = 'S'
        instance.save()
        return Response(status=status.HTTP_200_OK)
        # queryset = Ad.objects.all()
        # if instance.id:
        #     ad = Ad.objects.get(id=instance.id)
        #     if ad:
        #         return Response(status=status.HTTP_204_NO_CONTENT)
        #     ad. = 'S'
        #     ad.save()
        #     return Response(status=status.HTTP_200_OK)
        # return Response(status=status.HTTP_400_BAD_REQUEST)


@authentication_classes([JWTAuthentication])
# @permission_classes([IsAuthenticatedOrReadOnly])
class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer

    def get_queryset(self):
        queryset = Chat.objects.all()
        if self.request.method == 'GET':
            params = self.request.query_params.dict()
            try:
                queryset = queryset.filter(user_1=params['u_id'])
            except:
                pass
            try:
                queryset = queryset.filter(user_2=params['u_id'])
            except:
                pass
        return queryset

    # def create(self, request, *args, **kwargs):
    #     if not request.data.get('user_buyer') or not request.data.get('user_seller'):
    #         return Response(status=status.HTTP_400_BAD_REQUEST, data='Some data is missing')


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def create(self, request, *args, **kwargs):
        if not request.data.get('message_text') or not request.data.get('chat_id'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data='Some data is missing')
        data = request.data
        data['user_id'] = request.user.id
        new_message = MessageSerializer(data=data)
        chat = Chat.objects.get(id=data['chat_id'])
        if new_message.is_valid():
            new_message.save()
            addMessageEvent(Message.objects.all().count(), data['chat_id'], chat.user_1.id, chat.user_2.id, data['message_text'])
            return Response(data=new_message.data, status=status.HTTP_201_CREATED)
        return Response(new_message.errors)


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
