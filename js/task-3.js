// Задача 3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".
const findBestEmployee = function (employees) {
  let maxTask = 0;
  let bestEmployee = '';
  const entries = Object.entries(employees);

  for (let [name, task] of entries) {
    if (task > maxTask) {
      maxTask = task;
      bestEmployee = name;
    }
  }

  //   for (const employee of employees) {
  //     const task = employees[employee];
  //     if (task > maxTask) {
  //       maxTask = task;
  //       bestEmployee = employee;
  //     }
  //   }

  return bestEmployee;
};

// function findBestEmployee(employees) {
//   let max = 0;
//   let bestEmployee;

//   for (const employee in employees) {
//     const numOfTasks = employees[employee];
//     if (numOfTasks > max) {
//       max = numOfTasks;
//       bestEmployee = employee;
//     }
//   }

//   return bestEmployee;
// }

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
