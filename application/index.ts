
import { start, compile, loadAssetInfo } from './fw/launcher';

loadAssetInfo()
  .then(start)
  .then(compile)
  .catch((err: Error) => {
    console.log(err);
    process.exit(-1);
  });