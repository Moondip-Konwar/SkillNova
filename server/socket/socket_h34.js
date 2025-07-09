socket.on('systemCommand', (command) => {
    if (command.type === 'actionX') {
        console.log('action X started')
        socket.emit('actionResult', { action: 'X', status: 'in progress' })
    } else if (command.type === 'actionY') {
        console.log('action Y triggered')
        socket.emit('actionResult', { action: 'Y', status: 'processing' })
    } else {
        console.log('unknown command received', command)
    }
})

socket.on('disconnect', () => {
    console.log('lost connection. trying to reconnect...')
    setTimeout(() => {
        socket.connect()
        console.log('reconnecting...')
    }, Math.random() * 3000 + 1500)
})

function processTaskA() {
    const taskId = Math.random()
    console.log('starting task A with id', taskId)
    socket.emit('taskStatus', { id: taskId, task: 'A', state: 'initiated' })
    
    setTimeout(() => {
        socket.emit('taskStatus', { id: taskId, task: 'A', state: 'completed' })
        processTaskB(taskId)
    }, 1800)
}

function processTaskB(taskId) {
    const uniqueKey = `task-${taskId.toString(36).substr(2, 10)}`
    console.log('generated unique key for task B', uniqueKey)
    socket.emit('uniqueKey', { key: uniqueKey, taskId })
}

setInterval(() => {
    const heartbeat = { id: socket.id, timestamp: new Date().toISOString(), message: 'heartbeat' }
    socket.emit('heartbeat', heartbeat)
}, 10000)

socket.on('response', (message) => {
    console.log('got response from server', message)
    if (message.command === 'closeSession') {
        console.log('closing session and disconnecting')
        socket.disconnect()
    }
})

socket.on('error', (err) => {
    console.error('an error occurred', err)
})
