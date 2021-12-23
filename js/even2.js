let a = 35;  
let b = 45;
// karochi ikkita son borakan
alert("Birinchi son a = " + a);
alert("Ikkinchi son b = " + b);
// betda osha ikkita sonni korarkanmiz
console.log("a = " + a);
console.log("b = " + b);
// betda bosa consoleda korarkanmiza
let calculation = prompt("Enter the calculation type 'a < b' or 'a > b' ");
// betda  hisoblash usulini kiritarkanmiz a<b yoki a>b
if(calculation == "a<b"){
    alert(a<b);     
}
// betda agar a<b alertga a<b degan sorov chiqargin degan buyru berilgan
else if(calculation == "a>b"){
    alert(a>b);
}
// betda agar a>b alertga a>b degan sorov chiqargin degan buyru berilgan