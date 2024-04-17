// Add a new / to the following line to explicitly use webworker lib
// <reference lib="webworker" />

const app: SharedWorkerGlobalScope = self as any;

app.addEventListener('connect', e => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data}`;
    port.postMessage(workerResult);
  });

  port.start();
});