// Write your solution in this file!
//onst name = "employees";
//unction updateEmployeeWithKeyAndValue(employee='Sam', key, value){
 //  employee[key]=value;
//}

const employee = {name:'Sam', streetAddresss:"11 Broadway"};
function updateEmployeeWithKeyAndValue(employee, key, value){    
    const firstEmployee ={...employee};
    firstEmployee[key]=value;
    console.log(firstEmployee)
    return firstEmployee;
 
 }


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    //value ='12 Broadway';
    const firstEmployee ={...employee, value};
    employee[key]=value;
    console.log(firstEmployee)
    return employee;

}
function deleteFromEmployeeByKey(employee, key){
   // function deleteFromObjectByKey(object, key) {
        var employee =({employee, key});
        delete employee[key];
        return employee;
    }
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}