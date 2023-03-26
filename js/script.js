
// let num = 5;
// while ( num <= 10 ){
//     console.log(num);
//     num++;
// }

// for ( let i = 5; i <= 10; i++){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while ( num <= 10);

let numFirstExercise = 5;
for ( let i = 5; i <= 10; i++){
    console.log(numFirstExercise);
    numFirstExercise++;
}


let numSecondExercise = 20;
for ( let i = 0; i < 20; i++){
    console.log(numSecondExercise);
    numSecondExercise--;
    if (numSecondExercise == 13 ) break;
}

//let number = 0;
for ( let i = 1; i <= 10; i++){
    if ( i % 2 == 0){
        console.log(`${i}`); 
    }
}


for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let b = 2;
while ( b <= 16){
    if ( b % 2 === 0){
        b++;
        continue
    }else {
        console.log(b);
    }
    b++;
}


const arrNumbers = [];
    for (let i = 5; i <= 10; i++) {
        arrNumbers[i - 5] = i;
    }
    console.log(arrNumbers);
    return arrNumbers;