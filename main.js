//TASK 1:

/* Based on object:

Create a function that should receive this object, and repack it to the new object where values from previous object represent both, keys and values of the new object. */
var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};
function repack (newData) {
    var repackData = {}
    repackData[newData.name]=newData.name;
    repackData[newData.lastName]=newData.lastName;
    repackData[newData.status]=newData.status;
    return repackData;
    }
console.log(repack(someData))

//TASK 2: 

/* Based on array:

Create a function that should repack this array to another one where all numbers are contained in the same array, in the exact order like in provided array.
*/

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];
 function repackArray(array) {

     var arraySecond = new Array();
     for (var i = 0; i < array.length; i++) {
         if (array[i].length) {
             for (var j = 0; j < array[i].length; j++) {
                 arraySecond[arraySecond.length] = array[i][j];
                 
            }
        } else {
                 arraySecond[i] = array[i];
            
        }
    }
        return arraySecond
}

 console.log(repackArray(someData))

 // TASK 3: 

/* Based on array:

Create a function that should receive array, get both subarrays from parent array, and pass it into another function, which should then join those arrays. In the end result should be returned and stored in variable which contains first function.*/

var numbers = [13, 45, 56, [32, 11], 27, [55, 92]];

var calculateNumbers = takeOut (numbers,joinNumbers)

function takeOut(task,join) {
    var someNumber=[];
    for (let i = 0; i < task.length; i++) {
        if (typeof task[i] === "object") {
            someNumber[someNumber.length] = task[i]
        }
        
    }return join(someNumber)
}
function joinNumbers(task) {
    var someNumberSecond = [];
    for (let i = 0; i < task.length; i++) {
        for (let j = 0; j < task.length; j++) {
            someNumberSecond[someNumberSecond.length] = task[i][j];
            
        }
        
    }return someNumberSecond
}
console.log(calculateNumbers)

//TASK 4:

/* Based on object: 

Create a function that should check if there is name in object, if yes it should return another function which should remove name from the function, 
if no then it should return a function which would set a name propery to the object, with the value passed once function is called.
*/
var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};
function checkName(person) {
    if (person.hasOwnProperty("name")) {
        return function (otherName) {
            delete person.name;
            console.log("Property name has been deleted")
        }
    }else{
        return function(otherName){
            person.name = otherName;
            console.log("Name" + person.name);
        }
    }
}
checkName(someData)("Jane");
checkName(someData)("Jane");

// task 5

/* Based on object:

Create a method that should check if there is name in object, if yes it should create second method in the same object and then call it. 
The second method should remove name from the function, and console log the object in it's current state. 
The second method should then create a third method and call it. Third method should add name property back to the object, with value of "Mike", and then console log object.
 */
var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

someData.methodOne = function(){

if(this.name){

this.methodTwo = function (){
delete this.name;
console.log(this);
this.methodThree = function (){
this.name = "Mike";};
this.methodThree()


};
this.methodTwo()
}

};

someData.methodOne ()
console.log(someData);

//***** JS PRACTISE HOMEWORK *****
// task 1
//Create array with data, and loop through it, so in the end you console log this:

/* "At position 0, subposition 0, value is 1"
"At position 0, subposition 1, value is 2"
"At position 0, subposition 2, value is 3"
"At position 1, subposition 0, value is 4"
"At position 1, subposition 1, value is 5"
"At position 1, subposition 2, value is 6"
"At position 2, subposition 0, value is 7"
"At position 2, subposition 1, value is 8"
"At position 2, subposition 2, value is 9"
 */
var someArrays =[[1,2,3],[4,5,6],[7,8,9]];

for (let i = 0; i < someArrays.length; i++) {
    for (let j =0;j < someArrays.length; j++) {
        console.log("At position "+ i + ",subposition "+ j + ",value is " + someArrays[i][j]);

    }
}

// TASK 2: 

/* Create a method that should console log name and age from any object. 
Then create array with multiple objects, each object should contain different names and ages. 
Call a method on each of them. */

function createObjects(array) {
    for (var i = 0; i < arrayOfObjects.length; i++) {
        console.log("Name is " + arrayOfObjects[i].name + " and age is " + arrayOfObjects[i].age);

    }
}

arrayOfObjects = [
    {
        name:"Sofi",
        age:3
    },
    {
        name:"Luca",
        age:6
    },
    {
        name:"Marco",
        age:16

    }

];
createObjects(arrayOfObjects);