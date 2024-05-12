import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { SampleGatewayService } from './sample.gateway.service';
import { OnModuleInit } from '@nestjs/common';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SampleGateway implements OnModuleInit {
  @WebSocketServer() server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('Client connected');
    });
  }
  justEmitting() {
    this.server.emit('justEmitting', { data: 'Just emitting' });
  }
}
