const person = {
  age: "shool",
}

for (const key in person) {
    console.log(key, person[key]);
}

function isEmpty (person) {
  for (const key in person) {
      return "Не пусто"
  }
  return "Пусто"
}

console.log(isEmpty(person));



const task = {
  title: 'Изучить Объекты в JavaScript',
  description: 'Разобрать работу с объектами',
  isCompleted: false
};

function cloneAndModify(object, modifications) {
  return {...object, ...modifications};
}

const modifiedTask = cloneAndModify(task, {
  isCompleted: true,
  title: 'Изучить JavaScript'
});

for (let key in modifiedTask) {
  console.log(`${key}: ${modifiedTask[key]}`);
}



function callAllMethods(obj) {
    for (const key in obj) {
        if (typeof obj[key] === "function") {
            obj[key]();
        }
    }
}

const myObject = {
    method1() {
        console.log("Метод 1 вызван");
    },

    method2() {
        console.log("Метод 2 вызван");
    },

    property: "Это не метод"
};

callAllMethods(myObject);