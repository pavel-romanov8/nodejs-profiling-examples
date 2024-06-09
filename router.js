import { runCpuIntensiveTask, runSmartCpuIntensiveTask } from './cpu-intensive-tasks.js';
import { runAsyncTask, runSmartAsyncTask } from './async-tasks.js';
import { runMemoryLeakTask, runSmartMemoryLeakTask } from './memory-leak-tasks.js';

function baseRouteHandler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
}

function cpuRouteHandler(req, res) {
  runSmartCpuIntensiveTask(() => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  })
}

function asyncRouteHandler(req, res) {
  runSmartAsyncTask(() => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  });
}

function memoryLeakRouteHandler(req, res) {
  runSmartMemoryLeakTask(() => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  });
}

export const router = {
  '/': baseRouteHandler,
  '/cpu': cpuRouteHandler,
  '/async': asyncRouteHandler,
  '/memory-leak': memoryLeakRouteHandler,
};
