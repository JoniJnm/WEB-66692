const worker = new SharedWorker('dist/web-worker.js');

worker.port.addEventListener('message', e => {
  console.log('Message from worker: '+e.data);
});

worker.port.postMessage('Hello!');

worker.port.start();