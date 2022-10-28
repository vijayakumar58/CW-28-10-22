var student = [
    {
        name:"alex",
        marks:50
    },
    {
        name:"bobby",
        marks:60
    },
    {
        name:"candr",
        marks:70
    }
]
var result=student.map((element)=>element.marks+10)
console.log(result);
var result2=student.filter((element)=>element.marks>50)
console.log(result2);
var result3=student.reduce((acc,cv)=>acc+cv.marks,0)
console.log(result3);

var words =["guvi","geek","networks","private","ltd","chennai"]
 var result1 = words.filter(element=>element.length>6)
    console.log(result1)