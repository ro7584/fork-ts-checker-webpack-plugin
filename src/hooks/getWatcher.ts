import webpack from 'webpack';
import { EventEmitter } from 'events';

type Watcher = EventEmitter;

function getWatcher(compiler: webpack.Compiler): Watcher | undefined {
  // webpack 4
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { watchFileSystem } = compiler as any;

  return watchFileSystem.watcher || (watchFileSystem.wfs && watchFileSystem.wfs.watcher);
}

export { getWatcher, Watcher };