function signUpUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("signUp user");
      reject();
    }, 2000);
  });
}

function logInUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login user");
      resolve();
    }, 2000);
  });
}

function updateUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("update user");
      resolve();
    }, 2000);
  });
}

async function fetchUserData() {
  try {
    const signUp = await signUpUser();
    const login = await logInUser();
    const update = await updateUser();
    console.log("Fetched user data successful");
  } catch (e) {
    console.error(e);
  }
}

// fetchUserData();

const newPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("new Promise 1 called");
    resolve();
  }, 2000);
});

const newPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("new Promise 2 called");
    resolve();
  }, 1000);
});

newPromise1.then(() => {newPromise2}).catch((e) => console.log(e));
