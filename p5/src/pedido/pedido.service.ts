import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Socket } from 'socket.io';
import { Repository } from 'typeorm';
import { pedidoDto } from './dto/pedido.dto';
import { PedidoEntity } from './entities/pedido.entity';

interface User {
    id: string;
    name: string;
    isActive: boolean
}

interface ConnectedClients {
    [id: string]: {
        socket: Socket;
        user: User;
    }
}

const users: User[] = [
    { id: '1', name: 'user1', isActive: true },
    { id: '2', name: 'user2', isActive: true },
    { id: '3', name: 'user3', isActive: true },
];

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(PedidoEntity)
        private readonly pedidoRepository: Repository<PedidoEntity>,
    ) { }

    private connectedClients: ConnectedClients = {};

    async create(data: pedidoDto): Promise<PedidoEntity> {
        const newPedido = this.pedidoRepository.create(data);
        return this.pedidoRepository.save(newPedido);
    }

    registerClient(socket: Socket, userId: string) {
        const user = users.find(u => u.id === userId);
        if (!user) {
            throw new Error('User not found');
        }
        if (!user.isActive) {
            throw new Error('User is not active');
        }

        this.checkUserConnection(user);

        this.connectedClients[socket.id] = {
            socket: socket,
            user: user
        };
    }

    removeClient(clientId: string) {
        delete this.connectedClients[clientId];
    }

    getConnectedClients(): string[] {
        return Object.keys(this.connectedClients);
    }

    getUserFullName(socketId: string): string {
        return this.connectedClients[socketId].user.name
    }

    checkUserConnection(user: User) {
        let connectionCount = 0;

        for (const clientId of Object.keys(this.connectedClients)) {
            const connectedClient = this.connectedClients[clientId];
            if (connectedClient.user.id === user.id) {
                connectionCount++;
                if (connectionCount >= 3) {
                    throw new Error('User has reached the maximum number of connections (3)');
                }
            }
        }
    }
}