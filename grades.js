const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {a:0, b:0, c:0, d:0, f:0}; // You'll need to change this line of code

console.log("hi");
for (let i = 0; i < scores.length; i++) {
   switch(true){
        case (scores[i] >= 91 && scores[i] <= 100):
        grades.a += 1;
        console.log("in for ", scores[i]);
        break;

        case (scores[i] >= 81 &&  scores[i] < 91):
        grades.b += 1;
        console.log("in for ", scores[i]);
        break;                      

        case (scores[i] >= 71 &&  scores[i] < 81):
        grades.c += 1;
        console.log("in for ", scores[i]);
        break;                      

        case (scores[i] >= 61 &&  scores[i] < 71):
        grades.d += 1;
        console.log("in for ", scores[i]);
        break;  

        case (scores[i] >= 0 && scores[i] < 61):
        grades.f += 1;
        console.log("in for ", scores[i]);
        break;

    default:
        console.log("Please enter a value within the grade values");
   }
}

var lowHigh = scores.sort(function(a, b){return a - b});

console.log("Lowest grade is ", lowHigh[0]);
console.log("Highest grade is ", lowHigh[lowHigh.length - 1]);

var currentGradeCount = 0;
var mostFrequent = [];
for(var x in grades){
    if(grades[x] > currentGradeCount){
        mostFrequent = [x];
        currentGradeCount = grades[x];
        
    } else if(grades[x] === currentGradeCount){
        mostFrequent.push(x);
    }
}

var newGradeCount = 100;
var leastFrequent;
for(var x in grades){
    if(grades[x] < newGradeCount){
        leastFrequent = [x];
        newGradeCount = grades[x];
        
    } else if(grades[x] === newGradeCount){
        mostFrequent.push(x);
    }
    }


console.log("The least frequent grade is ", leastFrequent);
console.log("The most frequent grade is ", mostFrequent);


console.log(lowHigh);
console.log(grades);