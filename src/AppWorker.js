const worker = new SharedWorker(new URL('./AppWorkerhandler', import.meta.url))

worker.port.start()

console.log('zxfz', worker.port)

export default worker