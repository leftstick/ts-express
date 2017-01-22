import launcher from './fw/launcher';


launcher()
  .then((msg: string) => {
    console.log(msg);
  });