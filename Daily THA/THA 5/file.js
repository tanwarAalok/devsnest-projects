var test1 = 'w3resource';
test2 = [1,4,5,6];

function checkArray(test){
    return Array.isArray(test);
}

console.log(checkArray(test1));
console.log(checkArray(test2));

// ----------------------------------------//

function clone_array(test_case){
    return test_case.slice(0);
}
console.log(clone_array([1,2,4,0]));
console.log(clone_array([1,2,[4,0]]));

//------------------------------------------//

function firstElement(test_case,n=1){
    if(n>0) return test_case.slice(0,n);
    else return test_case.slice(0,0);
    
}
console.log(firstElement([7,9,0,-2]));
console.log(firstElement([],3));
console.log(firstElement([7,9,0,-2],3));
console.log(firstElement([7,9,0,-2],6));
console.log(firstElement([7,9,0,-2],-3));

//------------------------------------------//

myColor = ["Red","Green","White","Black"];
function join(test_case){
    console.log(test_case.toString());
}
join(myColor);

//---------------------------------------//

var arr = [3,'a','a','a',2,3,4,3,'a',9];

function maxCount(test_case){
    var ans; 
    var highest = 1;
    var current = 0;
    for(var i=0; i<test_case.length; i++){
        for(var j=i; j<test_case.length; j++){
            if(test_case[i] == test_case[j]) current++;
            if(highest<current) {
                highest = current;
                ans = test_case[i];
            }
        }
        current = 0;
    }
    return ans;
    
}
console.log(maxCount(arr));

//------------------------------------------//
