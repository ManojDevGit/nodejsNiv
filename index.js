// STEP 1: Create a node project
// STEP 2: create a promoise to display a mesaage and cal the promise.

const promiseMsg = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is a promise message.");
    }, 1000);
  });
};

promiseMsg().then((message) => console.log(message));

/////////////////////////////////////////////////////////////////////////
