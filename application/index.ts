import launcher from './fw/launcher';

launcher()
  .then((msg: string) => {
    console.log(msg);
  })
  .catch((err: Error) => {
    console.log(err);
    process.exit(-1);
  });