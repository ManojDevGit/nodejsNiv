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

// STEP 4: Create a file using fs module and async/await.

const fs = require("fs").promises;

const writeFileAsAsync = async () => {
  try {
    await fs.writeFile(
      "nodejs.txt",
      "Create a file using fs module and async/await."
    );
    console.log("Done");
  } catch (error) {
    console.error("Failed to write:", error);
  }
};

writeFileAsAsync();
