// eslint-disable-next-line
onconnect = (e) => {
  const port = e.ports[0]

  let ws = new WebSocket('ws://localhost:8000')

  ws.onopen = () => {
    console.log('Connected to Analytics WebSocket!')
    port.postMessage({
      type: 'ws_status',
      data: {
        isStreaming: true
      }
    })
  }

  ws.onmessage = async (event) => {
    const response = JSON.parse(event.data)
    port.postMessage(response)
  }

  ws.onclose = () => {
    console.log('Connection closed! Try to reconnect in 5 seconds...')
    port.postMessage({
      type: 'ws_status',
      data: {
        isStreaming: false
      }
    })
  }

  ws.onerror = (err) => {
    console.log(err)
  }

  port.addEventListener('message', (e) => {
    const workerResult = 'Result: ' + (e.data)
    console.log(workerResult)
  });

  port.start()
} 