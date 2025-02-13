// Data types in js (undifined, boolean, object)

//let matn = "salom"                 //string
//let raqam = "12345"               //number
//let soz;                         //undefinded
//document.write(raqam)

//let rost = true;                   //true & false
//document.write(rost);              //booleon 

//let arrayObject = [45, 23, "salom", "matn", "true", true, false, "javascript", "olma", 123]
//console.log(arrayObject[4],arrayObject[2]);
//let oddiyObject = {ism: "Zohir", yoshi: "14", mahallasi: "Mirishkor", dostlari: "Denis & Feruz"}; //key,value
//console.log(oddiyObject.ism,oddiyObject.mahallasi,oddiyObject.dostlari)

//Function in js

//function savatchaniTekshirish(uzatilganContainer = [45, "false", false]){
//    if(savatcha.length == 0){
//        document.write("Savatchaning ichida " + savatcha.length + " dona ma'lumot bor!")
//    }
//    else{
//        document.write("Savatchaning ichida" + savatcha.length + " ta ma'lumot bor!")
//   }
//}
//let savatcha = [12, "matn", true, false];
//savatchaniTekshirish(container);

//Date in JS

let sana = new Date();

sana.setFullYear(2010);
sana.setMonth(9);
sana.setDate(14);

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftakuni = sana.getDay();

let oylar = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"]
let kunlar = ["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"]

document.write("Bugun " + yil + "-yil " + oylar[oy] + "-oyning " + kun + "-kuni Haftaning " + kunlar[haftakuni] + " kuni");