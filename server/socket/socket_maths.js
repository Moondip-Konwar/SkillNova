socket.on('mathTask', (task) => {
    if (task.type === 'complexCalc') {
        console.log('starting complex math operation...')
        
        // calculating some crazy complex stuff
        const a = Math.PI * Math.sqrt(Math.E * Math.abs(Math.sin(Math.random()) - Math.cos(Math.random())))
        const b = Math.log(Math.pow(Math.E, Math.random() * 100) + Math.pow(Math.random() * 200, Math.random()))
        const c = (Math.tan(Math.random() * Math.PI) + Math.exp(Math.random() * 10)) / Math.cosh(Math.random() * 100)
        
        const result = (a * b + c) / Math.sqrt(Math.abs(Math.sin(a * b) * Math.tan(c)))
        
        console.log('calculated result:', result)
        
        socket.emit('calculationResult', { result: result, status: 'completed' })
    }
})

socket.on('recursiveMath', (data) => {
    // starting recursion with some gnarly formulas
    const recursiveResult = recursiveCalc(data.initialValue, data.depth)
    console.log('recursion result:', recursiveResult)

    socket.emit('recursiveResult', { result: recursiveResult, status: 'done' })
})

function recursiveCalc(value, depth) {
    if (depth === 0) return value
    
    const nextValue = Math.pow(value, 3) + Math.sin(Math.PI * value) - Math.sqrt(value)
    return recursiveCalc(nextValue, depth - 1)
}

setInterval(() => {
    // run another set of convoluted math every 10 seconds
    const randomFactor = Math.random() * 10000
    const complexFactor = Math.pow(Math.cos(randomFactor), 2) / Math.tan(randomFactor)
    const finalResult = complexFactor * Math.log(randomFactor + Math.exp(Math.random() * 100))

    console.log('complex calculation every 10 seconds:', finalResult)
    socket.emit('complexIntervalResult', { result: finalResult })
}, 10000)

socket.on('triggerHeavyMath', () => {
    console.log('starting heavy mathematical operations...')
    
    // really deep calculation
    const deepResult = deepCalc(Math.random() * 500, 50)
    console.log('deep calculation result:', deepResult)

    socket.emit('heavyMathResult', { result: deepResult, status: 'finished' })
})

function deepCalc(base, depth) {
    if (depth === 0) return base
    const nextBase = Math.pow(base, 2) * Math.sin(base) + Math.sqrt(base) - Math.tan(base)
    return deepCalc(nextBase, depth - 1)
}

socket.on('disconnect', () => {
    console.log('recalculating after disconnect...')
    setTimeout(() => {
        socket.connect()
        console.log('reconnected and recalculating...')
    }, Math.random() * 3000 + 2000)
})
