/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const updatedEmployee =[];
  // const developers = arr.filter(employee =>{
  //   if(employee.profession === "developer")
  //       updatedEmployee.push(employee)
  //   }
  // )
  // console.log(updatedEmployee);


  const ansList = arr.filter(employee => employee.profession === "developer")
    .map(employee =>(
      {id: employee.id, name: employee.name, age:employee.age , profession:employee.profession}
    ))
    
  console.log(ansList);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const updatedEmployee = [];
  const ans = arr.forEach(employee => {
    if(employee.profession === "developer"){
      updatedEmployee.push(employee)
    } 
  })

  console.log(updatedEmployee);
}

function addData() {
  //Write your code here, just console.log
  const employee = { id: 5, name: "Rohit", age: "21", profession: "Backend Developer" };
  arr.push(employee);

  // console.log(employee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  for(let key in arr){
    if(arr[key].profession == "admin"){
      arr.splice(key,1)
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const employeeList = [
    { id: 102, name: "Roshan", age: "20", profession: "java Developer" },
    { id: 203, name: "Mohit", age: "17", profession: "Backend Engineer" },
    { id: 403, name: "Vibhu", age: "19", profession: "full stack engineer" },
  ];

  const concatenatedArray = arr.concat(employeeList);
  console.log(concatenatedArray);
  // return concatenatedArray;
}
