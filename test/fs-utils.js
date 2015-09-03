import Rx from 'rx';
import path from 'path';
import fsp from 'fs-promise';

function expanddir(dir) {
  let fullDirPath = path.resolve(dir);
  let paths = fsp.readdir(dir);

  return Rx.Observable.fromPromise(paths)
    .flatMap(x => x)
    .map(filename => {
      let filepath = path.join(fullDirPath, filename);

      return expand(filepath);
    })
    .flatMap(x => x);
}

export function expand(filepath) {
  let fullPath = path.resolve(filepath);
  let p = fsp.stat(fullPath);

  return Rx.Observable.fromPromise(p)
    .flatMap(stat => {
      if (stat.isDirectory()) {
        return expanddir(fullPath);
      } else {
        return Rx.Observable.just(fullPath);
      }
    });
}
