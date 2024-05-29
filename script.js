var son_1 = +prompt("1 sonini kiritin");

var son_2 = +prompt("2 sonini kiritin");

var son_3 = +prompt("3 sonini kiritin");


if(son_1 > son_2 && son_1 < son_3 || son_1 < son_2 && son_1 > son_3)
{
    alert("ortanchi son:" + son_1);
} 
else if(son_2 > son_1 && son_2 < son_3 || son_2 < son_1 && son_2 > son_3)
{
    alert("ortanchi son:" + son_2);
}
 else if(son_3 > son_1 && son_3 < son_2 || son_3 < son_1 && son_3 > son_2)
{
    alert("ortanchi son:" + son_3);
}
else{
    alert("Iltimos yozilgan sonlarni kiriting. Boshqatdan urinib koring")
}