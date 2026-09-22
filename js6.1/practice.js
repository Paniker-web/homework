const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

function getUserAverageAge(users) {
  let sum = 0; 

  users.forEach(function (users) {
    sum += users.age;
  });

  return sum / users.length;
}

console.log(getUserAverageAge(users))

function getAllAdmins(users) {

  const admins = [];

  users.forEach(function (user) {
    if (user.isAdmin === true) {
      admins.push(user)
    }
  });
  return admins;
}

console.log(getAllAdmins(users))

function first(arr, n) {
  const result = [];

  if (n === undefined) {
    result.push(arr[0]);
    return result;
  }

  if (n > arr.length) {
    throw new Error("Число больше количества элементов в массиве");
  }

  arr.forEach(function(element, index) {
    if (index < n) {
      result.push(element);
    }
  });

  return result;
}

console.log(first(users, 3));