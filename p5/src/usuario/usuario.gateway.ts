import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { UsuarioService } from './usuario.service';
import { Server } from 'socket.io';
import { Socket } from 'socket.io';
import { pedidoDto } from './dto/mensaje.dto';

@WebSocketGateway({ cors: true })
export class UsuarioGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly usuarioService: UsuarioService) { }

  async handleConnection(client: Socket, ..._args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      await this.usuarioService.registerClient(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.usuarioService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.usuarioService.removeClient(client.id);
    this.wss.emit('clients-updated', this.usuarioService.getConnectedClients());
  }

  @SubscribeMessage('agregar-transaccion')
  async onMessageFromClient(client: Socket, payload: pedidoDto): Promise<void> {
    const pedido = await this.usuarioService.create(payload);
    this.wss.emit('consultar-activo', {
      fullName: this.usuarioService.getUserFullName(client.id),
      message: pedido,
    });
  }
}
