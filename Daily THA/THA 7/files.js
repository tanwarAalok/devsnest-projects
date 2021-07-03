const person = {
    name: "David Rayy",
    sclass: "VI",
    rollno : 12,
}
console.log("Keys of Objects: " + Object.keys(person));

console.log()
//----------------------------------------------//

const person2 = new Object({name: 'Aalok', sclass: 'X', rollno: 1,});
console.log("Object before deleting: ",person2);
delete person2.rollno;
console.log("Object after deleting", person2);

console.log()
//---------------------------------------------------//

const person3 = {firstname: 'Aalok', lastname: 'Tanwar',};
console.log("Lenght of object: "+ Object.keys(person3).length);

console.log();
//------------------------------------------------------//

var library = [
    {
        author: "Bill Gates",
        tittle: "The Road Ahead",
        readingStatus: true,
    },
    {
        author: "Steve Jobs",
        tittle: "Waiter Isaacson",
        readingStatus: true,
    },
    {
        author: "Suzanne Collins",
        tittle: "Mockingjay: The Final Book of the Hunger Games",
        readingStatus: false,
    }
];

for(var i=0; i<library.length; i++){
    if(library[i].readingStatus){
        console.log(library[i].tittle + " by " + library[i].author + " -> Compeleted");
    }
    else{
        console.log(library[i].tittle + " by " + library[i].author + " -> Not compeleted");
    }
}

console.log();
//------------------------------------------------------------------------------------------------//

const volume = {
    radius: 3,
    height: 4,
}
const pie = 3.1415;

var volumeCylinder = pie*(volume.radius*volume.radius)*volume.height;
console.log("Volume of Cylinder: " + volumeCylinder.toFixed(4));

console.log();
//--------------------------------------------------------------------------------------//

var library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates', 
        libraryID: 1254, 
    }, 
    { 
        title: 'Walter Isaacson', 
        author: 'Steve Jobs', 
        libraryID: 4264, 
    }, 
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'Suzanne Collins', 
        libraryID: 3245, 
    },
]; 
function sortObj(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
}
for(var i=0; i<library.length; i++){
    let obj = sortObj(library[i]);
    console.log(obj);
}

//---------------------------------------------------------------------------//
