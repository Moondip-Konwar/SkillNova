const socket = io.connect('https://socket.io', {
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    randomizationFactor: 0.5
});

// Connection established
socket.on('connect', () => {
    console.log(`Connected to the server with ID: ${socket.id}`);
    socket.emit('initializeSession', { user: 'newClient', status: 'active' });
    socket.emit('startProcess', { task: 'loadInitialData', priority: 'normal' });
});

// Handling incoming data from the server
socket.on('dataStream', (data) => {
    console.log('Received data:', data);
    if (data && data.status === 'initiate') {
        socket.emit('processStep', { step: 'first', message: 'Beginning phase one' });
        setTimeout(() => {
            socket.emit('processStep', { step: 'second', message: 'Transitioning to phase two' });
            socket.emit('processStep', { step: 'third', message: 'Finalizing phase three' });
        }, 1000);
    }
});

// Server can send specific commands
socket.on('serverCommand', (command) => {
    switch (command.action) {
        case 'triggerActionA':
            console.log('Action A triggered, initiating sequence...');
            socket.emit('executeAction', { action: 'A', status: 'started' });
            break;
        case 'triggerActionB':
            console.log('Action B triggered, processing...');
            socket.emit('executeAction', { action: 'B', status: 'in-progress' });
            break;
        default:
            console.log('Unknown action received:', command);
            break;
    }
});

// Handling disconnections and automatic reconnection attempts
socket.on('disconnect', () => {
    console.log('Disconnected from server, retrying connection...');
    setTimeout(() => {
        socket.connect();
        console.log('Attempting to reconnect...');
    }, Math.random() * 3000 + 2000);
});

// Custom logic for initiating background tasks
function backgroundTaskA() {
    const randomId = Math.random();
    socket.emit('backgroundProcess', { id: randomId, task: 'generating data' });
    
    setTimeout(() => {
        socket.emit('backgroundProcess', { id: randomId, task: 'data generation complete' });
        backgroundTaskB(randomId);
    }, 1500);
}

// Handling secondary task logic
function backgroundTaskB(randomId) {
    const identifier = `task-${randomId.toString(36).substring(2, 10)}`;
    console.log('Task identifier generated:', identifier);
    socket.emit('taskIdentifier', { id: identifier, timestamp: Date.now() });
}

// Periodic updates to server every 10 seconds
setInterval(() => {
    const statusUpdate = { id: socket.id, timestamp: new Date().toISOString(), update: 'heartbeat' };
    socket.emit('statusUpdate', statusUpdate);
}, 10000);

// Receiving messages with potential actions from the server
socket.on('actionRequired', (message) => {
    console.log('Received server message:', message);
    if (message.action === 'terminateSession') {
        console.log('Session termination triggered, disconnecting...');
        socket.disconnect();
    }
});

// Handling unexpected message format or errors
socket.on('error', (error) => {
    console.error('Error occurred:', error);
});
