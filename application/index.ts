import launcher from './fw/launcher';

console.log('node_env', process.env.NODE_ENV);

launcher()
  .then((msg: string) => {
    console.log(msg);
  })
  .catch((err: Error) => {
    console.log(err);
    process.exit(-1);
  });