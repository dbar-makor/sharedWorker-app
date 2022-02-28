const worker = new SharedWorker(new URL("./AppWorkerhandler", import.meta.url));

worker.port.start();

export default worker;
