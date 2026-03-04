// // let age = 20 ; 
// // let  name = "Dinara";
// // let isStudent = true ;
// // console.log("Name: " , name);
// // console.log("Age: " , age );
// // console.log("Is student " , isStudent) ; 
// // let value = 10 ; 
// // console.log(value); 
// // value = "теперь это строока" ; 
// // console.log(value);
// // value = true ; 
// // console.log(value);
// let userName = "Aлексей";
// console.log('привет ${userName}');
// let price = 99.99;
// let temperature = -15 ; 
// let infinity = 1 / 0 ;
// let notANumber =0/0;
// console.log(0.1 + 0.2);
// let bigNumber = 9007543958309458n ;
// let huge = BigInt("4900490394294453453535");
// let isAlive = true ; 
// let isWorking = false ; 
// let isAdult = age >= 18;
// let x ;
// let y = undefined;
// let userData = null ; 
// let id = Symbol("id");
// let person = {
//     name : "станислва" ,
//     age : 30 , 
//     isStudent : false, 
//     sayHello: function(){
//         console.log("Привет");
//     }, 
// };
// console.log(person.name)
// let fruits = ["яблоко" , "банан" , "апельсин"];
// let numbers = [1,2,3,4,5];
// let mixed = ["текст" , 42 , true , null]; 

// function sum(a , b){
//     return a + b ; 
// }

// let multiply = function ( x ,y){
//     return x * y ; 
// }
// console.log(sum(5 ,3))

// let now = new Date();
// let birtday = new Date("2007-07-28")

// let a = 10 ; 
// let b = 3 ;
// console.log(a+b) ; 
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// console.log(10 + "5");
// console.log("10" - 5 ); 

// const numbersArray = [1,2,3];
// numbersArray[0] = 10 ;
// console.log(numbersArray);
// numbersArray = [5,6,7] ; 

// const persons = {name : "Dinara" , age : 18};
// persons.age = 18 ; 
// persons.city = "Volgograd";
// console.log(persons)
// person = {name: "Stas"};

// console.log(typeof "текст");
// console.log(typeof 42);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof function () {});

// let numberx = null ; 
// console.log(numberx === null) ; 

// //практическое задание 1
// let newPrice = 4 ;
// console.log(newPrice);
// console.log(typeof newPrice);
// newPrice = "rrr" ;
// console.log(newPrice);
// console.log(typeof newPrice);

// let num = 42 ;
// let str = String(num) ;
// let str2 = num.toString();
// let str3 = "" +num ;
// let strNum = "123" ; 
// let int = Number(strNum); 
// let int2 = parseInt("42.5");
// let float = parseFloat("3.14");
// let int3 = + "99"

// let bool1 = Boolean(1) ; 
// let bool2 = !!1 ; 
// let bool3 = Boolean(0) ; 
// let bool4 = Boolean("");

// console.log("5" +3);
// console.log("5" -3);
// console.log("5" * "2");
// console.log(true +1);
// console.log(true +1);
// console.log(null +1);
// console.log(undefined+1);

// console.log(5=="5");
// console.log(5==="5");
// console.log(0==false);
// console.log(0===false);
// console.log(null == undefined);
// console.log(null === undefined);

// let obj1 = {name : "john"} ;
// let obj2 = {neme : "john"} ;
// console.log(obj1 == obj2) ;
// console.log(obj1 === obj2) ;

// let obj3 = obj2;
// console.log(obj1 ===obj3);

// let arr1 = [1,2,3];
// let arr2 = [1,2,3];
// console.log(arr1 === arr2) ; 

//практическое задание 2 ; 
// let x1 = 10 ;
// let y1 = 2 ;
// console.log(x1 + y1);
// console.log(x1 - y1);
// console.log(x1 * y1);
// console.log(x1  / y1);

// x1 = "10" ; 
// console.log(x1 + y1);
// console.log(x1 - y1);
// console.log(x1 * y1);
// console.log(x1  / y1);

//практическая работа 3 
// let a2 = 3 ;
// let b2 = 5 ;
// console.log(a2 * b2);
// console.log(a2 + b2);

let temperature = 15;
if (temperature < 0){
    console.log("холодно")
}else if (0<temperature && temperature>=20){
    console.log("прохладно")
}else{
    console.log("тепло")
}

let isLoggedIn = true;
let isAdmin = false;
if ( isAdmin == true && isLoggedIn == true ){
    console.log("Полный доступ");
}else if (isAdmin == true & isLoggedIn != true){
    console.log( "Ограниченный доступ")
}else{
    console.log( "Доступ запрещён")
}

let a3 = 10;
let b3 = "10";
console.log(a3 == b3) ;
console.log(a3 === b3) ;
// == сравнивает значение после преобразование а === сравнивает и тип и значение 

let  monthNumber = 12;
switch (monthNumber){
    case 1 : console.log("Январь");break;
    case 1 : console.log("Февраль");break;
    case 1 : console.log("Март");break;
    case 1 : console.log("Апрель");break;
    case 1 : console.log("Май");break;
    case 1 : console.log("Июнь");break;
    case 1 : console.log("Июль");break;
    case 1 : console.log("Август");break;
    case 1 : console.log("Сентябрь");break;
    case 1 : console.log("Октябрь");break;
    case 1 : console.log("Ноябрь");break;
    case 1 : console.log("Декабрь");break;
    default: console.log("не правильный параметр")
}