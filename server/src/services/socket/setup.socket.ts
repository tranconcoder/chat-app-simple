import { Server } from 'socket.io';
import { createServer } from 'http';
import { Application } from 'express';
import { Server as HttpServer } from 'http';

export default function setupSocket(app: Application): [HttpServer, Server] {
	const httpServer = createServer(app);
	const io = new Server(httpServer, {
		path: '/socket',
		upgradeTimeout: 3000,
		cors: {
			origin: 'http://localhost:4000',
		},
	});

	return [httpServer, io];
}
