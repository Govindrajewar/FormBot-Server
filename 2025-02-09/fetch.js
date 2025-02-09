const myDataBase = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 3,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];

async function fetchingData() {
  try {
    let response = await fetch("https://reqres.in/api/users");
    let data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
// fetchingData();

async function fetchOnlyEmails() {
  try {
    let response = await fetch("https://reqres.in/api/users");
    let fetchData = await response.json();

    let emails = fetchData.data.map((data) => console.log(data.email));
  } catch (error) {
    console.log(error);
  }
}
// fetchOnlyEmails();

// fetch user by id:
async function fetchDataById(id) {
  try {
    let response = await fetch("https://reqres.in/api/users");
    let fetchData = await response.json();

    let findUser = myDataBase.find((user) => user.id == id);
    console.log(findUser);

    let filterUser = myDataBase.filter((user) => user.id == id);
    console.log(filterUser);
  } catch (error) {
    console.log(error);
  }
}
// fetchDataById(3);

// use for each
async function fetchAllData() {
  try {
    let response = await fetch("https://reqres.in/api/users");
    let fetchData = await response.json();
    console.log(fetchData);

    // for of
    // for (let data of fetchData.data) {
    //     console.log(data.id, "|", data.first_name, "|", data.last_name);
    // }

    // forEach
    // fetchData.data.forEach((user) => {
    //   console.log(user.id, "|", user.first_name, "|", user.last_name);
    // });

    // map
    fetchData.data.map((user) => {
      console.log(user.id, "|", user.first_name, "|", user.last_name);
    });
  } catch (error) {
    console.log(error);
  }
}
fetchAllData();
