function Voting( age){
if(age>=18){
    console.log("You can Vote");
}
else if(age<0){
    console.log("invalid age");
}else
console.log("Cannot Vote")

}


//Arrow function
 const sum = (a,b)=>{
return a+b;
 }


// normal fun

const hello = ()=>{
   
    return  "How are you!!"
}

// call function
    // let  input = prompt("Enter Age");
    // Voting( Number.parseInt(input));

    // console.log(sum(2,8));

    // let result =  hello();
    // console.log(result);

    // ForLoop
//    let sum1 =0;
//     for(let i = 0 ;i<=5 ; i++){
//         sum1 += i

//     }
//     console.log(sum1); 

//     // for in loop
//     let obj = {
//         Abhi : 45,
//         Anuj : 67,
//         Akash : 87
//     }

//     for(let a in obj ){
//         console.log(a,obj[a]);
//     }

    // Array in js
    // const arr = [1,2,3];
    // const value = arr.indexOf(2);
    // console.log(arr[value+1])
    // console.log(arr[value-1])
    // console.log(arr[1])

    // creating object in js

    const Student = {
        name : "Abhi",
        age : 21,
        "key" : true ,
        votinghObj : Voting(67)

    }

    Student.hobby = "vedioGame"

    delete Student.hobby

    

    console.log(Student)
    console.log(Student.name)
    console.log(Student.age)
    console.log(Student.key)
    console.log(Student['name'])

    //set datastructure

    const letters = new Set();
    letters.add(1);
    letters.add(2);
