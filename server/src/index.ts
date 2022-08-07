import express from 'express';
import dotenv from 'dotenv';
import RouteIndex from './routes/index.route';
import { Server } from 'socket.io';
import { createServer } from 'http';

dotenv.config();

// Express server
const app = express();
const PORT = Number(process.env.PORT) || 3000;
const routeIndex = new RouteIndex(app);

app.use(express.static('public'));
routeIndex.listenRoutes();

// Socket server
const httpServer = createServer(app);
const io = new Server(httpServer, {
	path: '/socket',
	upgradeTimeout: 3000,
	cors: {
		origin: 'http://localhost:4000',
	},
});

io.on('connection', (socket) => {
	console.log('connected ' + socket.id);

	socket.on('say', (chatContent) => {
		io.emit('say', chatContent);
	});
});

httpServer.listen(PORT, () =>
	console.log(`Server is running: http://localhost:${PORT}`)
);

import './database/mongo.db';

export { io, app };
